import projectsImages from "../../assets/projectsImages";
import { GiSwordman, GiCheckMark } from "react-icons/gi";
import SectionTitle from "../General/SectionTitle";

const About = () => {
  return (
    <div className="w-full mt-16 lg:mt-0" name="about" id="about">
      <div className="px-4 md:px-20 lg:px-36 md:mt-0 mb-8 md:mb-12 lg:mb-20">
        <SectionTitle icon={<GiSwordman size="28" />} text="About Me" />
        <div className="flex flex-col justify-between items-center md:flex-row md:justify-between md:items-center">
          <div className="w-full h-full md:w-[40%] mb-8 md:mb-0 md:pr-8">
            <img src={projectsImages.model} classname="object-cover w-full" />
          </div>
          <div className="w-full h-full md:w-[60%] ">
            {/* <h3 className="text-center text-lg md:text-2xl md:text-left text-title font-semibold mb-4">
              I am a GIS Analyst and Front End Developer who is passionate about
              his work.
            </h3> */}
            <ul className="text-center md:text-left text-paragraph text-lg">
              <li className="flex items-center justify-start mb-4">
                <GiCheckMark className="mr-4" />3 year experience as GIS
                Specialist
              </li>
              <li className="flex items-center justify-start mb-4">
                <GiCheckMark className="mr-4" />1 year experience as Front-End
                Developer
              </li>
              <li className="flex items-center justify-start mb-4">
                <GiCheckMark className="mr-4" />
                Good knowledge of Javascript, ArcGIS API fro Javascript, React
              </li>
              <li className="flex items-center justify-start">
                <GiCheckMark className="mr-4" />
                Improving Python and PostgreSQL skills
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
