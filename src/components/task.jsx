import React from 'react';
import '../stylesheets/task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

/*Aqui uso por primera vez la libreria react-icons con el elemento AiOutlineCloseCircle*/ 
function Tarea ({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className= 'tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className= 'tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className= 'tarea-icono'/>
      </div>
    </div>
  )
}

export default Tarea;