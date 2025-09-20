import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("user");
    Swal.fire({
      icon: "success",
      title: `¡ ${`La sesión se cerro correctamente`}!`,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    navigate("/login", { replace: true });
  };
  return (
    <div>
      
      <NavLink onClick={Logout}>Cerrar Sesion</NavLink>
    </div>
  );
}

export default Menu;
