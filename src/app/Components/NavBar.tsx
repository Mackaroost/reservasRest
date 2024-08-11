"use client"
import { useStore } from "@/store/useStore"
import { FaUserCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoCalendarNumberSharp } from "react-icons/io5";

const NavBar = () => {
  const { nameUser, count, dia, hora } = useStore();
  return (
    <nav className='w-full border-b-8 border-black'> 
      <p className='text-2xl text-center py-4'>
        Reserva Tu Cita
      </p>
      {
        (nameUser || count || dia || hora) && (
          <div className="flex flex-col items-center justify-center md:flex md:flex-row md:items-center md:justify-around p-2 container mx-auto">
            {nameUser && (
              <p className="flex gap-x-2 items-center justify-center p-2">
                <FaUserCircle />
                {nameUser}
              </p>
            )}
            {count > 1 && (
              <p className="flex gap-x-2 items-center justify-center p-2">
                <FaUsers />
                {count} comensales
              </p>
            )}
            {(dia || hora) && (
              <p className="flex gap-x-2 items-center justify-center p-2">
                <IoCalendarNumberSharp />
                {dia} {hora && <span>{hora}</span>}
              </p>
            )}
          </div>
        )
      }
    </nav>
  )
}

export default NavBar;
