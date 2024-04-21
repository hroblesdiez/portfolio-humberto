import { FaEye, FaGithub } from "react-icons/fa";

const Card = ({ item, pathDemo, pathGitHub }) => {
  const { title, image, tech } = item;
  const notShowDemo = [
    "Implementation of a GIS system in Renewable Energy Projects",
    "Coolfood",
    "Optical vs Radar Optical Satelite Images",
    "Web scrapping and Python analysis",
    "Power BI analysis",
    "The Power of PostgreSQL + PostGIS",
  ];
  const notShowGithub = [
    "Localization of plots for Renewable Energy Projects",
    "Geologic map",
  ];

  return (
    <div className="relative shadow-lg shadow-bg2 group rounded-xl max-w-[250px] min-h-[350px] flex-[45%] mb-12 md:mx-2">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
        className="h-[350px]"
      >
        <div className="opacity-0 group-hover:opacity-100 bg-[rgba(0,0,0,.75)] transition-all ease-in duration-300 w-full h-full rounded-[10px] -z-10">
          {/* hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-all ease-in duration-300 p-8 h-full flex flex-col items-center justify-center z-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white tracking-wider mb-4">
                {title}
              </h3>
              {/* <span className="text-lg text-white font-semibold">{desc}</span> */}
              <p className="text-base text-primary font-bold"> {tech}</p>
            </div>
            <div className="flex justify-center pt-8 text-center space-x-3 cursor-pointer text-white">
              {notShowDemo.indexOf(title) === -1 && (
                <a
                  href={pathDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors duration-300 ease-in"
                >
                  <FaEye size={32} />
                </a>
              )}
              {notShowGithub.indexOf(title) === -1 && (
                <a
                  href={pathGitHub}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors duration-300 ease-in"
                >
                  <FaGithub size={32} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
