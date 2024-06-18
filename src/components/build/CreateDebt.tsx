import { debtSchema } from "@/lib/schema/debtSchema";
import Cookies from "js-cookie";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { z } from "zod";

type DebtSchemaType = z.infer<typeof debtSchema>;

export default function CreateDebt() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DebtSchemaType>({ resolver: zodResolver(debtSchema) });

  //   } = useForm();
  //   const onSubmit = async (data) => {
    
  //     const user = Cookies.get("user_access");
  //   {
  //     debtorLastname: 'Ayomide',
  //     debtorFirstname: 'Adebisi',
  //     debtorPhonenumber: 32323,
  //     amount: 23232,
  //     dueDate: new Date('2024-06-20T00:00:00.000Z'),
  //     interestRate: 127812,
  //     paymentFrequency: 'Adebisi',
  //     paymentMethod: 'Adebisi',
  //     type: 'dept',
  //     currency: 'US'
  //   }

  const onSubmit: SubmitHandler<DebtSchemaType> = async (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 min-h-screen overflow-y-auto custom-scrollbar">
      <div className="flex items-center justify-center my-10 md:my-20 px-4 overflow-y-auto">
        <div className=" bg-white rounded-md p-4 w-full sm:w-[80%] md:w-1/2 overflow-y-auto">
          <form
            method="post"
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 flex flex-col"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs">Debtor First-Name</Label>
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
                <Label className="text-xs">Debtor Last-Name</Label>
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
                <Label className="text-xs">Debtor Phone-Number</Label>
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
                  placeholder="frequency of payment i.e monthly"
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
                  placeholder="bank deposit/transfer"
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
                  placeholder="Dept - Credit"
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
            <Button
              type="submit"
              className="mt-8 ml-auto w-full md:w-fit"
              name="intent"
              value="register"
            >
              Login
              {/* {process ? <Loader2 className="animate-spin" /> : "Login"} */}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
