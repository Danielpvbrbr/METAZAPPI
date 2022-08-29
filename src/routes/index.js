import React, { useContext } from "react";
// import Dashboard from "../View/Dashboard";
import Dashboard from "../View/Dashboard";
import Connections from "../View/Connections";
import Contacts from "../View/Contacts";
import Users from "../View/Users";
import Sectors from "../View/Sectors";
import Settings from "../View/Settings";
import { AuthContext } from "../contexts/auth";
import { Container, Area } from "./styles";
import Menu from "../components/Menu";

export default function Routes() {
    const { route, setRoute, isMenu, setIsMenu } = useContext(AuthContext);

    const Route = () => {
        // eslint-disable-next-line default-case
        switch (route) {
            case 'Dashboard':
                return <Dashboard isMenu={isMenu} AuthContext={AuthContext} width={isMenu ? '80' : '93'} />
            case 'Conexões':
                return <Connections isMenu={isMenu} AuthContext={AuthContext} width={isMenu ? '80' : '93'} />
            case 'Contatos':
                return <Contacts isMenu={isMenu} AuthContext={AuthContext} width={isMenu ? '80' : '93'} />
            case 'Usuários':
                return <Users isMenu={isMenu} AuthContext={AuthContext} width={isMenu ? '80' : '93'} />
            case 'Setores':
                return <Sectors isMenu={isMenu} AuthContext={AuthContext} width={isMenu ? '80' : '93'} />
            case 'Configurações':
                return <Settings isMenu={isMenu} AuthContext={AuthContext} width={isMenu ? '80' : '93'} />
            case 'Deslogar':
                return alert('Deslogado')
        }
    };

    return (
        <Container>
            <Menu
                isMenu={isMenu}
                setIsMenu={setIsMenu}
                route={route}
                setRoute={setRoute}
            />
            <Area>
                <Route />
            </Area>
        </Container>
    )
}