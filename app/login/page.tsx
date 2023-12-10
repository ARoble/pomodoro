import { FcGoogle } from "react-icons/fc";
import { TbFocus2 } from "react-icons/tb";
import Link from "next/link";

function Page() {
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
        <div className="bg-white p-4 rounded-sm ">
          <button className="flex justify-center items-center p-3 bg-white text-gray-500 w-full rounded-sm text-sm text-semibold border drop-shadow-sm ">
            <FcGoogle size={20} className="mr-1" />
            Login with Google
          </button>
          <div className="flex items-center space-x-2 py-3 text-black">
            <div className="my-2 border-b-2 border-gray-200 w-full"></div>
            <h3 className="text-gray-300">or</h3>
            <div className="my-2 border-b-2 border-gray-200 w-full"></div>
          </div>

          <div className="space-y-3 mb-5">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-400">
                EMAIL
              </label>
              <input
                type="text"
                className="bg-gray-100 text-black py-2 px-2.5 rounded-sm w-full placeholder:text-neutral-300 focus:outline-none "
                placeholder="example@mail.com"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-400">
                PASSWORD
              </label>
              <input
                type="password"
                className=" bg-gray-100 text-black py-2 px-3 rounded-sm w-full focus:outline-none"
              />
            </div>
          </div>
          <button className="p-3 bg-black w-full rounded-sm text-sm">
            Login
          </button>
        </div>
        <div className="text-center text-sm mt-4">
          <h2>Do not have an account?</h2>
          <Link href="signup" className="underline">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
