import { useState } from "react";


const Navbar = () => {
    const [expend, setExpend] = useState(false)

    const navHandler = () => {
        if (!expend) {
          return setExpend(true);
        }
        return setExpend(false);
      };
    return (

        <div className="min-w-full h-20  bg-slate-300">
        <nav className="w-full md:mx-auto md:w-4/5 relative bg-slate-400 h-20">
          <ul className="hidden p-2 md:block md:flex md:gap-8 md:absolute md:right-5">
            <li>Home</li>
            <li>Toda</li>
            <li>Profile/register</li>
          </ul>


          {expend ? (
              <ul className="block list-none p-2 md:hidden">
              <li>Home</li>
              <li>Todo</li>
              <li>Profile/register</li>
            </ul>
          ) : (
              ""
              )}
        <button className="block md:hidden py-2 text-sm text-cyan-50 hover:bg-slate-400 bg-red-200 absolute top- right-5" onClick={navHandler}>{expend ? "Close" : "Menu"}</button>
        </nav>
      </div>

    )
}

export default Navbar