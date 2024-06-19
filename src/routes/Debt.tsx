import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { BASE_URL } from "@/lib/data";
import axios from "axios";
import Cookies from "js-cookie";
import {
  json,
  redirect,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";

export async function Loader({ params }: any) {
  const user = Cookies.get("user_access");
  if (!user) {
    return redirect("/login");
  }
  const { id } = params;

  try {
    const response = await axios.get(
      `${BASE_URL}/accounts/debt-details/${id}/`,
      {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      }
    );

    console.log(response.data);
    return json(response.data);
  } catch (error) {
    console.log(error);
    return null;
  }
  return null;
}

export default function Debt() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const debtDetails: any = useLoaderData();
  const { id } = useParams();

  const deleteDebt = async () => {
    const user = Cookies.get("user_access");
    console.log(user);

    try {
      const response = await axios.put(
        `${BASE_URL}/accounts/delete-debt/${id}/`,
        {
          is_deleted: true,
        },
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );

      console.log(response.data);
      toast({
        description: `Debt deleted successfully`,
      });
      return navigate("/dashboard");
      // return null
    } catch (error) {
      console.log(error);

      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please try again.",
      });
      return null;
    }
  };

  return (
    <div className="bg-neutral-100 min-h-full p-2 rounded-md">
      <div className="bg-white p-4">
        <div className="flex items-center justify-between">
          <div className=" mb-2">
            <h1 className="text-2xl font-bold">Debt detail</h1>
            <p>Debt Id: {debtDetails?.id}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline">Update debt</Button>
            <Button onClick={deleteDebt}>Delete debt</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-8 bg-blue-100 rounded-md p-2">
            <p className="text- font-bold mb-2">User details</p>
            <div className="text-neutral-600 text-sm">
              <p>
                First Name:{" "}
                <span className="text-black text-base">
                  {debtDetails.person?.first_name}
                </span>
              </p>
              <p>
                LastName:{" "}
                <span className="text-black text-base">
                  {debtDetails.person?.last_name}
                </span>
              </p>
              <p>
                Phone number:{" "}
                <span className="text-black text-base">
                  {debtDetails.person?.phone_number}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8 bg-amber-100 rounded-md p-2">
            <p className="text- font-bold mb-2">Debt details</p>
            <div className="text-neutral-600 text-sm">
              <p>
                Type:{" "}
                <span className="text-black text-base">{debtDetails.type}</span>
              </p>
              <p>
                Amount:{" "}
                <span className="text-black text-base">
                  {debtDetails.amount}
                </span>
              </p>
              <p>
                Currency:{" "}
                <span className="text-black text-base">
                  {debtDetails.currency}
                </span>
              </p>
              <p>
                Intrest rate:{" "}
                <span className="text-black text-base">
                  {debtDetails.interest_rate}
                </span>
              </p>
              <p>
                Status:{" "}
                <span className="text-black text-base">
                  {debtDetails.status}
                </span>
              </p>
              <p>
                Payment Frequency:{" "}
                <span className="text-black text-base">
                  {debtDetails.payment_frequency}
                </span>
              </p>
              <p>
                Payment Method:{" "}
                <span className="text-black text-base">
                  {debtDetails.payment_method}
                </span>
              </p>
            </div>
          </div>

          {/* <div className="mt-8 bg-amber-100 rounded-md p-2">
            <p className="text- font-bold mb-2">User details</p>
            <div className="text-neutral-600">
              <p>
                Debt Id:{" "}
                <span className="text-black font-med">{debtDetails?.id}</span>
              </p>
              <p>
                First Name:{" "}
                <span className="text-black">
                  {debtDetails.person?.first_name}
                </span>
              </p>
              <p>
                LastName:{" "}
                <span className="text-black">
                  {debtDetails.person?.last_name}
                </span>
              </p>
              <p>
                Phone number:{" "}
                <span className="text-black">
                  {debtDetails.person?.phone_number}
                </span>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
