"use client";
import { FcGoogle } from "react-icons/fc";
import { TbFocus2 } from "react-icons/tb";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
type Inputs = {
  email: string;
  password: string;
};

function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => signIn("signup", data);
  const { data: session, status } = useSession();

  if (status === "authenticated") redirect("/");

  return (
    <div className=" w-[400px]">
      <div className="p-10 rounded-lg">
        {/* <h2>Login</h2> */}
        <Link href="/" className="flex flex-col items-center mt-16 mb-5">
          <h2 className="flex items-center text-[50px]">
            <TbFocus2 className="mr-1 text-red-500" />
            Fowcas
          </h2>
        </Link>
        <form
          className="bg-white p-4 rounded-sm "
          onSubmit={handleSubmit(onSubmit)}
        >
          <button
            className="flex justify-center items-center p-3 bg-white text-gray-500 w-full rounded-sm text-sm text-semibold border drop-shadow-sm "
            onClick={() => signIn("google")}
          >
            <FcGoogle size={20} className="mr-1" />
            Signup with Google
          </button>
          <div className="flex items-center space-x-2 py-3 text-black">
            <div className="my-2 border-b-2 border-gray-200 w-full"></div>
            <h3 className="text-gray-300">or</h3>
            <div className="my-2 border-b-2 border-gray-200 w-full"></div>
          </div>
          {errors.email?.type === "required" && (
            <p role="alert" className="text-red-500 text-sm">
              ** Email is required
            </p>
          )}
          {errors.password?.type === "required" && (
            <p role="alert" className="text-red-500 text-sm">
              ** Password is required
            </p>
          )}
          <div className="space-y-3 mb-5">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-400">
                EMAIL
              </label>
              <input
                type="text"
                className="bg-gray-100 text-black py-2 px-2.5 rounded-sm w-full placeholder:text-neutral-300 focus:outline-none "
                placeholder="example@mail.com"
                {...register("email", { required: true })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-400">
                PASSWORD
              </label>
              <input
                type="password"
                className=" bg-gray-100 text-black py-2 px-3 rounded-sm w-full focus:outline-none"
                {...register("password", { required: true })}
              />
            </div>
          </div>
          <input
            type="submit"
            value="Sign up"
            className="p-3 bg-black w-full rounded-sm text-sm cursor-pointer"
          />
        </form>
        <div className="text-center text-sm mt-4">
          <h2>Already have an account?</h2>
          <Link href="login" className="underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
