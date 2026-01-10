import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./Componets/Layout/Layout";
import Home from "./Componets/Home/Home";
import Login from "./Componets/Login/Login";
import Signup from "./Componets/Signup/Signup";
import MovieDitaels from "./Componets/MovieDitaels/MovieDitaels";
import NotFound from "./Componets/NotFound/NotFound";
import AuthProvider from "./Context/AuthContext";
import ProdectedRout from "./prodectedRout/ProdectedRout";
import AuthROUR from "./AuthRout/AuthROUR";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProdectedRout>
              {" "}
              <Home />{" "}
            </ProdectedRout>
          ),
        },
        {
          path: "/login",
          element: (
            <AuthROUR>
              {" "}
              <Login />
            </AuthROUR>
          ),
        },
        {
          path: "/signup",
          element: (
            <AuthROUR>
              <Signup />{" "}
            </AuthROUR>
          ),
        },
        {
          path: "/movie/:id",
          element: (
            <ProdectedRout>
              {" "}
              <MovieDitaels />{" "}
            </ProdectedRout>
          ),
        },
        { path: "/*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </AuthProvider>
    </>
  );
}

export default App;
