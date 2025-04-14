import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import AOS from "aos";
// import "aos/dist/aos.css";
// import { ThemeProvider } from "@material-tailwind/react";

// AOS.init({
// 	once: false,
// });


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <ThemeProvider>
	// 	<App />
	// </ThemeProvider>

		<App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
