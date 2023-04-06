import Header from "./header";

const Layout = ({ children }) => (
  <div className="w-full bg-primary-700 mx-auto">
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
