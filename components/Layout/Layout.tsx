import Navbar from "@components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-14">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
