import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ContactTable from "../components/ContactTable";
import { useGetContactsQuery } from "../features/api/contactApi";
import Cookies from "js-cookie";
import Loading from "./Loading";

const Dashboard = () => {
  const token = Cookies.get("token");
  const { data,isLoading} = useGetContactsQuery(token);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {" "}
          <Navbar />
          <Sidebar />
          <div className="px-4 ml-0 md:ml-64">
            <ContactTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
