/* eslint-disable no-undef */
import { lazy, Suspense, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuthStore from "./data/Stores/Authstore";

const PageRender = () => {
  const { page, id, step } = useParams();
  const navigate = useNavigate();
  const { auth, errors, clearErrors } = useAuthStore();
  const [Component, setComponent] = useState(null);

  const escape2 = ["home", "about", "events", "our-events", "sign-up"];
  const escape3 = [
    "login", "afiliates", "action", "Allusers", "Standalones",
    "Usersdetails", "Affiliateuserdetails", "Allsales", "Affiliatesales", "Standalonesales",
    "Usertransactions", "Allnotifications", "Incomingnotifications", "Outgoingnotifications",
     "Upgradesucess", "Allmessages", "Messagetitle", "Message", "Disableuser","Chatbot", "Settings",
      "Cms", "Security", "Manageuser", "Theme", "Resetpassword", "Alluserdetails", 
  ];

  let pageName = "";
  if (step) {
    pageName = `${page}/${id}/[id]`;
  } else if (id) {
    if (
      (page === "home" && escape2.includes(id)) ||
      (page === "dashboard" && escape3.includes(id))
    ) {
      pageName = `${page}/${id}`;
    } else {
      pageName = `${page}/[id]`;
    }
  } else {
    pageName = `${page}`;
  }

  useEffect(() => {
    const loadPage = async () => {
      try {
        console.log(`Loading: ./pages/${pageName}.js`);
        const module = await import(`./pages/${pageName}`);
        setComponent(() => module.default);
      } catch (error) {
        console.error("Error loading page:", error);
        setComponent(() => () => <h1>Page Not Found</h1>);
      }
    };

    loadPage();
  }, [pageName]);

  useEffect(() => {
    if (!auth?.isAuth) {
      if (errors?.errorText && page !== "login" && page !== "register") {
        navigate("/");
        clearErrors();
      }
    } else if (page === "login" || page === "register") {
      navigate("/");
    }
  }, [page, auth?.isAuth, navigate, errors?.errorText]);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {Component ? <Component /> : <h1>Loading...</h1>}
    </Suspense>
  );
};

export default PageRender;


