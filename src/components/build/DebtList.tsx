import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockDebts } from "@/lib/data";
import { Link } from "react-router-dom";
import TableDate from "./TableDate";

export default function DebtList() {
  return (
    <div className="bg-white p-4 rounded-md mt-2">
      <Table className=" max-w-full">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead>S/N</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>DueDate</TableHead>
            <TableHead>InterestRate</TableHead>
            <TableHead>Frequency</TableHead>
            {/* add status */}
          </TableRow>
        </TableHeader>

        {/* special effect on hover */}

        <TableBody>
          {mockDebts.map((invoice) => (
            <Link to={`/debts/${invoice.id}`}>
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell className="font-medium ">{invoice.type}</TableCell>
                <TableCell className="font-medium ">{invoice.amount}</TableCell>
                <TableCell>{invoice.currency}</TableCell>
                <TableCell>
                  <TableDate date={invoice.due_date} />
                </TableCell>
                <TableCell>
                  {invoice.interest_rate}{" "}
                  <span className="text-sm text-neutral-500">%</span>
                </TableCell>
                <TableCell className="">{invoice.payment_frequency}</TableCell>
              </TableRow>
              {/* add status */}
            </Link>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
