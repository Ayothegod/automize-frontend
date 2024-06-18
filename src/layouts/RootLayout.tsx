import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }: any) {
    return (
      <main className="font-inter">
        {children}
        <Toaster/>
      </main>
    );
  }
   