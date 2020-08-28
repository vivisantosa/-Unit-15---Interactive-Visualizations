// 
//  UofT SCS Data Analytics Boot Camp
//  Unit 15: Interactive-Visualizations-and-Dashboards
//  Author:	Vivianti Santosa -->

//  <!--BELLYBUTTON BIODIVERSITY --> 
//  <!-- bonus part --> 

//global variable
var data;

$.get(ur_csv_file_path);

var temps = {parents:[Staphylococcus,Corynebacterium,Corynebacterium,Anaerococcus,Porphyromonas,Peptoniphilus,Anaerococcus,Finegoldia,Bacteria,Actinomycetales,Clostridiales,Corynebacterium,Corynebacteriaceae,Bacteria,Anaerococcus,Campylobacter,Aerococcaceae,Anaerococcus,Jonquetella,Prevotella,Campylobacteraceae,Corynebacteriaceae,Incertae Sedis XI,Incertae Sedis XI,Incertae Sedis XI,Porphyromonadaceae,Prevotellaceae,Staphylococcaceae,Synergistaceae,Actinomycetales,Bacillales,Bacteroidales,Bacteroidales,Campylobacterales,Clostridiales,Lactobacillales,Synergistales,Actinobacteria,Bacilli,Bacilli,Bacteroidia,Clostridia,Epsilonproteobacteria,Synergistia,Bacteroidetes,Firmicutes,Firmicutes,Proteobacteria,Synergistetes,Bacteria,Bacteria,Bacteria,Bacteria,Bacteria],
            children:[OTU-1795,OTU-922,OTU-944,OTU-2419,OTU-1167,OTU-2859,OTU-2539,OTU-2722,OTU-482,OTU-728,OTU-2011,OTU-943,OTU-909,OTU-41,OTU-2389,OTU-3450,OTU-1870,OTU-2308,OTU-3643,OTU-1314,Campylobacter,Corynebacterium,Anaerococcus,Finegoldia,Peptoniphilus,Porphyromonas,Prevotella,Staphylococcus,Jonquetella,Corynebacteriaceae,Staphylococcaceae,Porphyromonadaceae,Prevotellaceae,Campylobacteraceae,Incertae Sedis XI,Aerococcaceae,Synergistaceae,Actinomycetales,Bacillales,Lactobacillales,Bacteroidales,Clostridiales,Campylobacterales,Synergistales,Bacteroidia,Bacilli,Clostridia,Epsilonproteobacteria,Synergistia,Actinobacteria,Bacteroidetes,Firmicutes,Proteobacteria,Synergistetes,Bacteria],
            value:[1795,922,944,2419,1167,2859,2539,2722,482,728,2011,943,909,41,2389,3450,1870,2308,3643,1314,1249,17596,10599,3012,4017,4244,1041,18096,1114,19035,18096,4244,1041,1249,17628,1157,1114,16974,10078,1273,2553,33486,1961,1249,5285,19253,19589,1114,71007,21084,5285,38842,1249,1114,71007]}
