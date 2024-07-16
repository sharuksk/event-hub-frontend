import { Outlet } from "react-router-dom";
import CLientHeader from "./CLientHeader";
import ClientSidebar from "./ClientSidebar";
import Footer from "./Footer";

function ClientAppLayout() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1">
          <ClientSidebar />
          <main className="flex-1 bg-[#F5F5F5 ]  overflow-auto">
            <CLientHeader />

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
