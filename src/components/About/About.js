import projectsImages from "../../assets/projectsImages";
import { GiSwordman } from "react-icons/gi";
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
              classname="object-cover w-full"
              alt="OZE Project"
            />
          </div>
          <div className="w-full h-full md:w-[60%] ">
            {
              <p className="text-center text-lg leading-9 md:text-left text-title mb-4">
                I am a GIS Analyst who is passionate about his work. With 5
                years of experience in geospatial database development and
                design, I am familiar with all phases of a GIS project.
                Currently focused on the implementation of databases based on
                PostgreSQL+PostGIS and automating tasks and processes in order
                to facilitate users the interaction with the database and
                project managers the decision making.
                <br /> I have also worked as an electrical engineer, so I don't
                panic if you talk to me about D-curve type magenothermal
                switches or control relays.
                <br /> In my spare time, apart from fishing, cycling or going to
                concerts, I like doing research in web development (for instance
                this web is made with React ). <br />
                <br />
                My tech stack:
              </p>
            }
            <ul className="flex flex-wrap items-start justify-evenly text-center md:text-left text-paragraph text-lg">
              {skills.map((skill) => (
                <li className="flex flex-col items-center justify-start mb-8 md:mb-6 p-4">
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
