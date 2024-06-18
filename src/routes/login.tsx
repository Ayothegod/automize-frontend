import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { BASE_URL } from "@/lib/data";
import { loginSchema } from "@/lib/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Cookies from "js-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, json, redirect, useNavigate } from "react-router-dom";
import { z } from "zod";

type LoginSchemaType = z.infer<typeof loginSchema>;

export async function Loader() {
  const user = Cookies.get("user_access");

  if (user) {
    return redirect("/dashboard");
  }

  return json(null);
}

export default function Login() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(loginSchema) });

  const user = "AYO";

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/accounts/login/`,
        {
          username: data.username,
          password: data.password,
        },
        { headers: {} }
      );
      console.log(response.data);

      Cookies.set("user_access", `${response.data?.access}`, {
        expires: 1,
        secure: false,
      });
      Cookies.set("user_id", `${response.data?.id}`, {
        expires: 1,
        secure: false,
      });

      toast({
        description: `Welcome back, ${user}`,
      });
      return navigate("/dashboard");
    } catch (error: any) {
      console.log(error);

      if (error.response) {
        toast({
          variant: "destructive",
          description: `Invalid credentials, try again!`,
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
    }
  };

  return (
    <main>
      <div className="flex h-screen flex-col sm:flex-row">
        {/* first part */}
        <div className="hidden h-full bg-neutral-200 sm:block sm:w-1/2">
          <div className="mx-auto max-w-[448px]">
            <p>Hello</p>
          </div>
        </div>

        {/* second part */}
        <div className="h-full w-full px-2 py-4 sm:w-1/2">
          <div className="mx-auto flex max-w-[448px] flex-col justify-center px-2">
            <div className="mb-16">
              {/* <Logo logo={logo} className="" /> */}
            </div>

            <h1 className="text-2xl font-medium">Welcome back!</h1>
            <Label className="text-neutral-500">Continue your journey</Label>

            <form
              method="post"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 flex flex-col gap-y-4"
            >
              <div>
                <Label>Username</Label>
                <Input
                  type="text"
                  {...register("username")}
                  placeholder="unique username"
                />
                {errors.username && (
                  <div className="text-xs text-red-500">
                    {errors.username?.message}
                  </div>
                )}
              </div>

              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  {...register("password")}
                  placeholder="Enter your password..."
                />
                {errors.username && (
                  <div className="text-xs text-red-500">
                    {errors.password?.message}
                  </div>
                )}
                <p className="mt-2 text-right text-sm font-medium text-purple-600">
                  Forgot password?
                </p>
              </div>

              <Label>
                <div className="flex items-center gap-x-2">
                  <span>Remember me</span>
                  <input
                    type="checkbox"
                    {...register("remember")}
                    // defaultChecked={fields.remember.initialValue === 'on'}
                  />
                </div>
              </Label>

              <Button
                type="submit"
                className="mt-4"
                name="intent"
                value="login"
              >
                Login
              </Button>

              <p className="flex items-center gap-2 text-center text-sm font-medium text-neutral-500">
                Don't have an account?{" "}
                <Link to="/register" className="underline-offset-1">
                  <span className="text-purple-600">Sign up</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
