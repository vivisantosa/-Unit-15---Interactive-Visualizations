// 
//  UofT SCS Data Analytics Boot Camp
//  Unit 15: Interactive-Visualizations-and-Dashboards
//  Author:	Vivianti Santosa 
//  2020-08-28

//  <!--BELLYBUTTON BIODIVERSITY --> 

//create global variable
var data;

//initialize data
d3.json("samples.json").then(dataInitial => {
  // innitialize data  
  data = dataInitial;

  // create values for dropdown select values
  var selectValues = dataInitial.names;             // list of sample ids/names
  console.log(`selectValues ${dataInitial.names}`);

  var selectOpt = d3.select("#selDataset");
  selectValues.forEach(value => {
    selectOpt.append("option").text(value)
  });
});


// upon the change of the selected item in inputBox (Test Subject ID No.:), 
// collect input('selectedID'), and display graphs based on 'selectedID'
d3.selectAll("#selDataset").on("change", plotFunctions);

function plotFunctions() {
  var selectedID = d3.select("#selDataset").property("value");
  console.log(`selectedID ${selectedID}`);
  
  var filteredMetadata = data.metadata.filter(value => value.id == selectedID)[0];
  console.log(filteredMetadata);
  var filteredSample = data.samples.filter(value => value.id == selectedID)[0];
  console.log(filteredSample);

  panelPlot(filteredMetadata);
  hbarChart(filteredSample);
  bubbleChart(filteredSample);
  gaugeChart(filteredMetadata);
}


function panelPlot(filteredMetadata) {
  // select Demographic Info panel (id="sample-metadata") to put data
  var dgraphInfo = d3.select("#sample-metadata");   
  // empty the demographic info panel each time before getting new id info 
  dgraphInfo.html("");
  // grab the necessary demographic data data for the id and append the info to the panel
  Object.entries(filteredMetadata).forEach((key) => {
    dgraphInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
  });   
}

function hbarChart(filteredSample) {
  // transform otu_id - to add the letter "OTU" before the number id
  var OTU_id = (filteredSample.otu_ids.slice(0, 10)).reverse().map(d => "OTU " + d);

  // create the horizontal bar chart
  var data = [{
    y: OTU_id,
    x: filteredSample.sample_values.slice(0, 10).reverse(),
    type: "bar",
    text: filteredSample.otu_labels,
    //marker: {color: 'teal'},
    orientation: 'h'
  }];
    var layout = {
      width: 640, height: 400,
  };
  Plotly.newPlot("bar", data, layout); 
}

function bubbleChart(filteredSample) {
  var data = [{
    x: filteredSample.otu_ids,
    y: filteredSample.sample_values,
    text: filteredSample.otu_labels,
    mode: 'markers',
    marker: {
      color: filteredSample.otu_ids,
      colorscale: 'Portland',
      size: filteredSample.sample_values},
  }];
  var layout = {
    //title: 'Bubble Chart Hover Text',
    xaxis: {title: "OTU ID"}, 
    showlegend: false,
    height: 400,
    width: 1370 
  };
  Plotly.newPlot('bubble', data, layout);
}

function gaugeChart(filteredMetadata) {
  console.log(`gaugeChart`);
  console.log(filteredMetadata.wfreq)
  var data = [{
      domain: { x: [0, 1], y: [0, 1] },
      value: filteredMetadata.wfreq,
      title: { text: "Belly Button Washing Frequency<br> Scrubs per Week" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [null, 9] },
        bar: { color: "darkgrey" },
        steps: [
          { range: [0, 1], color: "#0000ff" },
          { range: [1, 2], color: "#1247b8"},
          { range: [2, 3], color: "#1a6699" },
          { range: [3, 4], color: "#29a35c" },
          { range: [4, 5], color: "#33cc33" },
          { range: [5, 6], color: "#5cb829" },
          { range: [6, 7], color: "#99991a" },
          { range: [7, 8], color: "#d67a0a" },
          { range: [8, 9], color: "ff6600" }
        ]}   
    }];
  var layout = { width: 640, height: 400, margin: { t: 0, b: 0 } };
  Plotly.newPlot('gauge', data, layout);
}


