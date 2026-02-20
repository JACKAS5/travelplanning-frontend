import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
{/*import { GoogleLogin } from "@react-oauth/google";*/}
import Button from "../../components/ui/Button";
import { login } from "../../utils/fakeAuth";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      login({ name: "John Doe", email: email });
      setLoading(false);
      navigate("/profile"); // redirect to home on success
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
          Login to TravelPlanner
        </h2>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <Link
              to="/auth/forgot-password"
              className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-2 py-3 text-lg"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/auth/register"
            className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
          >
            Sign Up
          </Link>
        </p>
        <br></br>
        <div className="relative flex items-center justify-center mb-6">
          <span className="text-gray-400 dark:text-gray-500 text-sm">OR</span>
        </div>
        {/* OAuth Login */}
        {/*
        <div className="flex flex-col gap-4 mb-6">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log("Google login success:", credentialResponse);
            }}
            onError={() => {
              console.log("Google login failed");
            }}
          />
        </div>

        */}
      </div>
    </div>
  );
};

export default Login;
