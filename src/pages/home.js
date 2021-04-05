import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/header";
import { Feature, OptForm } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Segui y administra los resultados de tus Torneos al instante.
          </Feature.Title>
          <Feature.SubTitle>
            En cualquier lugar y a toda hora.  Tu pasion sin horarios.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Correo Electronico" />
            <OptForm.Button>Registrate</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              ¡Registrate ahora!, es gratis.               
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
