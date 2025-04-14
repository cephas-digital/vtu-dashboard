import { Route, Routes } from "react-router-dom";
import PageRender from "./PageRender";
import Index from "./pages/index";
import useAuthStore from "./data/Stores/Authstore";
// import Home from "./screens/home";
import { ToastContainer } from "react-toastify";

// import { clearErrors } from "./data/Reducers/ErrorReducer";

const Routers = () => {
  const { isAuth } = useAuthStore();

  return (
    <>
      <ToastContainer position="bottom-left" />

      <Routes>
        {/* <Route path="/" element={!isAuth ? <Index /> : <Home />} /> */}
        <Route path="/" element={<Index /> } />
        <Route path="/:page" element={<PageRender />} />
        <Route path="/:page/:id" element={<PageRender />} />
        <Route path="/:page/:id/:step" element={<PageRender />} />
      </Routes>
    </>
  );
};

export default Routers;
