import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Footer from "../components/Footer";
import MainContent from "../userComponents/MainContent";
import { useSelector } from "react-redux";
import Header from "./Header";

function Layout() {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1 overflow-hidden">
          <SideBar />
          <main className="flex-1 flex flex-col bg-[#F5F5F5]">
            <Header />
            <div className="flex-1 overflow-auto">
              {user.role === "User" ? <MainContent /> : <Outlet />}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
