import React from "react";
import LoginImg from "../assets/login.jpg";

export default function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img src={LoginImg} alt="" className="w-full h-full object-cover"/>
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4 rounded-lg">
            <h2 className="text-4xl font-bold text-center py-6">Bienvenido</h2>
            <div className="flex flex-col py-2">
                <label>Usuario:</label>
                <input className="border p-2 mt-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300" type="text" />
            </div>
            <div className="flex flex-col py-2">
                <label>Contraseña:</label>
                <input className="border p-2 mt-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300" type="text" />
            </div>
            <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white uppercase rounded-md">Iniciar Sesión</button>
            <div className="flex justify-between">
                <p className="flex items-center"><input type="checkbox" className="mr-2"/>Recordar</p>
                <p className="cursor-pointer">Crear Cuenta</p>
            </div>
        </form>
      </div>
    </div>
  );
}
