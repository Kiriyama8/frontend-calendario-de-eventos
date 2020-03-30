import React from "react";
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import calendarImg from '../../assets/events.svg';

function Login() {
	return (
		<div className="login-container">
			<section className="form">
				<form>
					<h1>Faça seu login</h1>

					<input type="text" placeholder="Informe seu ID"/>
					<button className="button" type="submit">Entrar</button>

					<Link to="/criar-conta">
						<FiLogIn size={16} color="#7836DA" /> Não tenho cadastro
					</Link>
				</form>
			</section>

			<img src={calendarImg} width="550px" alt="Calendar"/>
		</div>
	);
}

export default Login;
