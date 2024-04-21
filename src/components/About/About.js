import projectsImages from "../../assets/projectsImages";
import { GiSwordman } from "react-icons/gi";
import { VscCheck } from "react-icons/vsc";
import SectionTitle from "../General/SectionTitle";
import skills from "../Skills/skillsList";

const About = () => {
  return (
    <div className="w-full mt-16 lg:mt-0" name="about" id="about">
      <div className="px-4 md:px-20 lg:px-36 md:mt-0 mb-8 md:mb-12 lg:mb-20">
        <SectionTitle icon={<GiSwordman size="28" />} text="About Me" />
        <div className="flex flex-col justify-between items-center md:flex-row md:justify-between md:items-start">
          <div className="w-full h-full md:w-[40%] mb-8 md:mb-0 md:pr-8">
            <img
              src={projectsImages.about}
              className="object-cover w-full"
              alt="OZE Project"
            />
          </div>
          <div className="w-full h-full md:w-[60%] ">
            {
              <p className="text-left text-lg leading-9 text-title mb-4">
                I am a GIS and Data Analyst who is passionate about his work.
                How can I help your company?:
                <ul className="block">
                  <li className="flex items-start font-medium">
                    <VscCheck className="flex-none mr-2 mt-2" />
                    <p className="flex-initial">
                      Designing and implementating PostgreSQL/PostGIS
                      geodatabases.
                    </p>
                  </li>
                  <li className="flex items-start font-medium">
                    <VscCheck className="flex-none mr-2 mt-2" />
                    <p className="flex-initial">
                      Automating many of your tasks.
                    </p>
                  </li>
                  <li className="flex  items-start font-medium">
                    <VscCheck className="flex-none mr-2 mt-2" />
                    <p className="flex-initial">
                      Extracting, transformating and loading from many diferente
                      sources and formats (csv, JSON, XML, etc) into
                      geodatabase.
                    </p>
                  </li>
                  <li className="flex  items-start font-medium">
                    <VscCheck className="flex-none mr-2 mt-2" />
                    <p className="flex-initial">Developing new GIS Tools.</p>
                  </li>
                  <li className="flex  items-start font-medium">
                    <VscCheck className="flex-none mr-2 mt-2" />
                    <p className="flex-initial">Data Analysis with Pandas.</p>
                  </li>
                  <li className="flex  items-start font-medium">
                    <VscCheck className="flex-none mr-2 mt-2" />
                    <p className="flex-initial">
                      Creating Dashboards with PowerBI.
                    </p>
                  </li>
                </ul>
                <br></br>
                My tech stack:
              </p>
            }
            <ul className="flex flex-wrap items-start justify-evenly text-center md:text-left text-paragraph text-lg">
              {skills.map((skill, id) => (
                <li
                  className="flex flex-col items-center justify-start mb-8 md:mb-6 p-4"
                  key={id}
                >
                  <img
                    className="w-auto h-6 object-cover"
                    src={skill.image}
                    alt={skill.name}
                  />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
