import { json, redirect } from "react-router-dom";
import Cookies from "js-cookie";

export async function Loader() {
  const user = Cookies.get("user_access");
  console.log(user);

  if (!user) {
    return redirect("/login");
  }

  return json(null);
}

export default function Dashboard() {
  return <div>Dashboard</div>;
}
