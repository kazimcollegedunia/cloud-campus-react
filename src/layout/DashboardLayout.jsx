import Sidebar from "../Pages/Sidebar/Sidebar";
import Header from "../Pages/Header/TopHeader";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
