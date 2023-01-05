import React,{useState} from 'react'

const carros=[
  {categoria:"Esporte", preco:"110000", modelo:"Golf GTI", ano:"1998"},
  {categoria:"Hatch", preco:"110000", modelo:"Hyundai HB20", ano:"1998"},
  {categoria:"Hatch", preco:"110000", modelo:"JAC J3", ano:"1998"},
  {categoria:"Sedan", preco:"110000", modelo:"Chevrolet Classic", ano:"1998"},
  {categoria:"Sedan", preco:"110000", modelo:"Chevrolet Cobalt", ano:"1998"},
  {categoria:"Sedan", preco:"110000", modelo:"Honda City", ano:"1998"},
  {categoria:"SUV", preco:"110000", modelo:"Citroën C4 Cactus", ano:"1998"},
  {categoria:"SUV", preco:"110000", modelo:"Peugeot 3008", ano:"1998"},
  {categoria:"SUV", preco:"110000", modelo:"Renault Duster", ano:"1998"},
  {categoria:"Picape", preco:"110000", modelo:"Toyota Hilux", ano:"1998"},
  {categoria:"Conversíveis", preco:"110000", modelo:"Ford Mustang", ano:"1998"},
  {categoria:"Cupês", preco:"110000", modelo:"Volkswagen Arteon", ano:"1998"},
];

const linhas=(cat)=>{
  const li=[]
  carros.forEach(
    (carro)=>{
      if(carro.categoria.toUpperCase()==cat.toUpperCase() || cat.toUpperCase() ==''){
        li.push(
          <tr>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
            <td>{carro.ano}</td>
          </tr>
        )
      }
    }
  )
  return li
}

const tabelaCarros=(cat)=>{
  return(
    <table border='1'>
      <thead>
        <tr>
          <th>Categoria</th><th>preco</th><th>modelo</th><th>ano</th>
        </tr>
      </thead>
      <tbody>
        {linhas(cat)}
      </tbody>
    </table>
  )
}

function Contactjs(){

  const [categoria,setCategoria]=useState('')

  return (
    <div className="body_container">
      <h2>Contactjs</h2>
      {tabelaCarros(categoria)}
    </div>
  )

};

export default Contactjs;