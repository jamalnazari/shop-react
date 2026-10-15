import { Outlet } from "react-router-dom";
import Asid from "../components/asid";

export default function Admin() {
  return (
    <div className="flex min-h-screen">
      <Asid />
      <div className="mr-[25%] flex-1">
        <Outlet />
      </div>
    </div>
  );
}
