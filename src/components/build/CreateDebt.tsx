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

  const onSubmit: SubmitHandler<DebtSchemaType> = async (data) => {
    //     const user = Cookies.get("user_access");
    console.log(data);
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 min-h-screen overflow-y-auto custom-scrollbar">
      <div className="flex items-center justify-center my-10 md:my-20 px-4 overflow-y-auto">
        <div className=" bg-white rounded-md p-4 w-full sm:w-[80%] md:w-1/2 overflow-y-auto">
          <form
            method="post"
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 flex flex-col gap-y-4"
          >
            <div>
              <Label className="text-xs">Debtor First-Name</Label>
              <Input
                type="text"
                {...register("debtorFirstname")}
                placeholder="Enter your debtor first name"
              />
              {/* {errors.firstname && (
                  <Label className="text-xs text-red-500">
                    {errors.firstname?.message}
                  </Label>
                )} */}
            </div>
            <div>
              <Label className="text-xs">Debtor Last-Name</Label>
              <Input
                type="text"
                {...register("debtorLastname")}
                placeholder="Enter your debtor last name"
              />
              {/* {errors.lastname && (
                  <Label className="text-xs text-red-500">
                    {errors.lastname?.message}
                  </Label>
                )} */}
            </div>
            <div>
              <Label className="text-xs">Debtor Phone-Number</Label>
              <Input
                type="number"
                {...register("debtorPhonenumber")}
                placeholder="Enter your debtor phone number"
              />
              {/* {errors.email && (
                  <Label className="text-xs text-red-500">
                    {errors.email?.message}
                  </Label>
                )} */}
            </div>
            <div>
              <Label className="text-xs">Amount of Debt</Label>
              <Input
                type="number"
                {...register("amount")}
                placeholder="Enter the debt amount"
              />
              {/* {errors.username && (
                  <Label className="text-xs text-red-500">
                    {errors.username?.message}
                  </Label>
                )} */}
            </div>
            <div>
              <Label className="text-xs">Due date</Label>
              <Input
                type="date"
                {...register("dueDate")}
                placeholder="Enter the debt due date"
              />
              {/* {errors.password && (
                  <Label className="text-xs text-red-500">
                    {errors.password?.message}
                  </Label>
                )} */}
            </div>
            <div>
              <Label className="text-xs">Interest Rate</Label>
              <Input
                type="number"
                {...register("interestRate")}
                placeholder="Enter the debt interest rate"
              />
              {/* {errors.password && (
                  <Label className="text-xs text-red-500">
                    {errors.password?.message}
                  </Label>
                )} */}
            </div>
            <div>
              <Label className="text-xs">Payment Frequency</Label>
              <Input
                type="text"
                {...register("paymentFrequency")}
                placeholder="frequency of payment i.e monthly"
              />
              {/* {errors.password && (
                  <Label className="text-xs text-red-500">
                    {errors.password?.message}
                  </Label>
                )} */}
            </div>
            <div>
              <Label className="text-xs">Payment Method</Label>
              <Input
                type="text"
                {...register("paymentMethod")}
                placeholder="bank deposit/transfer"
              />
              {/* {errors.password && (
                  <Label className="text-xs text-red-500">
                    {errors.password?.message}
                  </Label>
                )} */}
            </div>

            <Button
              type="submit"
              className="mt-4"
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
