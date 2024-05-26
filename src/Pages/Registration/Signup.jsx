import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGoogle, FaFacebook } from "react-icons/fa";
import { toast } from "react-toastify";
import myContext from "../../Components/Context/MyContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../Firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../Components/Loader/Loader";
import loginImage from "../../assets/login.jpg";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Loading, setLoading } = useContext(myContext);

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!firstName || !lastName || !email || !password) {
        throw new Error("All fields are required");
      }
      if (password.length < 6) {
        throw new Error("Password should be at least 6 characters long");
      }

      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      const userData = {
        firstName,
        lastName,
        uid: user.uid,
        email: user.email,
        time: Timestamp.now()
      };

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, userData);

      toast.success("Signup successful");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error.code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters long");
      } else if (error.code === "auth/email-already-in-use") {
        toast.error("Email address is already in use. Please log in or use a different email address.");
      } else {
        toast.error("An error occurred while signing up. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFocus = (e) => {
    e.target.previousSibling.classList.add("transform", "scale-105");
    e.target.classList.add("transform", "scale-105");
  };

  const handleBlur = (e) => {
    e.target.previousSibling.classList.remove("transform", "scale-105");
    e.target.classList.remove("transform", "scale-105");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800">
      {Loading && <Loader />}
      <div className="flex bg-white shadow-md rounded-md overflow-hidden max-w-4xl w-full">
        <div className="hidden md:block md:w-1/2">
          <img src={loginImage} alt="Login" className="object-cover w-full h-full" />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>
          <form onSubmit={signup}>
            {["firstName", "lastName", "email", "password"].map((field) => (
              <div key={field} className="mb-4 relative">
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-800 transition-transform transform-gpu"
                  style={{ transitionDuration: "0.3s" }}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  type={field === "password" ? "password" : "text"}
                  value={field === "firstName" ? firstName : field === "lastName" ? lastName : field === "email" ? email : password}
                  onChange={(e) => {
                    if (field === "firstName") setFirstName(e.target.value);
                    else if (field === "lastName") setLastName(e.target.value);
                    else if (field === "email") setEmail(e.target.value);
                    else setPassword(e.target.value);
                  }}
                  id={field}
                  name={field}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  autoComplete={field === "email" ? "email" : "new-password"}
                  className="mt-1 block w-full border-b-2 border-gray-300 sm:text-sm transition-transform transform-gpu focus:outline-none focus:border-gray-500 focus:ring-0"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-800 hover:bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Sign Up
            </button>
          </form>
          <div className="flex mt-5 justify-center items-center space-x-4">
            <button
              className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
              aria-label="Sign up with Google"
            >
              <FaGoogle />
            </button>
            <button
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              aria-label="Sign up with Facebook"
            >
              <FaFacebook />
            </button>
            <button
              className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700"
              aria-label="Sign up with Email"
            >
              <FaEnvelope />
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-gray-800 hover:text-gray-900"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
