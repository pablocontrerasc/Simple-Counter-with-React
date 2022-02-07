import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

//create your first component
const SecondsCounter = () => {
	const [numeroUno, setnumeroUno] = useState(0);
	const [numeroDos, setnumeroDos] = useState(0);
	const [numeroTres, setnumeroTres] = useState(0);
	const [numeroCuatro, setnumeroCuatro] = useState(0);
	const [numeroCinco, setnumeroCinco] = useState(0);
	let contador = 0;
	useEffect(() => {
		setInterval(() => {
			const uno = Math.floor(contador / 1);
			const dos = Math.floor(contador / 10);
			const tres = Math.floor(contador / 100);
			const cuatro = Math.floor(contador / 1000);
			const cinco = Math.floor(contador / 10000);
			contador++;
			setnumeroUno(uno);
			setnumeroDos(dos);
			setnumeroTres(tres);
			setnumeroCuatro(cuatro);
			setnumeroCinco(cinco);
			console.log(cuatro, tres, dos, uno);
		}, 1000);
	}, []);
	console.log(numeroUno);
	return (
		<div className="d-flex justify-content-center container-fluid">
			<div className="container-fluid contenedor">
				<div className="col-1 icon box numero reloj col-md-4">
					<i className="far fa-clock"></i>
				</div>
				<div className="col-md-4 numero cinco">{numeroCinco % 10}</div>
				<div className="numero cuatro">{numeroCuatro % 10}</div>
				<div className="numero tres">{numeroTres % 10}</div>
				<div className="numero dos">{numeroDos % 10}</div>
				<div className="col-md-3 numero uno">{numeroUno % 10}</div>
			</div>
		</div>
	);
};

export default SecondsCounter;
