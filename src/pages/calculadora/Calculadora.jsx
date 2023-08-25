import React, { useEffect, useState } from "react";
import Botao from "../../components/botao/Botao";
import './Calculadora.css';
import { CalculadoraService } from "../../services/CalculadoraService";

const Calculadora = () => {
	const [valor1, setValor1] = useState();
	const [valor2, setValor2] = useState();
	const [resultado, setResultado] = useState();
	const calculadoraService=new CalculadoraService();
	const [calculos, setCalculos] = useState(null);

	useEffect(()=>{
		if(calculos==null){
			consultar();
		}		
	},[calculos]);

	const consultar = () =>{
		calculadoraService.consultar().then(data =>{
			setCalculos(data.data);
		});
	}

	const salvar = (valor1, valor2, operacao) =>{
		calculadoraService.salvar({valor1:valor1, valor2:valor2, operacao:operacao}).then(data=>{
			console.log(data);
			setCalculos(null);
		});	
	}

	const somar = () => {
		setResultado(parseFloat(valor1) + parseFloat(valor2));
		salvar(valor1, valor2, "+");
	}
	const subtrair = () => {
		setResultado(parseFloat(valor1) - parseFloat(valor2));
	}
	return (
		<>
			<div className="container">
				<h3>Calculadora</h3>
				<input className="field" id="valor1" type="number" onChange={(e) => setValor1(e.target.value)} />
				<input className="field" id="valor2" type="number" onChange={(e) => setValor2(e.target.value)} />
				<Botao label="Somar" onClick={somar} />
				<Botao label="Subtrair" onClick={subtrair} />
				<div className="resultado">{resultado}</div>

				{calculos!=null && calculos.map(calculo=>(
					<p>{calculo.valor1}{calculo.operacao}{calculo.valor2}</p>
				))}
			</div>
		</>
	);
}
export default Calculadora;