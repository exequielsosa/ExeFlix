import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAdress, setEmailAdress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAdress === "";
  const handleSignIn = (event) => {
    event.preventDefault();

    // Firebase!!!!
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAdress, password)
      .then(() => {
        // push to the browse page
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAdress("");
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Ingresa</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Correo Electronico"
              value={emailAdress}
              onChange={({ target }) => setEmailAdress(target.value)}
            />
            <Form.Input
              placeholder="Contraseña"
              type="password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Aceptar
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Nuevo en ReadyScore? <Form.Link to="/signup">Registrate!</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            Este sitio esta protegido por Goole reCaptcha para asegurarnos de
            que no eres un robot. Leer mas.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
