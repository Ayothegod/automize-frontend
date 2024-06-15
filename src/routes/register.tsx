// import { registerSchema } from "@/lib/schema/authSchema";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// type RegisterSchemaType = z.infer<typeof registerSchema>;

export default function Register() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<RegisterSchemaType>({ resolver: zodResolver(registerSchema) });

  return (
    <main>
      <div className="flex min-h-screen flex-col sm:flex-row">
        {/* first part */}
        <div className="hidden min-h-screen bg-neutral-200 sm:block sm:w-1/2">
          <div className="mx-auto max-w-[448px]">
            <p>Hello bro</p>
          </div>
        </div>

        {/* second part */}
        {/* <div className="h-full w-full px-2 py-4 sm:w-1/2">
          <div className="mx-auto flex max-w-[448px] flex-col justify-center px-2">
            <div className="mb-16">
              <h1 className="text-2xl font-bold">LOGO</h1>
            </div>

            <h1 className="text-2xl font-medium">Hi, Welcome to studify!</h1>
            <Label className="text-neutral-500">Start your journey</Label>

            <Form
              method="post"
              id={form.id}
              noValidate
              className="mt-8 flex flex-col gap-y-4"
            >
              <div>
                <Label className="text-xs">First Name</Label>
                <Input
                  type="text"
                  key={fields.firstname.key}
                  name={fields.firstname.name}
                  defaultValue={fields.firstname.initialValue}
                  placeholder="Enter your first name"
                />
                <Label className="text-xs text-red-500">
                  {fields.firstname?.errors}
                </Label>
              </div>
              <div>
                <Label className="text-xs">Last Name</Label>
                <Input
                  type="text"
                  key={fields.lastname.key}
                  name={fields.lastname.name}
                  defaultValue={fields.lastname.initialValue}
                  placeholder="Enter your last name"
                />
                <Label className="text-xs text-red-500">
                  {fields.lastname?.errors}
                </Label>
              </div>
              <div>
                <Label className="text-xs">Email Address</Label>
                <Input
                  type="text"
                  key={fields.email.key}
                  name={fields.email.name}
                  defaultValue={fields.email.initialValue}
                  placeholder="Enter your email address"
                />
                <Label className="text-xs text-red-500">
                  {fields.email.errors}
                </Label>
              </div>
              <div>
                <Label className="text-xs">Username</Label>
                <Input
                  type="text"
                  key={fields.username.key}
                  name={fields.username.name}
                  defaultValue={fields.username.initialValue}
                  placeholder="unique username"
                />
                <Label className="text-xs text-red-500">
                  {fields.username.errors}
                </Label>
              </div>

              <div>
                <Label className="text-xs">Password</Label>
                <Input
                  type="password"
                  key={fields.password.key}
                  name={fields.password.name}
                  defaultValue={fields.password.initialValue}
                  placeholder="Enter your password..."
                />
                <Label className="text-xs text-red-500">
                  {fields.password.errors}
                </Label>
              </div>

              <Label>
                <div className="flex items-center gap-x-2">
                  <span>Remember me</span>
                  <input
                    type="checkbox"
                    key={fields.remember.key}
                    name={fields.remember.name}
                    defaultChecked={fields.remember.initialValue === "on"}
                  />
                </div>
              </Label>

              <Button
                type="submit"
                className="mt-4"
                name="intent"
                value="register"
              >
                Login
              </Button>

              <p className="flex items-center gap-2 text-center text-sm font-medium text-neutral-500">
                Already have an account?{" "}
                <Link to="/login" className="underline-offset-1">
                  <span className="text-purple-600">Sign in</span>
                </Link>
              </p>
            </Form>
          </div>
        </div> */}
      </div>
    </main>
  );
}
