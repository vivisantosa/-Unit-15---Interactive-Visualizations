# Belly Button Biodiversity Project<br>
<img src="http://robdunnlab.com/wp-content/uploads/microbes-sem.jpg" width="1080"><br>

The belly button is one of the habitats closest to us, and yet it remains relatively unexplored. In January 2011, Rob Dunn lab at North Carolina State University launched Belly Button Biodiversity project to investigate the microbes inhabiting our navels and the factors that might influence the microscopic life calling this protected, moist patch of skin home. In addition to inspiring scientific curiosity, Belly Button Biodiversity inspired conversations about the beneficial roles microbes play in our daily lives.<br>
http://robdunnlab.com/projects/belly-button-biodiversity/#:~:text=The%20coolest%20study%20of%20biodiversity,yet%20it%20remains%20relatively%20unexplored.&text=In%20addition%20to%20inspiring%20scientific,play%20in%20our%20daily%20lives.<br>

## Unit-15 Interactive Visualizations and Dashboards
Author: Vivianti Santosa <br>
Date: 2020-08-31 <br><br>

#### https://vivisantosa.github.io/Unit-15-Interactive-Visualizations/index.html<br><br>
<img align="right" src="Images/Screenshot 1.png" width="50%">
This assignment is to create an interactive dashboard for the Belly Button Biodiversity project, which catalogs the microbes that colonize human navels. <br>
The Belly Button Biodiversity dataset catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.
The dashboard will allow visitors to explore the biodiversity and the metadata (information about the person behind the sample) of each sample, by choosing a sample number.<br>
Please enjoy our Belly Button Dashboard with the link above. <br>

The dashboard is to be created using HTML, d3, and javascript, using graphs from Plotly library. The steps to create the dashboard is as follow :<br>

1. Data connection<br>
  The data for this project is provided in samples.json file. It is uploaded and read to the app file using the d3 library to initialize data and create a global data to be used in the whole project. <br>

2. Create dropdown menu and populate it with information from the global data.<br>

3. Create graphs with Plotly library and display it in assigned ligation in the HTML dashboard.  <br>
    - Dynamic Table
    - Horizontal Bar Chart 
    - Bubble Chart 
    - Gauge Chart

## EXTRA 
In addition to the chart above I created a sunburst chart with data from the website. Instead of using sample data, the sunburst chart uses the whole project data and shows the taxonomy of the 20 most common bacteria.  <br>
To create this chart the data is rearranged according to parents - children system requires for this type of charts.<br><br>
<img  src="/Images/sunburst1.png" width="60%"><br>
