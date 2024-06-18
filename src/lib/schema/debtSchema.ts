import { z } from "zod";

export const debtSchema = z.object({
  debtorFirstname: z
    .string({ required_error: "Debtor firstname is required" })
    .min(3, "Debtor firstname is too short")
    .max(100, "Debtor firstname is too long"),
  debtorLastname: z
    .string({ required_error: "Debtor lastname is required" })
    .min(3, "Debtor lastname is too short")
    .max(100, "Debtor lastname is too long"),
  debtorPhonenumber: z
    .number({ required_error: "Debtor phone number is required" })
    .min(10, "phone number is too short")
    .max(15, "phone number is too long"),
//   type: z.enum(["DEBIT", "CREDIT"], { required_error: "you must pick a type" }),
  amount: z
    .number({ required_error: "amount owed is required" })
    .min(1, "phone number is too short"),
//   currency: z.enum(["US", "NG", "CD", "PD", "Y"], {
//     required_error: "currency is required",
//   }),
  dueDate: z.date({ required_error: "date is required" }),
  interestRate: z.number().optional(),
  paymentFrequency: z.string({
    required_error: "payment frequency is required",
  }),
  paymentMethod: z.string({ required_error: "payment method is required" }),
});
