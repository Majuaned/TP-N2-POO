//Se importa la estructura (modelo) que tendrá la lista de tareas
import { Persona } from './1.PersonasEsquema'

// ******  CLASE PERSONAS  ******
export class Personas { 

  private arrPers: Persona[] = [] //Array de objetos vacío
//******************************************************************** */
// Definición del método generadorNumeroProId, el cual busca el id mayor de la lista existente (todos) y a este id le suma 1.
  generadorNumeroProId () {
    const ids = this.arrPers.map(e => e.id)

    //Cuando el id es cero la condición es falsa, como se niega se hace verdadera y se ingresa al bloque condicional. 
    if (!ids.length) {
      ids.push(0)
    }
    return Math.max(...ids) + 1
    //spread operator
    //se retorna un número, que es mayor (en una unidad) que el id con mayor numeración.
  }

//Este método AGREGA!!!! una persona...
  addPers (pers: Persona) {
    this.arrPers.push(pers)
  }

  // MUESTRA TODAS LAS PERSONAS......
  getPers() {
    return console.log(this.arrPers)
  }

  // FILTRA LOS USUARIOS ......
  getUsuarios(tipoUsuario: string){
    this.arrPers = this.arrPers.filter(e => e.tipoUsuario == tipoUsuario)
    lista.getPers()
  }

  // BUSCAR PERSONAS X APELLIDO O NOMBRE .....
  getBuscar(apellido: string){
    this.arrPers = this.arrPers.filter(e =>
      (e.apellido.toLowerCase() == apellido.toLowerCase())
      )
    lista.getPers();
  }

  // ELIMINAR PERSONAS .....
  deletePers(id: number) {
    const indice = this.arrPers.findIndex(e => e.id === id);
    if (indice !== -1) {
      this.arrPers.splice(indice, 1);
    }
    console.log(this.arrPers);
  }
}

const lista = new Personas()
//  *************************************************************************************  //
// Instanciación de ELEMENTOS DE LA LISTA ...
const persona1: Persona = {
  id: lista.generadorNumeroProId(),
  nombre: 'juan',
  apellido: 'maldo',
  dni: 454555,
  direccion: 'campo4555',
  telefono: 456877,
  email: 'ju@gc.com',
  fecha_nacim: '06-06-55',
  estado_civil: 'casado',
  tipoUsuario: 'vendedor'
}

lista.addPers(persona1);

const persona2: Persona = {
  id: lista.generadorNumeroProId(),
  nombre: 'agustin',
  apellido: 'sala',
  dni: 777777,
  direccion: 'yunka4555',
  telefono: 4574855,
  email: 'ag@gc.com',
  fecha_nacim: '06-06-88',
  estado_civil: 'soltero',
  tipoUsuario: 'vendedor'
}

lista.addPers(persona2);

const persona3: Persona = {
  id: lista.generadorNumeroProId(),
  nombre: 'martin',
  apellido: 'vela',
  dni: 7788877,
  direccion: 'liborsi4555',
  telefono:889998855,
  email: 'ma@gc.com',
  fecha_nacim: '06-06-80',
  estado_civil: 'soltero',
  tipoUsuario: 'cliente'
}

lista.addPers(persona3);

const persona4: Persona = {
  id: lista.generadorNumeroProId(),
  nombre: 'angel',
  apellido: 'vela',
  dni: 700000000,
  direccion: 'libors77777',
  telefono:8555555,
  email: 'ma@gc.com',
  fecha_nacim: '06-06-80',
  estado_civil: 'soltero',
  tipoUsuario: 'cliente'
}

lista.addPers(persona4);

//**********************************    F I N    ****************************************** */

// lista.getPers()
// lista.getUsuarios('cliente')
// lista.getBuscar('MALDO')
// lista.deletePers(1)

lista.getPers()



