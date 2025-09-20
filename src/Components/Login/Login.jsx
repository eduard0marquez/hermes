import { Image } from "react-bootstrap";
import "./Login.css";
import { authLogin } from "../../helpers/ApliLogin";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  /*Estructura de React Hook*/
  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  const Ingresar = async (data) => {
    //Se ejecuta y se pasan como valor los datos del form
    const datos = authLogin(data).then((datos) => {
      if (datos.msg != "Login Ok") {
        Swal.fire({
          icon: "error",
          title: `¡Oops! ${datos.msg}`,
          text: " favor de verificar.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: `¡ ${`Bienvenido de nuevo ${datos.usuario.nombre}`}!`,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        localStorage.setItem("user", JSON.stringify(data.email));
        navigate("/", { replace: true });
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(Ingresar)}>
        <Image
          className="mb-4 log"
          src="https://res.cloudinary.com/dppgbrtfk/image/upload/v1755556324/hermes_logo1_aiglcl.png"
          alt=""
          width="72"
          height="57"
        />

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            {...register("email")}
          />

          <label>Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            {...register("password")}
          />

          <label>Constraseña</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">
          Iniciar Sesion
        </button>
        <p className="mt-5 mb-3 text-body-secondary">&copy; Balder Code 2025</p>
      </form>
    </div>
  );
}

export default Login;
