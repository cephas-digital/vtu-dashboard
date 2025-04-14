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







// /* eslint-disable no-undef */
// import { createElement, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import useAuthStore from "./data/Stores/Authstore";



// const PageRender = () => {
//   const { page, id, step } = useParams();
//   const navigate = useNavigate();
//   const { auth, errors, clearErrors } = useAuthStore();
  
//   const escape2 = ["home", "about", "events", "our-events", "sign-up"];
//   const escape3 = ["login", "afiliates","action", "Allusers" , "Standalones", 
//     "Usersdetails", "Affiliateuserdetails", "Allsales", "Affiliatesales","Standalonesales",
//      "Usertransactions", "Allnotifications", "Incomingnotifications", "Outgoingnotifications", 
//      "Newnotifications", "Upgradesucess", "Allmessages", "Messagetitle", "Message", "Disableuser",
//     "Chatbot"];
  
//   const generatePage = (pageName, folder) => {
//     try {
//       return createElement(require(`./${pageName}`).default);
//     } catch (error) {
//       console.error("Error loading page:", error);
//       return null;
//     }
//   };

//   useEffect(() => {
//     if (!auth?.isAuth) {
//       if (errors?.errorText && page !== "login" && page !== "register") {
//         navigate("/");
//         clearErrors();
//       }
//     } else if (page === "login" || page === "register") {
//       navigate("/");
//     }
//   }, [page, auth?.isAuth, navigate, errors?.errorText]);

//   let pageName = "";
//   if (step) {
//     pageName = `${page}/${id}/${"[id]"}`;
//   } else if (id) {
//     if (
//       (page === "home" && escape2.includes(id)) ||
//       (page === "dashboard" && escape3.includes(id))
//     ) {
//       pageName = `${page}/${id}`;
//     } else {
//       pageName = `${page}/${"[id]"}`;
//     }
//   } else {
//     pageName = `${page}`;
//   }

//   // Make "pages" the default path instead of "screens"
//   return generatePage(pageName, "pages");
// };

// export default PageRender;





// /* eslint-disable no-undef */
// import { createElement, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// // Import useAuthStore hook from the correct location
// import useAuthStore from "./data/Stores/Authstore";

// const PageRender = () => {
//   // Retrieve page, id, and step from URL params
//   const { page, id, step } = useParams();
//   const escape2 = ["home", "about", "events", "our-events", "sign-up"];
//   const escape3 = ["home-page", "user"];
//   const navigate = useNavigate();

//   // Use the useAuthStore hook to access authentication-related state
//   const { auth, errors, clearErrors, isAuth } = useAuthStore();

//   // Define generatePage function inside PageRender
//   const generatePage = (pageName, folder) => {
//     const component = () => require(`./${folder}/${pageName}`).default;
//     try {
//       return createElement(comp());
//     } catch (error) {
//       console.error("Error loading page:", error); // Log the error for debugging
//       // Display an error message or redirect to an error page
//       // You can return an ErrorPage component here if needed
//       return null;
//     }
//   };

//   useEffect(() => {
//     // Redirect to the homepage if the user is not authenticated
//     if (!auth?.isAuth) {
//       if (errors?.errorText) {
//         if (page !== "login" && page !== "register") {
//           navigate("/");
//         }
//         clearErrors();
//       }
//     }
//     // Redirect to the homepage if the user is authenticated and tries to access login or register pages
//     if (auth?.isAuth) {
//       if (page === "login" || page === "register") {
//         navigate("/");
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [page, auth?.isAuth, navigate, errors?.errorText]);

//   // Construct the page name based on URL params and available escape routes
//   let pageName = "";
//   if (step) {
//     pageName = `${page}/${id}/${"[id]"}`;
//   } else if (id) {
//     if (
//       (page === "home" && escape2.includes(id)) ||
//       (page === "dashboard" && escape3.includes(id))
//     ) {
//       pageName = `${page}/${id}`;
//     } else {
//       pageName = `${page}/${"[id]"}`;
//     }
//   } else {
//     pageName = `${page}`;
//   }

//   // Call generatePage with the constructed pageName and determine the folder based on user authentication status
//   // return generatePage(pageName, !isAuth ? "pages" : "screens");
//   return generatePage(pageName, "pages");

// };

// export default PageRender;








// /* eslint-disable no-undef */
// import { createElement, useEffect } from "react";
// import { useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import useAuthStore from "./data/Stores/Authstore";

// const generatePage = (pageName, folder) => {
//   const component = () => require(`./${folder}/${pageName}`).default;
//   try {
//     return createElement(component());
//   } catch (error) {
//     // return <ErrorPage />;
//   }
// };

// const PageRender = () => {
//   const { page, id, step } = useParams();
//   const escape2 = ["home", "about"],
//     navigate = useNavigate();

//   useEffect(() => {
//     if (!auth?.isAuth) {
//       if (errors?.errorText) {
//         if (page !== "login" && page !== "register") {
//           navigate("/");
//         }
//         clearErrors();
//       }
//     }
//     if (auth?.isAuth) {
//       if (page === "login" || page === "register") {
//         navigate("/");
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [page, auth?.isAuth, navigate, errors?.errorText]);

//   // if (general?.isLoading && users.isLoading) return <Loader />;

//   let pageName = "";
//   if (step) {
//     pageName = `${page}/${id}/${"[id]"}`;
//   } else if (id) {
//     if (
//       (page === "home" && escape2.includes(id)) ||
//       (page === "about" && escape2.includes(id))
//     ) {
//       pageName = `${page}/${id}`;
//     } else {
//       pageName = `${page}/${"[id]"}`;
//     }
//   } else {
//     pageName = `${page}`;
//   }
//   return generatePage(pageName, isAuth ? "pages" : "screens");
// };

// export default PageRender;
