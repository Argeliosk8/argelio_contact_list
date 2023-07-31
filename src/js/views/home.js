import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="d-flex justify-content-between" id="mainContainer">
		<div className="container col-3" id='imgContainer'>
			<img src="https://reqres.in/img/faces/1-image.jpg" class="img-thumbnail" alt="..."/>
		</div>
		<div className="d-flex flex-column align-items-start col-6" id='infoContainer'>
			<h4>David Rocket</h4>
			<p>address</p>
			<p>email</p>
			<p>phone</p>
		</div>
		<div className="container col-3" id='buttonsContainer'>
			<h4>Buttons</h4>
		</div>
	</div>
);
