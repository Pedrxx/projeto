import React from "react";
import './Botao.css';

const Botao = ({label, onClick}) =>{

	return(
		<>
			<button className="botao" onClick={onClick}>{label}</button>
		</>
	);
}
export default Botao;