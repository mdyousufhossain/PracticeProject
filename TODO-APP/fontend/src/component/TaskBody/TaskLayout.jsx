import Navbar from "./Navbar/Navbar";

let sectionDesign =
  "w-full px-4 md:px-0  py-4 sm:py-8 bg-slate-300 ";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className={sectionDesign}>
        <div className="w-4/5 mx-auto">
          {children}
        </div>
      </section>
    </>
  );
};

export default Layout;
