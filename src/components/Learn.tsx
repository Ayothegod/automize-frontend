import { useForm } from "react-hook-form";
import { useSubmit } from "react-router-dom";

export async function Action() {
  console.log("data");
}

export default function Learn() {

  const { register, handleSubmit } = useForm();
  const submit = useSubmit();

  const onSubmit = (data: any) => {
    submit(data, {
      method: "post",
      action: "/",
      encType: "application/json",
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("example")} />
      <input type="submit" />
    </form>
  );
}