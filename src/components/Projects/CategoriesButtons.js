const CategoriesButtons = ({ onclick, isActive }) => {
  const categories = [
    { id: "1", name: "All" },
    { id: "2", name: "PostgreSQL/PostGIS" },
    { id: "3", name: "QGIS" },
    { id: "4", name: "SQL" },
    { id: "5", name: "Python" },
    { id: "6", name: "Javascript" },
    { id: "7", name: "React JS" },
    { id: "8", name: "Rest API" },
    { id: "9", name: "Power BI" },
    { id: "10", name: "MicroStation" },
  ];

  return (
    <ul className="flex flex-wrap items-center justify-center">
      {categories.map(({ id, name }) => {
        return (
          <li
            className={`${
              isActive === id ? "bg-primary" : "bg-[rgba(0,0,0,0.05)]"
            } rounded-md px-4 py-2 mb-8 mr-4  hover:bg-primary hover:text-white  transition-all duration-500 ease-[cubic-bezier(0.05,0,0,1)]`}
            onClick={onclick}
            key={id}
            data-id={id}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesButtons;
