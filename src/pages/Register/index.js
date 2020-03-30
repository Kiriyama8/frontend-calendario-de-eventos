import React from "react";
import {Link} from "react-router-dom";

import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import scheduleImg from '../../assets/schedule.svg';

function Register() {
	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={scheduleImg} width="250" alt="Schedule"/>
					<h1>Cadastro</h1>
					<p>Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem os eventos da sua cidade.</p>

					<Link className="back-link" to="/">
						<FiArrowLeft size={16} color="#7836DA" /> Voltar para tela inicial
					</Link>
				</section>

				<form>
					<input type="text" placeholder="Título do evento"/>
					<input type="text" placeholder="Descrição"/>
					<input type="text" placeholder="Horário"/>
					<div className="input-group">
						<input type="text" placeholder="Cidade"/>
						<input type="text" placeholder="UF" style={{ width: 80 }}/>
					</div>

					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	);
}

export default Register;
