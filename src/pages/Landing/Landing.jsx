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
					<span className="scrolling-element">¿Hablamos?</span>
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
				<h1 className="description">Sobre mí</h1>
				<h2>¡Hola!</h2>
				<p>
					Soy Berto, desarrollador web full-stack.
				</p>
				<p>
					Desde siempre he sido un apasionado de la tecnología pero
					nunca me atreví a dar el paso a este sector porque no pensaba
					que fuese para mí... Hasta ahora. <br/>
					hola
				</p>

			</div>


		</section>
		<section className="lalala">
			lalalalala
			<h1>Hola puti</h1>
		</section>
	</>
)
}
