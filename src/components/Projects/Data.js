import projectsImages from "../../assets/projectsImages";

const projects = [
  {
    id: 1,
    title: "Implementation of a GIS system in Renewable Energy Projects",
    category: ["gis", "all"],
    image: projectsImages.oze,
    desc: "Implementation of a GIS system in renewable energy projects",
    tech: "PostgreSQL/PostGIS, QGIS, Python",
    pathGitHub:
      "https://github.com/hroblesdiez/gis_system_in_renewable_energy_projects",
  },
  {
    id: 2,
    title: "Localization of plots for Renewable Energy Projects",
    category: ["gis", "all"],
    image: projectsImages.plots,
    desc: "How to locate plots for the development of renewable energy projects in Poland and don't die in the attempt",
    tech: "QGIS, Python, Postman",
    pathDemo:
      "https://humberto-robles.netlify.app/blog/how-to-locate-plots-for-the-development-of-renewable-energy-projects-in-poland",
  },
  {
    id: 3,
    title: "Polish Power Plants",
    category: ["webgisapp", "all"],
    image: projectsImages.powerplants,
    desc: "Web showing the Power Plants in Poland",
    tech: "QGIS, JavaScript",
    pathDemo: "https://hroblesdiez.github.io/polish_power_plants/",
    pathGitHub: "https://github.com/hroblesdiez/polish_power_plants",
  },
  {
    id: 4,
    title: "Polish crop production",
    category: ["webgisapp", "all"],
    image: projectsImages.apigus,
    desc: "A simple web app to see the Polish production and performance of crops from 1999 to 2022",
    tech: "QGIS, Rest API, JavaScript",
    pathDemo: "https://hroblesdiez.github.io/api_GUS/",
    pathGitHub: "https://github.com/hroblesdiez/api_GUS",
  },
  {
    id: 5,
    title: "Earthquakes in Europe from 2020 to 2022",
    category: ["webgisapp", "all"],
    image: projectsImages.earthquakes,
    desc: "ArcGIS Maps SDK for JavaScript: Query top features from a FeatureLayer",
    tech: "ArcGIS Maps SDK for JavaScript 4.26",
    pathDemo: "https://arcgis-api-for-javascript-05.netlify.app/",
    pathGitHub:
      "https://github.com/hroblesdiez/arcgis_maps_API_for_javascript/blob/master/05/index.html",
  },
  {
    id: 6,
    title: "Geologic map",
    category: ["cartography", "all"],
    image: projectsImages.mapa_geologico,
    desc: "Geologic map for the Geological and Mining Institute of Spain",
    tech: "MicroStation",
    pathDemo:
      "https://www.researchgate.net/profile/Augusto-Rodriguez-Garcia-2/publication/333619573_Mapa_Geomorfologico_de_Espana_150000_n263_Celanova/links/5cf7a76a299bf1fb1859cd14/Mapa-Geomorfologico-de-Espana-150000-n263-Celanova.pdf",
  },
  {
    id: 7,
    title: "Coolfood",
    category: ["dataanalysis", "all"],
    image: projectsImages.sql,
    desc: "Analyzing the performance of a delivery food company querying using SQL a MS SQL Server database",
    tech: "MS SQL Server, T-SQL",
    pathGitHub: "https://github.com/hroblesdiez/coolfood",
  },
  {
    id: 8,
    title: "Optical vs Radar Optical Satelite Images",
    category: ["dataanalysis", "all"],
    image: projectsImages.optical_radar_images,
    desc: "Correlation between NDVI from optical and radar satellite images",
    tech: "Python, Pandas, NumPy, Matplotlib",
    pathGitHub:
      "https://github.com/hroblesdiez/optical_vs_radar_satellite_images",
  },
  {
    id: 9,
    title: "Web scrapping and Python analysis",
    category: ["dataanalysis", "all"],
    image: projectsImages.handball,
    desc: "Project to predict the winner of the 2022 European Men's Handball Championship",
    tech: "Python, Pandas, NumPy",
    pathGitHub:
      "https://github.com/hroblesdiez/2022_european_men_handball_championship",
  },
  {
    id: 10,
    title: "Power BI analysis",
    category: ["dataanalysis", "all"],
    image: projectsImages.bicilink,
    desc: "A Sales Dashboard Power BI showing the performance of a bicycle company",
    tech: "Power BI, DAX, Excel",
    pathGitHub: "https://github.com/hroblesdiez/bicilink",
  },
];

export default projects;
