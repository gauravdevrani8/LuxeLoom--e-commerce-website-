import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import myContext from "../../Components/Context/MyContext";
import { auth } from '../../Firebase/FirebaseConfig';
import Loader from "../../Components/Loader/Loader";
import loginImage from "../../assets/login.jpg";

function Login() {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { Loading, setLoading } = context;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const signin = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success('Signed in successfully');
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate('/');
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      toast.error('Sign in failed. Please check your credentials.');
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center w-full bg-gray-100 items-center h-screen">
        <div className="flex w-full max-w-4xl  bg-white  overflow-hidden">
          <div className="w-1/2">
            <img src={loginImage} alt="Login" className="object-cover w-full h-full" />
          </div>
          <div className="w-1/2 p-8">
            <h1 className="text-3xl font-semibold text-center font-caveat text-gray-800">Welcome back to Luxe Loom</h1>
            <form onSubmit={signin} className="mt-4">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium  text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full bg-gray-100 px-4 py-2 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300"
                  autoComplete="email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full bg-gray-100 px-4 py-2 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute inset-y-0 right-0 px-3 flex items-center bg-transparent text-gray-600 hover:text-gray-700"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  {Loading ? <Loader /> : "Log In"}
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center space-x-4">
              <button className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700" aria-label="Log in with Google">
                <FaGoogle />
              </button>
              <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700" aria-label="Log in with Facebook">
                <FaFacebook />
              </button>
              <button className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700" aria-label="Log in with Email">
                <FaEnvelope />
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-600 text-center">
              New user?{" "}
              <Link to="/signup" className="font-medium text-gray-800 hover:text-gray-900">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default Login;
