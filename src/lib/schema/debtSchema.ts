import { z } from "zod";

const isDept = (val: string) => val === "dept" || val === "credit";

const validValues = ["US", "NG", "CD", "PD", "Y"];
const isCurrency = (val: string) => validValues.includes(val);

export const debtSchema = z.object({
  debtorLastname: z
    .string({ required_error: "Debtor lastname is required" })
    .min(3, "Debtor lastname is too short")
    .max(100, "Debtor lastname is too long"),
  debtorFirstname: z
    .string({ required_error: "Debtor firstname is required" })
    .min(3, "Debtor firstname is too short")
    .max(100, "Debtor firstname is too long"),
  debtorPhonenumber: z.coerce
    .number({
      required_error: "Debtor phone number is required",
    })
    .min(10, "phone number is too short"),
  amount: z.coerce
    .number({ required_error: "amount owed is required" })
    .min(1, "amount is too short"),
  dueDate: z.coerce.date({ required_error: "date is required" }),
  interestRate: z.coerce.number().optional(),
  paymentFrequency: z
    .string({
      required_error: "payment frequency is required",
    })
    .min(3, "payment frequency is required"),
  paymentMethod: z
    .string({ required_error: "payment method is required" })
    .min(3, "payment method is required"),
  type: z
    .string({ required_error: "dept type is required" })
    .min(3, "dept type is required")
    .refine(isDept, {
      message: "dept or credit",
    }),
  currency: z
    .string({ required_error: "currency is required" })
    .min(1, "currency is required")
    .refine(isCurrency, {
      message: "'US', 'NG', 'CD', 'PD', 'Y'",
    }),
});
