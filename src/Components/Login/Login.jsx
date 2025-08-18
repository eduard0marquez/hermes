
import { Image } from 'react-bootstrap'
import "./Login.css";

function Login() {
  return (
    <div>
      <form>
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
          />

          <label for="floatingInput">Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />

          <label for="floatingPassword">Constraseña</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">
          Iniciar Sesion
        </button>
        <p className="mt-5 mb-3 text-body-secondary">&copy; Balder Code 2025</p>
      </form>
    </div>
  );
}

export default Login
