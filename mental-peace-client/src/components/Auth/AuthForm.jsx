import { AuthContext } from "@/src/providers/AuthProvider";
import PrimaryButton from "@/src/utils/PrimaryButton";
import SecondaryButton from "@/src/utils/SecondaryButton";
import { useFormik } from "formik";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Loader2 from "../Shared/Loader2";

const AuthForm = ({ objective }) => {
  const [authInfo, dispatch] = useContext(AuthContext);
  const { signUp, login } = authInfo;
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    login(values.email, values.password)
      .then((res) => {
        // Logged in successfully

        dispatch({
          type: "SUCCESS",
          name: res.user.displayName,
          email: res.user.email,
          image: res.user.photoURL,
          role: "user",
        });
        console.log("Successfully logged in");
      })
      .catch((err) => {
        dispatch({
          type: "FAILURE",
          message: err.message,
        });
      });
  };

  const handleSignup = async (values) => {
    // Checking if password and confirm password are equal
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await signUp(values.email, values.password);

      await updateProfile(res.user, {
        displayName: values.name,
        photoURL: values.image,
      });

      dispatch({
        type: "SUCCESS",
        name: values.name,
        email: values.email,
        image: values.image,
        role: "user",
      });

      navigate("/");
    } catch (err) {
      dispatch({ type: "FAILURE", payload: err.message });
    } finally {
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      image: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      objective === "Login" ? handleLogin(values) : handleSignup(values);
    },
  });

  return (
    <div className="bg-white w-full max-w-lg p-10">
      <h1 className="text-5xl text-center mb-8">{objective}</h1>
      <form className="space-y-3" onSubmit={formik.handleSubmit}>
        {objective === "Sign Up" && (
          <input
            required
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Enter Name"
            className="w-full border border-primary p-2.5 placeholder:text-primary focus:border-primary focus:outline-none"
          />
        )}
        <input
          required
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Enter Email"
          className="w-full border border-primary p-2.5 placeholder:text-primary focus:border-primary focus:outline-none"
        />
        {objective === "Sign Up" && (
          <input
            required
            type="text"
            name="image"
            onChange={formik.handleChange}
            value={formik.values.image}
            placeholder="Enter image URL"
            className="w-full border border-primary p-2.5 placeholder:text-primary focus:border-primary focus:outline-none"
          />
        )}
        <input
          required
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Enter Password"
          className="w-full border border-primary p-2.5 placeholder:text-primary focus:border-primary focus:outline-none"
        />
        {objective === "Sign Up" && (
          <input
            required
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            placeholder="Confirm your password"
            className="w-full border border-primary p-2.5 placeholder:text-primary focus:border-primary focus:outline-none"
          />
        )}
        {authInfo.isError && (
          <p className="text-red-500 text-sm">{authInfo.error}</p>
        )}
        <PrimaryButton
          disabled={authInfo.isLoading}
          type="submit"
          width="w-full"
        >
          {authInfo.isLoading ? <Loader2 /> : objective}
        </PrimaryButton>
      </form>

      {/* Go to login or sign up page */}
      <p className="mt-2">
        {objective === "Login" ? (
          <span>
            Don&apos;t have an account?{" "}
            <Link to="/auth/sign-up" className="text-primary underline">
              Create Account
            </Link>
          </span>
        ) : (
          <span>
            Already have an account?{" "}
            <Link to="/auth/login" className="text-primary underline">
              Login
            </Link>
          </span>
        )}
      </p>

      {/* Divider */}
      <div className="flex items-center justify-center gap-2 mt-5">
        <span className="inline-block h-0.5 w-40 bg-primary" />
        <span className="font-playfair text-xl">Or</span>
        <span className="inline-block h-0.5 w-40 bg-primary" />
      </div>

      {/* Social buttons */}
      <div className="text-center mt-4">
        <SecondaryButton width="w-4/6">
          <FaGoogle size={20} />
          <span className="ml-2">Google</span>
        </SecondaryButton>
      </div>
    </div>
  );
};

export default AuthForm;
