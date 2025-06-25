import PropTypes from "prop-types";
import { useState } from "react";
import { validateEmail, validatePassword } from "../utilities/validation";
import { Link } from "react-router-dom";

const InitialErrorsState = {
  email: "",
  password: "",
  api: "",
};

const Authentication = ({ pageType }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState(InitialErrorsState);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (!validateEmail(email)) {
    }
    setErrors({
      ...errors,
      email: "Invalid email",
    });
    if (!validatePassword(password)) {
    }
    setErrors({
      ...errors,
      password: "Password should be atleast 6 characters long",
    });
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
        <h3 className="text-xl font-bold">
          {pageType === PageType.LOGIN ? "Login" : "Register"}
        </h3>
        {
          (pageType === PageType.LOGIN) ?
            <p>
            Not a user?
            <Link to="/register" className="ms-1 underline">
              Register
            </Link>
            </p>
            :
            <p>
            Already a user?
            <Link to="/login" className="ms-1 underline">
              Login
            </Link>
            </p>
        }
        <form onSubmit={handleSubmit}>
          <div className="mt-10 flex gap-4 flex flex-col max-w-90">
            <input
              name="email"
              type="email"
              className="py-2 border border-gray-600 rounded px-3"
              placeholder="enter email"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
            <input
              name="password"
              type="password"
              className="py-2 border border-gray-600 rounded px-3"
              placeholder="enter password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 px-3 py-2 rounded text-white"
            >
              {pageType === PageType.LOGIN ? "Login" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const PageType = Object.freeze({
  LOGIN: 0,
  REGISTER: 1,
});

Authentication.propTypes = {
  pageType: PropTypes.number.isRequired,
};

export default Authentication;
