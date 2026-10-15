import { useEffect, useState } from "react";
import { userService } from "../../../api/userService";

export default function UsersUi() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await userService.getAll();
      setUsers(data);
    };
    getData();
  }, []);

  return (
    <div className="w-full flex-1 p-4">
      <h2 className="text-xl font-bold mb-4">لیست کاربران</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border p-2 mb-2">
            {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
