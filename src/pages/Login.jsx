import { NavBar } from "../components";
import { NavLink } from "react-router-dom";
// import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import { InputEmail, InputPass, Button } from "../components";
import "../assets/login.css";

export const Login = () => {
  // const responseFacebook = () => {};
  // const responseGoogle = () => {};

  return (
    <>
      <NavBar />
      <main className="ctn-main-login h-100 d-flex  flex-column align-items-center justify-content-center">
        <section className="main-login">
          <form className="w-75">
            <InputEmail mail="Mail" />
            <InputPass password="Contraseña" />
            <Button text="Ingresar" />

            <div className="d-flex">
              {/* <div className="m-1">
                <GoogleLogin
                  clientId="638343180841-ibmdoc1jr0o6i77aooppkq392541lde6.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div> */}
              {/* <div className="m-1">
                <FacebookLogin
                  appId="1627158034427307"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  textButton="Login"
                  icon="fa-facebook"
                  cssClass="btn-face"
                />
              </div> */}
            </div>
            <p className="mt-4 text-light">
              No tenes cuenta ?{" "}
              <NavLink className="text-light" to="/signup">
                Registrate
              </NavLink>
            </p>
          </form>
        </section>
      </main>
    </>
  );
}
export default Login
