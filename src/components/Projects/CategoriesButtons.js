const CategoriesButtons = ({ onclick, isActive }) => {
  const categories = [
    { id: "1", name: "All" },
    { id: "2", name: "GIS" },
    { id: "3", name: "Web GIS App" },
    { id: "4", name: "Data Analysis" },
    { id: "5", name: "Cartography" },
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
