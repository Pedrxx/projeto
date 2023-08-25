import React, { useState } from "react";

const Home = ({nome,idade}) =>{

	const [valor, setValor] = useState(0);

	const alterarValor = (v) =>{
		setValor(valor+1+v);
	}
	return(
		<>
			<h1>Esta é minha página inicial!!</h1>
			<p>Meu nome é {nome} e minha idade é {idade}</p>
			<button onClick={()=>alterarValor(10)}>Alterar  {valor}</button>
			<br/><br/>
			<a href="/calculadora">Calculadora</a>
			
		</>
	);
}
export default Home;