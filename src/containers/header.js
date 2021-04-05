import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo_large.png';

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} ALT="Netflix" src={logo} />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Ingresar</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>

    );
}