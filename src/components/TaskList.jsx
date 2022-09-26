import React, { useState } from 'react';
import TaskForm from './taskForm';
import '../stylesheets/tasklist.css';
import Tarea from './task';

/*fragmentos: cuando necesito poner una alternativa a ingresar por ejemplo un div nuevo, ya sea porque:
1- no puedo poner otro componente principal(por regla de jsx)
2- no quiero agregar un elemento que no tenga un proposito
Voy a utilizar los fragmentos, que se eliminan al crearse la estructura en html */

function TaskList() {

  const [tareas, setTareas] = useState([]);  

  const agregarTarea = tarea => {
    /*verifico si la tarea no está vacía*/ 
    if (tarea.texto.trim()) {
      /*borro los espaciones innecesarios*/ 
      tarea.texto=tarea.texto.trim();
      /*genero un arreglo con todas las tareas */  
      const tareasActualizadas = [tarea, ...tareas];
      /*establezco el estado con todas las tareas */
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map (tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <TaskForm onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          /*cada vez que se actualiza el arreglo tareas,
           el metodo map "crea" un nuevo componente cuyas propiedas son las de tarea que se pasa como parametro.
           esto es crucial para la forma en la que desarrollamos la app*/
          tareas.map((tarea) =>
            <Tarea
            /*key no se pasa como propiedad, solamente es utilizado para decirle a react el orden 
            en el que deben mostrarse cada componente*/
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada} 
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea} />
          )
        }
      </div>
    </>    
  );
}

export default TaskList;