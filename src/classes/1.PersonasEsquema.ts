// *******   Definición de la estructura del objeto  *********
//Esta interfaz define la estructura que deben tener los objetos que representan tareas
export interface Persona {
    id: number
    nombre: string
    apellido: string
    dni: number
    direccion: string
    telefono: number
    email?: string
    fecha_nacim: string
    estado_civil: string
    tipoUsuario: string  // vendedor - cliente
}
