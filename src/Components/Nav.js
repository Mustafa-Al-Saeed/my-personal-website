const Nav = () => {
  const links = [
    { name: "Home", path: "#home" },
    { name: "Services", path: "#services" },
    { name: "About me", path: "#about" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Contact me", path: "#contact" },
  ];

  return (
    <div className=" flex items-center order-1 md:order-2">
      <div className=" cursor-pointer md:hidden">
        <i
          className="pi pi-align-justify hover:text-[#38BDF8]"
          style={{ fontSize: "1.5rem" }}
        ></i>
      </div>

      <ul className={` md:flex  hidden md:items-center md:gap-8 text-center `}>
        {links.map((link, index) => (
          <li
            key={index}
            className="cursor-pointer hover:mb-[3px] transition-all hover:text-[#38BDF8]"
          >
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
