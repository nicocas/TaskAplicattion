import React from "react";
import { useState } from "react";
import '../stylesheets/taskform.css';
import { v4 as uuidv4 } from 'uuid';

/* paquete uuid: crea identificadores unicos (id) */

function TaskForm(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e =>{
    setInput(e.target.value);
    /* target.value es un metodo que permite acceder al valor de un objeto en el cual hubo un evento*/ 
  }

  const manejarEnvio = e => {

    /*preventDefault hace que la pagina no se vuelva a cargar en cada envío del formulario*/ 
    e.preventDefault();
    console.log('enviando formulario');

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    }

    props.onSubmit(tareaNueva);
  }

  return (
    <form 
      onSubmit={manejarEnvio}
      className='tarea-formulario'>
      <input
      className='tarea-input'
      type='text'
      placeholder='Escribe una tarea'
      name='texto'
      onChange={manejarCambio}
      />
      <button className='boton-tarea'>
        Agregar Tarea
      </button>
    </form>  
  );
}

export default TaskForm;