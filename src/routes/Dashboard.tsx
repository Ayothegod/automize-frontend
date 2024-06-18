import { json, redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";

export async function Loader() {
  const user = Cookies.get("user_access");
  console.log(user);

  if (!user) {
    return redirect("/login");
  }

  return json(null);
}

export default function Dashboard() {

  const logout = async () => {
    Cookies.remove("user_access");
    return window.location.reload();
  };

  return (
    <div>
      <p>Dashboard</p>

      <Button onClick={logout}>Log out</Button>
    </div>
  );
}
