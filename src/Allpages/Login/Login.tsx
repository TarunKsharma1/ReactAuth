import { useDispatch, useSelector } from "react-redux";
import { Auth } from "../../components";
import { AuthFormFields } from "../../components/Auth/Auth";
import { login } from "../../Authentication/authentication.asyncActions";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { selectIsAuthenticated } from "../../Authentication/authentication.selectors";
import { useEffect } from "react";

const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  const handleSubmit = (values: AuthFormFields) =>
    dispatch(login(values)).then((res) => {
      console.log(res);
      const { error } = res.payload;
      if (error) alert(error);
    });

  return (
    <section>
      <div>
        <Auth handleSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default Login;
