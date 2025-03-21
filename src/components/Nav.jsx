import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const htmlElement = document.getElementById("html");
    if (isDarkMode) {
      htmlElement.className = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.className = "";
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="px-[50px] py-[20px] flex flex-col md:flex-row justify-between items-center shadow-lg dark:bg-gray-800">
      <div className="text-3xl font-bold text-red-900 dark:text-yellow-400">E-Commerce</div>
      <div className="text-xl font-semibold flex items-center gap-[20px] dark:text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {
          isDarkMode ?
          <i onClick={() => setIsDarkMode(!isDarkMode)} class='text-yellow-400 bx bxs-sun'></i>
          :
          <i onClick={() => setIsDarkMode(!isDarkMode)} className="text-blue-800 bx bxs-moon"></i>
        }
      </div>
    </div>
  );
}

export default Nav;
