import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col gap-[10px] justify-center items-center h-screen">
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[300px] p-8 h-[60px] text-xl">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[300px] p-8 h-[60px] text-xl">
            Register
          </button>
        </Link>
    </div>
  );
}
