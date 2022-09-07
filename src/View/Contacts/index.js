import {
    Container,
    AreaTableContc,
    TableTools,
    TableList
} from './styles'
import { useState } from 'react';
import Period from '../../components/Period';
import InputSearch from '../../components/InputSearch';
import AreaTitle from '../../components/AreaTitle';

export default function Contacts({ width }) {
    // const [isMenu, setIsMenu] = useState(false);

    return (
        <Container width={width}>
            <AreaTitle title='Gerenciamento de contatos'/>
            <AreaTableContc>
                <TableTools>
                    <InputSearch width={33.3} height={4}/>
                    <Period />
                </TableTools>
                <TableList>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome:</th>
                                <th>Telefone:</th>
                                <th>E-mail</th>
                                <th>CPF:</th>
                                <th>Data de Criação:</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Carla Mattos </td>
                                <td>559998999999</td>
                                <td>00000000000</td>
                                <td>cliente@cliente.com</td>
                                <td>09/04/2022</td>
                                <td>Linus</td>
                            </tr>
                        </tbody>
                    </table>
                </TableList>
            </AreaTableContc>
        </Container>
    )
}