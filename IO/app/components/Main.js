import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Search from "./Search";
import Saved from "./Saved";


const Main = props => (
	<div>
		<Navbar />
    	{props.children}
		<Footer />
	</div>
);

export default Main;