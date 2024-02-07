"use client";
import React from 'react';
import { analizar } from './module/generator.js';

const homePage = () => {
  function iniciar(e){
    e.preventDefault();
    analizar("{1}");
  }

  return (
    <div>
      HomePage
     <form onSubmit={iniciar}>
      <button type ="submit">Click</button>
     </form>
    </div>
  );
};

export default homePage;

// ` para copiar y pegar