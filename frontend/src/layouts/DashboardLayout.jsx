import Sidebar from "./Sidebar";
import DashboardNavbar from "../components/navbar/DashboardNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Only ONE Navbar */}
        <DashboardNavbar />

        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}