import {
    Container,
    PerfilArea,
    List,
    ListOp
} from './styles'
import { useState } from 'react';
import avatar from '../../Img/4712139.png';
import {
    BsChevronDoubleLeft,
    BsChevronDoubleRight,
    BsGrid1X2,
    BsJournalText,
    BsPeopleFill,
    BsFillDiagram3Fill,
    BsGearFill,
    BsBoxArrowRight,
    BsFillBellFill,
    BsFillPauseFill
} from "react-icons/bs";
import { BiConversation } from "react-icons/bi";
import LineMenu from '../LineMenu';


export default function Menu({ route, isMenu, setIsMenu, setRoute }) {

    return (
        <Container isMenu={isMenu}>
            <PerfilArea isMenu={isMenu}>
                {isMenu &&
                    <div>
                        <img src={avatar} alt='perfil' />

                        <section>
                            <h1>Daniel nascimento</h1>
                            <p>Administrador</p>
                        </section>
                    </div>
                }

                {isMenu ?
                    <BsChevronDoubleLeft
                        color='#fff'
                        size={30}
                        cursor='pointer'
                        onClick={() => setIsMenu(false)}

                    />
                    :
                    <BsChevronDoubleRight
                        color='#fff'
                        size={30}
                        cursor='pointer'
                        onClick={() => setIsMenu(true)}
                    />
                }
            </PerfilArea>
            <List isMenu={isMenu}>
                <LineMenu
                    isMenu={isMenu}
                    title='Dashboard'
                    Icon={BsGrid1X2}
                    size={32}
                    color={route === 'Dashboard' ? '#6AD4FF' : '#D3D3D3'}
                    onClick={() => setRoute('Dashboard')}
                />
                <LineMenu
                    isMenu={isMenu}
                    title='Conexões'
                    Icon={BiConversation}
                    size={32}
                    color={route === 'Conexões' ? '#6AD4FF' : '#D3D3D3'}
                    onClick={() => setRoute('Conexões')}

                />
                <LineMenu
                    isMenu={isMenu}
                    title='Contatos'
                    Icon={BsJournalText}
                    size={32}
                    color={route === 'Contatos' ? '#6AD4FF' : '#D3D3D3'}
                    onClick={() => setRoute('Contatos')}

                />
                <LineMenu
                    isMenu={isMenu}
                    title='Usuários'
                    Icon={BsPeopleFill}
                    size={32}
                    color={route === 'Usuários' ? '#6AD4FF' : '#D3D3D3'}
                    onClick={() => setRoute('Usuários')}
                />
                <LineMenu
                    isMenu={isMenu}
                    title='Setores'
                    Icon={BsFillDiagram3Fill}
                    size={32}
                    color={route === 'Setores' ? '#6AD4FF' : '#D3D3D3'}
                    onClick={() => setRoute('Setores')}
                />
                <LineMenu
                    isMenu={isMenu}
                    title='Configurações'
                    Icon={BsGearFill}
                    size={32}
                    color={route === 'Configurações' ? '#6AD4FF' : '#D3D3D3'}
                    onClick={() => setRoute('Configurações')}
                />
            </List>

            <ListOp isMenu={isMenu}>
                <LineMenu
                    isMenu={isMenu}
                    title=''
                    Icon={BsFillPauseFill}
                    size={35}
                    color={true ? '#6AD4FF' : '#D3D3D3'}
                    onClick={() => alert('pausado')}
                />
                <LineMenu
                    isMenu={isMenu}
                    title=''
                    Icon={BsFillBellFill}
                    size={32}
                    color='#FFC107'
                    onClick={() => alert('notfy')}
                />
                <LineMenu
                    isMenu={isMenu}
                    title='Deslogar'
                    Icon={BsBoxArrowRight}
                    size={32}
                    color='#D3D3D3'
                    onClick={() => setRoute('Deslogar')}
                />
            </ListOp>
        </Container>
    )
}