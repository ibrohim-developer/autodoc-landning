import { Footer, Navbar } from "@/components";
import { Believe, Leaders } from "@/sections";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const { pathname, hash, key } = location;

  // `key` is in the deps so re-clicking the same hash link scrolls again —
  // pathname and hash alone would not change on a repeat navigation.
  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);
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
