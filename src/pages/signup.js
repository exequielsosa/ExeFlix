import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form, Header } from "../components";
import * as ROUTES from "../constants/routes";
export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAdress === "";

  const handleSignUp = (event) => {
    event.preventDefault();

    // Firebase!!!!!!!!

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAdress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName("");
        setEmailAdress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Registro</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="Nombre de Usuario"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Correo Electronico"
              value={emailAdress}
              onChange={({ target }) => setEmailAdress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Quiero Registrarme!
            </Form.Submit>
            <Form.Text>
              Ya estas registrado?{" "}
              <Form.Link to="/signin">Ingresa Ahora!.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              Este sitio esta protegido por Goole reCaptcha para asegurarnos de
              que no eres un robot. Leer mas.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
