import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import  { AuthFormFields } from "../../components/Auth/Auth";
import { signup } from "../../Authentication/authentication.asyncActions";
import { selectIsAuthenticated } from "../../Authentication/authentication.selectors";
import { useEffect } from "react";
import { Auth } from "../../components";

const Signup = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  const handleSubmit = (values: AuthFormFields) =>
    dispatch(signup(values)).then((res) => {
      const { error } = res.payload;
      if (error) alert(error);
    });

  return (
      <Auth handleSubmit={handleSubmit} isLogIn={false} />
  );
};

export default Signup;
