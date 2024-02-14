import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import Login from "./Allpages/Login";
import { Restricted } from "./components";
import Dashboard from "./Allpages/Dashboard";
import ErrorPage from "./Allpages/Errorpage";
import Signup from "./Allpages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: (
      <Restricted>
        <Dashboard />
      </Restricted>
    ),
  },
])

function App() {
  return (
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  );
}

export default App;
