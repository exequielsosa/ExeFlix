import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Dudas?, Preguntas? / Contactanos</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Inverti en ReadyScore</Footer.Link>
                    <Footer.Link href="#">Seguinos</Footer.Link>
                    <Footer.Link href="#">Información corporativa</Footer.Link>
                           </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Ayuda</Footer.Link>
                    <Footer.Link href="#">Trabaja con Nosotros</Footer.Link>
                    <Footer.Link href="#">Terminos de uso</Footer.Link>
                    <Footer.Link href="#">Nuestras Redes</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Estados</Footer.Link>
                    <Footer.Link href="#">Regala Gift Cards</Footer.Link>
                    <Footer.Link href="#">Privacidad de Datos</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Legales</Footer.Link>
                    <Footer.Link href="#">Compra Gift Cards</Footer.Link>
                    <Footer.Link href="#">Cookies</Footer.Link>
                    <Footer.Link href="#">Legales</Footer.Link>
                </Footer.Column>                
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>ReadyScore S.A. - Todos los derechos reservados -</Footer.Text>
        </Footer>
    );
}
