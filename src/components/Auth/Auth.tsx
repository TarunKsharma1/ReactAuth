import { useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthFormProps = {
  handleSubmit: (arg: AuthFormFields) => any;
  isLogIn?: boolean;
};

export type AuthFormFields = {
  email: string;
  password: string;
};

const Auth = ({ handleSubmit, isLogIn = true }: AuthFormProps) => {
  const navigate = useNavigate();
  const [fields, setFields] = useState<AuthFormFields>({
    email: "",
    password: "",
  });

  const handleChange = (e: any, name: string) =>
    setFields({ ...fields, [name]: e.target.value });

  const handleNavigation = () => navigate(isLogIn ? "/signup" : "/");

  const onSubmitClick = (e: any) => {
    e.preventDefault();
    handleSubmit(fields);
    setFields({ email: "", password: "" });
  };

  const isDisabled = !(fields.email && fields.password);

  return (
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <form action="#" className="mb-0 mt-6 border-t-2 space-y-4 rounded-lg p-4 shadow-xl sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">{isLogIn ? "Sign in to your account" : "Sign up "}</p>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <input
                  type="email"
                  onChange={(e) => handleChange(e, "email")}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>

              <div className="relative">
                <input
                  type="password"
                  onChange={(e) => handleChange(e, "password")}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  autoComplete="on"
                />
              </div>
            </div>

            <button
              onClick={onSubmitClick}
              disabled={isDisabled}
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              {isLogIn ? "Login" : "Signup"}
            </button>

            <p className="text-center text-sm text-gray-500">
              <span>{isLogIn ? "No Account?  " : "Or Log In Using    "}</span>
              <button
                type="button"
                onClick={handleNavigation}
                className="text-gray-600"
              >
                {isLogIn ? " SIGN UP" : "LOGIN"}
              </button>
            </p>
          </form>
        </div>
      </div>
  );
};

export default Auth;
