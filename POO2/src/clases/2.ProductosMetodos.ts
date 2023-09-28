import { Producto } from './2.ProductoEsquema.js'

export class ListaProducto {
    // Declaro un objeto vacío...
    private arrProd: Producto[] = []

    // ****  FUNCIÓN GENERADOR ID  ************
    generadorNumeroProId () {
        const ids = this.arrProd.map(e => e.id)
    
        if (!ids.length) {
          ids.push(0)
        }
        return Math.max(...ids) + 1
      }

    //****  AGREGA PRODUCTOS  ******/
    addProd (prod: Producto){
        this.arrProd.push(prod)
    }

    getProd(){
       return this.arrProd
    }

    buscarProd(nombreProd: string) {
        const productoEncontrado = this.arrProd.find(e => e.nombreProd === nombreProd);
      
        if (productoEncontrado) {

          console.log(`Este producto cuesta $${productoEncontrado.precioXUnidad} por unidad.`)
          console.log(`A partir de ${productoEncontrado.minimoXCant} productos el precio de cada uno es de $${productoEncontrado.precioXUnidad*0.90}.`)
          console.log(`Comprando ${productoEncontrado.minimoXBolsa} productos, cada uno le cuesta $${productoEncontrado.precioXUnidad*0.80}.`)
          console.log(`Unidades disponibles: ${productoEncontrado.stock}`);
        

        } else {
            console.log(`El producto "${nombreProd}" no se encontró en la lista.`);
        }
      }

    venderProd(nombreProd: string, cantidad: number) {
        
        const productoEncontrado = this.arrProd.find(e => e.nombreProd === nombreProd);
        if(!productoEncontrado) 
        return console.log('No se encontró el producto')
       
        if (cantidad < productoEncontrado?.stock) {

            this.arrProd = this.arrProd.map(e=>{

                if(e.nombreProd == nombreProd) {
                    if (cantidad>=e.minimoXCant && cantidad<e.minimoXBolsa) {
                    // return 
                    alert(`Total a pagar: ${e.precioXUnidad*cantidad*0.90}
                    Precio por producto: ${e.precioXUnidad*0.90}`)
                    // mensaje= `Total a pagar: ${e.precioXUnidad*cantidad*0.90}
                    // Precio por producto: ${e.precioXUnidad*0.90}`

                    if (cantidad>=e.minimoXBolsa) {
                    alert(`Total a pagar: ${e.precioXUnidad*cantidad*0.80}
                    Precio por producto: ${e.precioXUnidad*0.80}`) 
                    } 
                    } else {
                    // return result =e.precioXUnidad*cantidad
                    // mens =`Total a pagar: ${e.precioXUnidad*cantidad} `
                    alert(`Total a pagar: ${e.precioXUnidad*cantidad}
                    Precio por producto: ${e.precioXUnidad}`)
                    
                    // return `Total a pagar: ${e.precioXUnidad*cantidad}
                    // Precio por producto: ${e.precioXUnidad}`
                    }  
                    return {
                        ...e,
                        stock: e.stock-cantidad
                    }               
                }
                return e
            })
        } else {
            alert('No hay stock disponible')
        }
        this.buscarProd(nombreProd)
    }
}

const listaProd = new ListaProducto();

//*************************    INSTANCIACIÓN    *********************************** */
const producto1: Producto = {
    id: listaProd.generadorNumeroProId(),
    nombreProd: 'licuadora',
    tipoProd: 'electrodomestico',
    marca: 'sanyo',
    codigoProd: 'li797979',
    precioXUnidad: 5000,
    minimoXCant: 5,
    minimoXBolsa: 10,
    stock: 100,
    date: new Date().toLocaleString(),
}
listaProd.addProd(producto1);

const producto2: Producto = {
    id: listaProd.generadorNumeroProId(),
    nombreProd: 'amoladora',
    tipoProd: 'herramientas',
    marca: 'blackdecker',
    codigoProd: 'amo99999',
    precioXUnidad: 15000,
    minimoXCant: 3,
    minimoXBolsa: 8,
    stock: 50,
    date: new Date().toLocaleString(),
}

listaProd.addProd(producto2);

const producto3: Producto = {
    id: listaProd.generadorNumeroProId(),
    nombreProd: 'taladro',
    tipoProd: 'herramientas',
    marca: 'skill',
    codigoProd: 'tala8888',
    precioXUnidad: 12000,
    minimoXCant: 3,
    minimoXBolsa: 10,
    stock: 50,
    date: new Date().toLocaleString(),
}

listaProd.addProd(producto3);

//*********************************************************************************** */
export {listaProd}
// listaProd.getProd();
// listaProd.buscarProd('taladro')
// listaProd.venderProd('taladro',5)
// listaProd.getProd();

