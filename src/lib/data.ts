export const sidebarData = [
  { id: 1, title: "Dashboard", url: "/dashboard", iconType: "LayoutDashboard" },
  { id: 2, title: "Messages", url: "/messages", iconType: "MessageCircle" },
  { id: 3, title: "Publishing", url: "/Publishing", iconType: "SquarePen" },
  { id: 4, title: "Analytics", url: "/Analytics", iconType: "BarChartBig" },
  {
    id: 5,
    title: "Collaboration",
    url: "/Collaboration",
    iconType: "LibraryBig",
  },
  { id: 6, title: "Accounts", url: "/Accounts", iconType: "Users" },
];

const isProd = false;
export const BASE_URL = isProd
  ? "https://full-edge-scrawny-profit-beta.pipeops.app/api/v1"
  : "http://127.0.0.1:8000/api/v1";

export const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export const mockDebts = [
  {
    id: 1,
    user: {
      id: 1,
      first_name: "",
      last_name: "",
      username: "admin",
      email: "oyinbunuaatani@gmail.com",
    },
    person: {
      first_name: "Atani",
      last_name: "Jones",
      phone_number: "+2349015867277",
    },
    type: "DR",
    amount: 100.0,
    currency: "NGN",
    due_date: "2024-06-15T08:24:59Z",
    interest_rate: 10.0,
    payment_frequency: "MONTHLY",
    payment_method: "BANK TRANSFER",
  },
  {
    id: 2,
    user: {
      id: 1,
      first_name: "",
      last_name: "",
      username: "admin",
      email: "oyinbunuaatani@gmail.com",
    },
    person: {
      first_name: "Atani",
      last_name: "Jones",
      phone_number: "+2349015867277",
    },
    type: "DR",
    amount: 100.0,
    currency: "NGN",
    due_date: "2024-06-15T08:24:59Z",
    interest_rate: 10.0,
    payment_frequency: "MONTHLY",
    payment_method: "BANK TRANSFER",
  },
  {
    id: 8,
    user: {
      id: 1,
      first_name: "",
      last_name: "",
      username: "admin",
      email: "oyinbunuaatani@gmail.com",
    },
    person: {
      first_name: "Favour",
      last_name: "Jones",
      phone_number: "+2349015867277",
    },
    type: "CR",
    amount: 100.0,
    currency: "NGN",
    due_date: "2024-06-15T08:24:59Z",
    interest_rate: 10.0,
    payment_frequency: "MONTHLY",
    payment_method: "BANK TRANSFER",
  },
];

export type Debt = {
  id: number;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
  };
  person: {
    first_name: string;
    last_name: string;
    phone_number: string;
  };
  type: string;
  amount: number;
  currency: string;
  due_date: string;
  interest_rate: number;
  payment_frequency: string;
  payment_method: string;
};
