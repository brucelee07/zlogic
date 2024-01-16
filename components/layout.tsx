import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";
import Profile from "./profile";
import SEOHead from "./seohead";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <SEOHead />
    <div className="bg-zinc-100 min-h-[100vh] w-full">
      <NavBar />
      <main className="m-auto md:w-3/5 xl:w-2/4 md:shadow-md md:rounded-2xl">
        <div className="bg-zinc-50 p-7">
          <Profile />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;
