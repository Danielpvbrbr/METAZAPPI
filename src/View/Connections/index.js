import {
    Container,
    ListCard,
    AreaChat,
    AreaHeader,
    AreaBody,
    AreaHeaderChat,
    AreaBodyChat,
    AreaFooterChat
} from './styles'
import { useState } from 'react';
import { BsSearch, BsFillPersonPlusFill } from "react-icons/bs";
import CardMSG from '../../components/CardMSG';

const data = [
    {
        name: 'Gabriel de souza martins',
        newMsg: true,
        _timestamp: '10:23',
        sector: 'Comercial',
        phone: '553288927397',
        typeMsg: 'chat',
        last_message: 'oii'
    },
    {
        name: 'Daniel do nascimento',
        newMsg: true,
        _timestamp: '10:23',
        sector: 'Comercial',
        phone: '553288927397',
        typeMsg: 'chat',
        last_message: 'oii MEta'
    }
]

export default function Conections({ width }) {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <Container width={width}>
            <ListCard width={width === '80'}>
                <AreaHeader>
                    <section>
                        <BsSearch size={20} />
                        <input type='search' placeholder='Pesquisar...' />
                    </section>
                    <BsFillPersonPlusFill size={22} color='#fff' cursor='pointer' />
                </AreaHeader>
                <AreaBody>
                    {data.map((v, i) =>
                        <CardMSG key={i} data={v} qtd={5} />
                    )}
                </AreaBody>
            </ListCard>
            <AreaChat>
                <AreaHeaderChat>

                </AreaHeaderChat>

                <AreaBodyChat>

                </AreaBodyChat>

                <AreaFooterChat>
                    <input type='text' />
                </AreaFooterChat>
            </AreaChat>
        </Container>
    )
}