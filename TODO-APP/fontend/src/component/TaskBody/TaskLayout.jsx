import { useState } from "react";

let sectionDesign =
  "min-w-full px-4 md:px-0 md:max-w-4/5 md:mx-auto py-4 sm:py-8 bg-neutral-300";



  
const Layout = ({ children }) => {
  const [expend, setExpend] = useState(false);

  return (
    <>
      <div className="min-w-full min-h-20">
        <nav className="w-full md:max-w-4/5">
          <ul className="flex list-none p-2 ">
            <li>Home</li>
            <li>Todo</li>
            <li>Profile/register</li>
          </ul>
        </nav>
      </div>

      <section className={sectionDesign}>{children}</section>
    </>
  );
};


export default Layout 