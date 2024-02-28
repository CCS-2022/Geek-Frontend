import { Outlet } from "react-router-dom";

import Navigation from "../components/NavigationBar/Navigation";
// import Footer from "../components/Footer/Footer";

export default function RootLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}
