import Header from "@/components/build/Header";
import { Button } from "@/components/ui/button";

export default function Root() {
  return (
    <div>
      <Header/>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>Pipeops</p>
      <Button>Hello</Button>
    </div>
  );
}
