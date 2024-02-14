import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Authentication";
import { AppDispatch } from "../../redux/store";
import { selectIsAuthenticated } from "../../Authentication/authentication.selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  const handleLogout = () => dispatch(logout());

  return (
    <section >
      <div >
        <div className="bg-white text-center mx-auto p-5 border rounded-xl">
          <div className="text-3xl mb-4">Welcome!!</div>
          <div className="mb-4">Here to a Authenticated Dashboard</div>
          <button
            onClick={handleLogout}
            className="text-white rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
