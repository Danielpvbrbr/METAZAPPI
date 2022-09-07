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
import Util from '../../Img/util.png';
import User from '../../Img/user.png';

import {
    BsX,
    BsPencilSquare
} from "react-icons/bs";
export default function Users({ width }) {
    // const [isMenu, setIsMenu] = useState(false);

    return (
        <Container width={width}>
            <AreaTitle title='Gerenciamento de  usuários' />
            <AreaMult>
                <AreaForm>
                    <img src={Util} alt='img-utilizador' />
                    <Form>
                        <InputLabel
                            title='Nome:'
                            width={30}
                            height={60}
                            radius={5}
                        />
                        <InputLabel
                            title='Login:'
                            width={30}
                            height={60}
                            radius={5}
                        />
                        <InputLabel
                            title='Senha'
                            width={30}
                            height={60}
                            radius={5}
                        />
                        <InputLabel
                            title='Repita a Senha:'
                            width={30}
                            height={60}
                            radius={5}
                        />
                        
                        <AreaInputSct>
                            <select>
                                <option value="valor1">Valor 1</option>
                                <option value="valor2" selected>Valor 2</option>
                                <option value="valor3">Valor 3</option>
                            </select>
                            <AreaCardSct>
                                <section>
                                    <p>Suporte</p>
                                    <BsX color='#ff0000' size={25} cursor='pointer' />
                                </section>
                            </AreaCardSct>
                        </AreaInputSct>
                    </Form>
                </AreaForm>
                <AreaList>
                    <AreaHeader>
                        <InputSearch  width={33.3} height={4}/>
                    </AreaHeader>
                    <List>
                        <li>
                            <img src={User} alt='user' />
                            <div>
                                <h4>Sabrina alemcar de sousa</h4>
                                <section>
                                    <p>Comercial</p>
                                    <BsX color='#ff0000' size={25} cursor='pointer' />
                                </section>
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