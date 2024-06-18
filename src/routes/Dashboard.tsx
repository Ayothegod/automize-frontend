import { json, redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import axios from "axios";
import { BASE_URL } from "@/lib/data";
import { debtSchema } from "@/lib/schema/debtSchema";
import { useProcessStore } from "@/lib/store/stateStore";
import CreateDebt from "@/components/build/CreateDebt";

export async function Loader() {
  const user = Cookies.get("user_access");
  console.log(user);

  // if (!user) {
  //   return redirect("/login");
  // }

  return json(null);
}

export default function Dashboard() {
  const { debtModal, setDebtModal } = useProcessStore();

  const logout = async () => {
    Cookies.remove("user_access");
    return window.location.reload();
  };

  const createDebt = async () => {
    // setProcess();
    // const data = debtSchema.safeParse()
    // try {
    //   const response = await axios.post(
    //     `${BASE_URL}/accounts/add-debt/`,
    //     {
    //       person: {
    //         first_name: "Favour",
    //         last_name: "Jones",
    //         phone_number: "+2349015867277",
    //       },
    //       type: "CR",
    //       amount: 100,
    //       currency: "100",
    //       due_date: "2024-06-15T08:24:59Z",
    //       interest_rate: 10,
    //       payment_frequency: "MONTHLY",
    //       payment_method: "BANK TRANSFER",
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${user}`,
    //       },
    //     }
    //   );
    //   console.log(response.data);
    //   return null;
    //   // toast({
    //   //   description: `Welcome back, ${data.username}`,
    //   // });
    //   // return navigate("/dashboard");
    // } catch (error: any) {
    //   console.log(error);
    //   return null;
    //   // if (error.response) {
    //   //   toast({
    //   //     variant: "destructive",
    //   //     description: `Invalid credentials, try again!`,
    //   //   });
    //   //   return null;
    //   // } else if (error.request) {
    //   //   toast({
    //   //     variant: "destructive",
    //   //     title: "Uh oh! Something went wrong.",
    //   //     description: "There was a problem with your request.",
    //   //   });
    //   //   return null;
    //   // } else {
    //   //   toast({
    //   //     variant: "destructive",
    //   //     description: "Something went wrong, try again later!",
    //   //   });
    //   //   return null;
    //   // }
    // } finally {
    //   // setProcess();
    //   console.log("FINALLY DONE");
    // }
  };

  return (
    <div className="bg-neutral-100 min-h-full p-1">
      <div className="bg-white rounded-md p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-8 bg-gray-200 rounded-md"></div>
        <div className="p-8 bg-yellow-200 rounded-md"></div>
        <div className="p-8 bg-purple-200 rounded-md"></div>

        {/* create debt desktop */}
        <div className="hidden md:grid ">
          <Button onClick={() => setDebtModal()}>Create debt</Button>
        </div>

        {/* <Button onClick={logout}>Log out</Button> */}
      </div>

      {debtModal && <CreateDebt/>}

      {/* create devt mobile */}
      <div
        className="fixed bottom-2 right-4 shadow-md p-1 bg-white rounded-full"
        onClick={() => setDebtModal()}
      >
        <Plus className="h-10 w-10 " />
      </div>
    </div>
  );
}
