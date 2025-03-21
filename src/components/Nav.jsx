import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="px-[50px] py-[20px] flex flex-col md:flex-row justify-between items-center shadow-lg">
      <div className="text-3xl font-bold text-red-900">E-Commerce</div>
      <div className="text-xl font-semibold flex gap-[20px]">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Nav;
