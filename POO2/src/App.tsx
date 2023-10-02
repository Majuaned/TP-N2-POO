import { useEffect, useState } from 'react';
import './App.css'

import {ListaProducto} from './clases/2.ProductosMetodos'
import { Producto } from './clases/2.ProductoEsquema';
import {listaProd} from './clases/2.ProductosMetodos'

function App() {
const [listaprod,setlistaprod] = useState<Producto[]>([]);
const [nombreProd,setNombreProducto] = useState('');
const [tipoProd,setTipoProd] = useState('');
const [marca,setMarca] = useState('');
const [codigoProd,setCodigoProd] = useState('');
const [precio,setPrecio] = useState('');
const [uniXCant,setUniXCant] = useState('');
const [uniXBulto,setUniXBulto] = useState('');
const [stock,setStock] = useState('');
const [selector,setSelector] = useState('');
const [contador,setContador] = useState('');
const [mensaje, setMensaje] = useState('');

// ****   FUNCIÓN PARA AGREGAR UN PRODUCTO   *******
const addProd = ()=>{
  const producto: Producto = {
    id: listaProd.generadorNumeroProId(),
    nombreProd: nombreProd ,
    tipoProd: tipoProd,
    marca: marca,
    codigoProd: codigoProd,
    precioXUnidad: parseInt(precio),
    minimoXCant: parseInt(uniXCant),
    minimoXBolsa: parseInt(uniXBulto),
    stock: parseInt(stock),
    date: new Date().toLocaleString(),
}
listaProd.addProd(producto); //carga el producto de los inputs 
  console.log(listaProd.getProd());
setlistaprod(listaProd.getProd());//Setea a mi lista de productos
listaProd.getProd()// Muestra la lista de productos

//Seteo a cero de los campos
setNombreProducto('');
setTipoProd('');
setMarca('');
setCodigoProd('');
setPrecio('');
setUniXCant('');
setUniXBulto('');
setStock('');
} //*************************************************************************** */

//  *******************    FUNCION PARA VENDER    ****************************
const venderProd = ()=>{

  // let precio = venderProd(selector.toLowerCase(),parseInt(contador))

  const test = listaProd.venderProd(selector.toLowerCase(),parseInt(contador))
  console.log(test)

  setMensaje(test);

  setlistaprod(listaProd.getProd())
  console.log(listaprod)

}

useEffect(() => {
  setlistaprod(listaProd.getProd())
}, [])

useEffect(() => {
  
  setSelector(listaProd.getProd()[0].nombreProd)
}, [])
  return (
    <>
      <h1>SISTEMA DE GESTIÓN DE VENTAS 1</h1>

        <h2>AGREGAR PRODUCTOS</h2>
          <form>
            <input 
              type="text"
              name="nombreProducto"
              placeholder='Nombre del Producto'
              value={nombreProd}
              //Se toma el valor escrito en el input
              onChange={(e) => setNombreProducto(e.target.value)}
            />

            <input 
              type="text"
              name="marca"
              placeholder='Marca'
              value={marca}
              //Se toma el valor escrito en el input
              onChange={(e) => setMarca(e.target.value)}
            />

            <input 
              type="text"
              name="tipoProducto"
              placeholder='Tipo del Producto'
              value={tipoProd}
              //Se toma el valor escrito en el input
              onChange={(e) => setTipoProd(e.target.value)}
            />

            <input
              type='string'
              name='codigoProd'
              placeholder='Código del Producto'
              value={codigoProd}
              onChange={(e)=>setCodigoProd(e.target.value)}
            />

            <input
            type='text'
            name='precio'
            placeholder='Precio por unidad'
            value={precio}
            onChange={(e)=>setPrecio(e.target.value)}
            />

            <input
            type='number'
            name='uniXCant'
            placeholder='Unidades para ser Cantidad'
            value={uniXCant}
            onChange={(e)=>setUniXCant(e.target.value)}
            />

            <input
            type='number'
            name='uniXBulto'
            placeholder='Unidades para ser Bulto'
            value={uniXBulto}
            onChange={(e)=>setUniXBulto(e.target.value)}
            />

            <input
            type='number'
            name='stock'
            placeholder='Stock de ingreso del producto'
            value={stock}
            onChange={(e)=>setStock(e.target.value)}
            />

          <br/><br/>

          <button
            type='button'
            onClick={addProd}>
            Agregar Producto
          </button>

          </form>

        <h2>PRODUCTOS</h2>
      <div> {/* ********    TABLA    ************ */}
        <table>
          <thead>
            <tr>
              <th>Nombre Producto</th>
              <th>Marca</th>
              <th>Tipo de Producto</th>
              <th>Precio</th>
              <th>Unidades para cantidad</th>
              <th>Unidades para bulto</th>
              <th>Stock</th>
            </tr>
          </thead>

          {listaprod.map((prod,i)=>(
            <tr key={i}>
              <td>{prod.nombreProd}</td>
              <td>{prod.marca}</td>
              <td>{prod.tipoProd}</td>
              <td>${prod.precioXUnidad}</td>
              <td>{prod.minimoXCant} unid</td>
              <td>{prod.minimoXBolsa} unid</td>
              <td>{prod.stock}</td>
            </tr>))}
            
        </table>
      </div> {/* **************************************** */}
            <br/>

      <div>
        <h2>VENDER PRODUCTO</h2>
          <label htmlFor="">Seleccione el Producto</label>

          <select name="selecProd" id="selecProd" onChange={(e)=>setSelector(e.target.value)}>
            {listaprod.map((prod,index)=>(
              <option key={index}>{prod.nombreProd.toLocaleUpperCase()}
              </option>
            ))}
            </select>
            
         
          <br/>
          
          <label>Seleccione la Cantidad</label>
          <input className='input'
            type='number'
            name='cantidad'
            onChange={(e)=>setContador(e.target.value)}
          />
          <br/>

            <button
            type='button'
            onClick={venderProd}>
            Vender Producto
          </button>

          {mensaje ? 
            <div id='mensajeVentas'>
              <p>{mensaje}</p>
            </div> : <div></div>
          }

      </div>

    </>
  )
}

export default App

















//  {listaprod.map((datos)=>(
//   <div>
//   <p>{datos.respuesta}</p>
// </div>
// ))}
