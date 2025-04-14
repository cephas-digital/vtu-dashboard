import "./App.css";
import $ from "jquery";
import 'react-toastify/dist/ReactToastify.css';
import DataProvider from "./data/Context";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Routes";
import { SetAuthToken, SetDefaultHeaders } from "./data/Config";
import { TOKEN } from "./data/Stores/Authstore";
import DocumentMeta from "react-document-meta";

// Preloader
$(window).on("load", function () {
	$(".lds-ellipsis").fadeOut(); // will first fade out the loading animation
	$(".preloader").delay(333).fadeOut("slow"); // will fade out the white DIV that covers the website.
	$("body").delay(333);
});

SetDefaultHeaders();

if (localStorage.getItem(TOKEN)) {
	SetAuthToken(localStorage.getItem(TOKEN));
}

const App = () => {


	return (
		<DataProvider>
			<Router>

				<Routers />
			</Router>
		</DataProvider>
	);
};

export default App;
