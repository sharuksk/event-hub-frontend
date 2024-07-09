import { Outlet } from "react-router-dom";
import CLientHeader from "./CLientHeader";
import ClientSidebar from "./ClientSidebar";
import Footer from "./Footer";

function ClientAppLayout({ clientDetail }) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <CLientHeader clientDetail={clientDetail} />
        <div className="flex flex-1 overflow-auto">
          <ClientSidebar clientDetail={clientDetail} />
          <main className="flex-1 bg-[#F5F5F5 ]   overflow-scroll">
            <div className="">
              <Outlet />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ClientAppLayout;
