import { BASE_URL } from "@/lib/data";
import { debtSchema } from "@/lib/schema/debtSchema";
import { useProcessStore } from "@/lib/store/stateStore";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Cookies from "js-cookie";
import { Loader2, X } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "../ui/use-toast";

type DebtSchemaType = z.infer<typeof debtSchema>;

export async function Action() {
  // const data = await request.json();
}

export default function CreateDebt() {
  const { setDebtModal, isCreatingDebt, setIsCreatingDebt } = useProcessStore();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DebtSchemaType>({ resolver: zodResolver(debtSchema) });

  const onSubmit: SubmitHandler<DebtSchemaType> = async (data) => {
    const user = Cookies.get("user_access");
    setIsCreatingDebt();

    try {
      const response = await axios.post(
        `${BASE_URL}/accounts/add-debt/`,
        {
          person: {
            first_name: data.debtorFirstname,
            last_name: data.debtorLastname,
            phone_number: data.debtorPhonenumber,
          },
          type: data.type,
          amount: data.amount,
          currency: data.currency,
          due_date: data.dueDate,
          interest_rate: data.interestRate,
          payment_frequency: data.paymentFrequency,
          payment_method: data.paymentMethod,
        },
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );
      console.log(response.data);
      toast({
        description: `Dept created successfully`,
      });
      window.location.reload()
      return null;
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        toast({
          variant: "destructive",
          description: `Invalid fields, try again!`,
        });
        return null;
      } else if (error.request) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
        return null;
      } else {
        toast({
          variant: "destructive",
          description: "Something went wrong, try again later!",
        });
        return null;
      }
    } finally {
      setIsCreatingDebt();
      setDebtModal();
      console.log("FINALLY DONE");
    }
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 min-h-screen overflow-y-auto custom-scrollbar">
      <div className="flex items-center justify-center my-10 md:my-20 px-4 overflow-y-auto">
        <div className=" bg-white rounded-md p-4 w-full sm:w-[80%] md:w-1/2 overflow-y-auto">
          <div
            className="bg-neutral-100 p-1 w-max ml-auto rounded-md cursor-pointer sm:hidden"
            onClick={() => setDebtModal()}
          >
            <X className="w-8 h-8" />
          </div>
          <div
            className="absolute top-4 right-4 hidden sm:block bg-white rounded-md p-2 cursor-pointer"
            onClick={() => setDebtModal()}
          >
            <X className="w-8 h-8" />
          </div>
          <form
            method="post"
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 flex flex-col"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs">Debtor/Creditor First-Name</Label>
                <Input
                  type="text"
                  {...register("debtorFirstname")}
                  placeholder="Enter your debtor first name"
                />
                {errors.debtorFirstname && (
                  <Label className="text-xs text-red-500">
                    {errors.debtorFirstname?.message}
                  </Label>
                )}
              </div>
              <div>
                <Label className="text-xs">Debtor/Creditor Last-Name</Label>
                <Input
                  type="text"
                  {...register("debtorLastname")}
                  placeholder="Enter your debtor last name"
                />
                {errors.debtorLastname && (
                  <Label className="text-xs text-red-500">
                    {errors.debtorLastname?.message}
                  </Label>
                )}
              </div>
              <div>
                <Label className="text-xs">Debtor/Creditor Phone-Number</Label>
                <Input
                  type="number"
                  {...register("debtorPhonenumber")}
                  placeholder="Enter your debtor phone number"
                />
                {errors.debtorPhonenumber && (
                  <Label className="text-xs text-red-500">
                    {errors.debtorPhonenumber?.message}
                  </Label>
                )}
              </div>
              <div>
                <Label className="text-xs">Amount of Debt</Label>
                <Input
                  type="number"
                  {...register("amount")}
                  placeholder="Enter the debt amount"
                />
                {errors.amount && (
                  <Label className="text-xs text-red-500">
                    {errors.amount?.message}
                  </Label>
                )}
              </div>
              <div>
                <Label className="text-xs">Due date</Label>
                <Input
                  type="date"
                  {...register("dueDate")}
                  placeholder="Enter the debt due date"
                />
                {errors.dueDate && (
                  <Label className="text-xs text-red-500">
                    {errors.dueDate?.message}
                  </Label>
                )}
              </div>
              <div>
                <Label className="text-xs">Interest Rate</Label>
                <Input
                  type="number"
                  {...register("interestRate")}
                  placeholder="Enter the debt interest rate"
                />
                {errors.interestRate && (
                  <Label className="text-xs text-red-500">
                    {errors.interestRate?.message}
                  </Label>
                )}
              </div>
              <div>
                <Label className="text-xs">Payment Frequency</Label>
                <Input
                  type="text"
                  {...register("paymentFrequency")}
                  placeholder="'MONTHLY','BI-MONTHLY','WEEKLY','BI-WEEKLY','QUATERLY','SEMI-ANNUALLY','ANNUALLY'"
                />
                {errors.paymentFrequency && (
                  <Label className="text-xs text-red-500">
                    {errors.paymentFrequency?.message}
                  </Label>
                )}
              </div>
              <div>
                <Label className="text-xs">Payment Method</Label>
                <Input
                  type="text"
                  {...register("paymentMethod")}
                  placeholder="'BANK TRANSFER', 'CASH', 'CREDIT CARD', 'DEBIT CARD', 'CHECK', 'OTHERS'"
                />
                {errors.paymentMethod && (
                  <Label className="text-xs text-red-500">
                    {errors.paymentMethod?.message}
                  </Label>
                )}
              </div>

              <div>
                <Label className="text-xs">Dept Type</Label>
                <Input
                  type="text"
                  {...register("type")}
                  placeholder="DR or CR"
                />
                {errors.type && (
                  <Label className="text-xs text-red-500">
                    {errors.type?.message}
                  </Label>
                )}
              </div>

              <div>
                <Label className="text-xs">Currency of Dept</Label>
                <Input
                  type="text"
                  {...register("currency")}
                  placeholder="'US', 'NG', 'CD', 'PD', 'Y'"
                />
                {errors.currency && (
                  <Label className="text-xs text-red-500">
                    {errors.currency?.message}
                  </Label>
                )}
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row w-full gap-4 sm:justify-end">
              <Button variant="outline" onClick={() => setDebtModal()}>
                Cancel
              </Button>

              <Button
                type="submit"
                className=" w-full sm:w-max"
                name="intent"
                value="register"
              >
                {isCreatingDebt ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Create debt"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
