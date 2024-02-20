import React from "react";
import { useState } from "react";
import "./styles/landingStyles.css"

export const Landing = () => {

return (
	<>

		<section className="hero">
			<h1 id="caret">
				Soy&nbsp;
					<span className="front"></span>
					<span className="back"></span>
					<span className="creativo"></span>
					<span className="dinamico"></span>
					<span className="polo"></span>
			</h1>
		</section>
		<section id="about">

			<div className="scrolling-banner">
				<div className="text">
					<span className="scrolling-element">Bienvedido a mi portfolio</span>
					<span className="flower">
						<img src="../../../public/flower40.svg" alt="" />
					</span>
					<span className="scrolling-element">Un placer conocerte</span>
					<span className="flower">
						<img src="../../../public/flower40.svg" alt="" />
					</span>
					<span className="scrolling-element">Gracias por venir</span>
					<span className="flower">
						<img src="../../../public/flower40.svg" alt="" />
					</span>
					<span className="scrolling-element">Disfruta la visita</span>
					<span className="flower">
						<img src="../../../public/flower40.svg" alt="" />
					</span>
					<a href="#contact" className="scrolling-element">¿Hablamos?</a>
					<span className="flower">
						<img src="../../../public/flower40.svg" alt="" />
					</span>
				</div>
				<div className="text">
				<span className="scrolling-element">Bienvedido a mi portfolio</span>
					<span className="flower">
						<img src="../../../public/flower40.svg" alt="" />
					</span>
					<span className="scrolling-element">Un placer conocerte</span>
					<span className="flower">
						<img src="../../../public/flower40.svg" alt="" />
					</span>
					<span className="scrolling-element">Gracias por venir</span>
					<span className="flower">
						<img src="../../../public/flower40.svg" alt="" />
					</span>
					<span className="scrolling-element">Disfruta la visita</span>
					<span className="flower">
						<img src="../../../public/flower40.svg" alt="" />
					</span>					
					<span className="scrolling-element">¿Hablamos?</span>
					<span className="flower">
						<img src="../../../public/flower40.svg" alt="" />
					</span>					
				</div>
			</div>

			<div className="main">
				<div className="main__text">
					<h1 className="description">
						¡Hola!
					</h1>
					<h2>
						Soy Berto, desarrollador web full-stack.
					</h2>
					<p>
						Desde siempre he sido un apasionado de la tecnología pero
						nunca me atreví a dar el paso a este sector porque no pensaba
						que fuese para mí... Hasta ahora. <br/>
						
					</p>
				</div>
				<div className="picture">
					<img src="../../../public/self.png" alt="" />
				</div>

			</div>


		</section>
		<section className="lalala">
			lalalalala
			<h1>Hola puti</h1>
		</section>
		<section className="lololo" id="contact">
			lalalalala
			<h1>Hola puti</h1>
		</section>
	</>
)
}
