import Card from "./Card";

const ProjectsResults = ({ projects }) => {
  return (
    <div className="flex flex-col flex-wrap justify-evenly items-center md:items-start md:flex-row mx-8 px-4 md:px-10 mb-10">
      {projects.map((item, i) => {
        return (
          <Card
            key={i}
            item={item}
            pathDemo={item.pathDemo}
            pathGitHub={item.pathGitHub}
          />
        );
      })}
    </div>
  );
};

export default ProjectsResults;
