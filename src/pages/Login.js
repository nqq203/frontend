import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="flex justify-center items-center h-[100vh] px-4">
      <div
        className="flex flex-col items-center rounded-[20px] bg-transparent w-full sm:w-2/3 md:w-1/2 lg:w-1/3 justify-center bg-white shadow-lg shadow-black-500/50 p-8 min-h-[50vh]"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.4)'
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-blue-500 mb-10 md:mb-20">Login</h1>
        <div className="flex flex-col items-center w-full">
          <input
            type="text"
            placeholder="Username"
            className="w-full sm:w-3/4 p-3 mb-5 rounded-md border border-gray-300 text-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full sm:w-3/4 p-3 mb-8 rounded-md border border-gray-300 text-lg focus:outline-none focus:border-blue-500"
          />
          <button className="w-full sm:w-3/4 p-3 mt-4 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600">
            Login
          </button>
          <p className="mt-4 text-gray-600">
            Not have an account?,{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
