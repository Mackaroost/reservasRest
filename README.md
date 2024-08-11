Aplicación de Reserva de Restaurantes
Descripción
La Aplicación de Reserva de Restaurantes es una herramienta sencilla y eficiente para gestionar reservas en restaurantes. La aplicación está diseñada para facilitar el proceso de reserva mediante un formulario multipaso que recopila la información del usuario y muestra un resumen de la reserva generada al final.

Características Principales
Formulario de Reserva Multipaso: Un formulario dividido en varios pasos, con cada paso representado por un componente independiente. Cada paso del formulario recopila información específica sobre la reserva.
Resumen de Reserva: Al final del formulario, se presenta un resumen detallado de la reserva generada, que muestra toda la información ingresada por el usuario para su confirmación.
Tecnologías Utilizadas
React: Biblioteca de JavaScript para construir la interfaz de usuario.
TypeScript: Superset de JavaScript que añade tipos estáticos para mejorar el desarrollo y mantenimiento del código.
Tailwind CSS: Framework de CSS para diseñar una interfaz moderna y responsiva de manera eficiente.
Zustand: Biblioteca para el manejo del estado en la aplicación, facilitando la gestión de datos sin necesidad de prop drilling.
React Hook Form: Biblioteca para la gestión de formularios en React, simplificando el manejo de entradas y validaciones.
Estructura del Proyecto
src/
components/: Contiene todos los componentes de la aplicación.
FormStep1.tsx, FormStep2.tsx, FormSummary.tsx: Componentes para el formulario multipaso y el resumen de la reserva.
store/: Configuración de Zustand para el manejo del estado.
useStore.ts: Estado global y funciones para almacenar y gestionar la información de la reserva.
styles/: Archivos de estilos con Tailwind CSS.
index.css: Estilos globales aplicados a la aplicación.
App.tsx: Componente principal que integra el formulario y el resumen de la reserva.
index.tsx: Punto de entrada de la aplicación.
Manejo del Estado con Zustand
Zustand se utiliza para gestionar el estado global del formulario, permitiendo que los datos ingresados por el usuario se almacenen y se compartan entre los distintos componentes del formulario. La configuración de Zustand se encuentra en src/store/useStore.ts.

Estilo con Tailwind CSS
Tailwind CSS se emplea para aplicar estilos a la aplicación de manera modular y eficiente. Los estilos globales están definidos en src/styles/index.css, y los componentes individuales utilizan clases de Tailwind para asegurar un diseño cohesivo y adaptado a la interfaz de usuario.
