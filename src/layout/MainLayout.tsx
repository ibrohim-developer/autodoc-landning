import { Footer, Navbar } from "@/components";
import { Believe, Leaders } from "@/sections";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Believe />
      <Leaders />
      <Footer />
    </div>
  );
};

export default MainLayout;
