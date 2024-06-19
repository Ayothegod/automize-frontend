import {
  LoaderFunctionArgs,
  json,
  redirect,
  useLoaderData,
} from "react-router-dom";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useProcessStore } from "@/lib/store/stateStore";
import CreateDebt from "@/components/build/CreateDebt";
import DebtList from "@/components/build/DebtList";
import { BASE_URL } from "@/lib/data";
import axios from "axios";

export async function Loader() {
  const user = Cookies.get("user_access");
  if (!user) {
    return redirect("/login");
  }
  console.log(user);

  try {
    const response = await axios.get(`${BASE_URL}/accounts/list-debts/`, {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    });

    console.log(response.data);
    return json({ allDebt: response.data });
  } catch (error) {
    console.log(error);
    return null;
  }

  return json(null);
}

export default function Dashboard() {
  const { debtModal, setDebtModal } = useProcessStore();
  const loaderData: any = useLoaderData();
  const debts = loaderData?.allDebt;

  return (
    <div className="bg-neutral-100 min-h-full p-1 rounded-md">
      <div className="bg-white rounded-md p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-8 bg-gray-200 rounded-md"></div>
        <div className="p-8 bg-yellow-200 rounded-md"></div>
        <div className="p-8 bg-purple-200 rounded-md"></div>

        {/* create debt desktop */}
        <div className="hidden md:grid ">
          <Button onClick={() => setDebtModal()}>Create debt</Button>
        </div>
      </div>

      {debtModal && <CreateDebt />}

      <div
        className="fixed bottom-2 right-4 shadow-md p-1 bg-white rounded-full"
        onClick={() => setDebtModal()}
      >
        <Plus className="h-10 w-10 " />
      </div>

      <DebtList debts={debts} />
    </div>
  );
}
