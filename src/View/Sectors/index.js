import {
    Container,
    AreaMult,
    AreaForm,
    AreaList,
    Form,
    AreaInputSct,
    AreaCardSct,
    AreaHeader,
    List

} from './styles';

import { useState } from 'react';
import InputSearch from '../../components/InputSearch';
import AreaTitle from '../../components/AreaTitle';
import InputLabel from '../../components/InputLabel';
import LineDate from '../../components/LineDate';

import {
    BsX,
    BsPencilSquare
} from "react-icons/bs";
export default function Sectors({ width }) {
    // const [isMenu, setIsMenu] = useState(false);

    return (
        <Container width={width}>
            <AreaTitle title='Gerenciamento de  Setores' />
            <AreaMult>
                <AreaForm>
                    <Form>
                        <InputLabel
                            title='Sector:'
                            type={'text'}
                            width={30}
                            height={60}
                            radius={5}
                        />
                        <InputLabel
                            title='Dias da semana:'
                            type={'select'}
                            width={30}
                            height={60}
                            radius={5}
                        />
                        <InputLabel
                            title='Horas:'
                            type={'select'}
                            width={30}
                            height={60}
                            radius={5}
                        />
                        <AreaInputSct>
                            <select>
                                <option value="Segunda" selected>Segunda</option>
                                <option value="Terça">Terça</option>
                                <option value="Quarta">Quarta</option>
                                <option value="Quinta">Quinta</option>
                                <option value="Sexta">sexta</option>
                                <option value="Sábado">Sábado</option>
                                <option value="Domingo">Domingo</option>
                            </select>
                            <AreaCardSct>
                                <LineDate />
                            </AreaCardSct>
                        </AreaInputSct>
                    </Form>
                </AreaForm>
                <AreaList>
                    <AreaHeader>
                        <InputSearch width={33.3} height={4} />
                    </AreaHeader>
                    <List>
                        <li>
                            <div>
                                <h4>Comercial</h4>
                            </div>
                            <section>
                                <BsPencilSquare color='#fff' size={18} cursor='pointer' />
                                <BsX color='#ff0000' size={25} cursor='pointer' />
                            </section>
                        </li>
                    </List>
                </AreaList>
            </AreaMult>
        </Container>
    )
}