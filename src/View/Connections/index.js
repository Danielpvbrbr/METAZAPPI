import {
    Container,
    ListCard,
    AreaChat,
    AreaHeader,
    AreaBody,
    AreaHeaderChat,
    AreaPerfilName,
    AreaFerram,
    AreaBodyChat,
    AreaFooterChat,
    AreaMSG,
} from './styles'
import { useState } from 'react';
import {
    BsFillPersonPlusFill,
    BsFillEmojiSmileFill,
    BsFillMicFill,
    BsFillLightningFill,
    BsThreeDotsVertical,
    BsCheckCircleFill,
    BsArrowLeftRight
} from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import CardMSG from '../../components/CardMSG';
import Bg from '../../Img/bg4.png';
import robo from '../../Img/perfilWt.png';
import InputSearch from '../../components/InputSearch';

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
                    <InputSearch width={17} height={3.5}/>
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
                    <AreaPerfilName>
                        <img src={robo} alt='perfil' />
                        <h4>+9999999999999</h4>
                    </AreaPerfilName>
                    <AreaFerram>
                        <p>202208180599</p>
                        <BsArrowLeftRight size={23} color='#C4C4C4' cursor='pointer' />
                        <BsCheckCircleFill size={24} color='#C4C4C4' cursor='pointer' />
                        <BsThreeDotsVertical size={24} color='#C4C4C4' cursor='pointer' />
                    </AreaFerram>
                </AreaHeaderChat>

                <AreaBodyChat bg={Bg}>
                    <AreaMSG fromMe={false} color='#4A4D4E'>
                        <div>
                            <h4>If you use this site regularly and would li
                                ke to help keep the site on the Internet, please consider do
                                nating a small sum to help pay for the hosting and ban
                                dwidth bill. There is no minimum donation, any
                                sum is appreciated - click here to donate using PayPal. Thank you</h4>
                            <p>10:23</p>
                        </div>
                    </AreaMSG>
                    <AreaMSG fromMe={true} color='#39BFF5'>
                        <div>
                            <h4>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum ha
                                s been the industry's standard dummy text ever since sed in the
                                1960s with the release of Letraset sheets containing Lorem Ipsum pass
                                ages, and more recently with desktop publishing software like Aldus PageMaker i
                                ncluding versions of Lorem Ipsum.</h4>
                            <p>10:23</p>
                        </div>
                    </AreaMSG>
                    <AreaMSG fromMe={false} color='#4A4D4E'>
                        <div>
                            <h4>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum ha
                                s been the industry's standard dummy text ever since sed in the
                                1960s with the release of Letraset sheets containing Lorem Ipsum pass
                                ages, and more recently with desktop publishing software like Aldus PageMaker i
                                ncluding versions of Lorem Ipsum.</h4>
                            <p>10:23</p>
                        </div>
                    </AreaMSG>
                </AreaBodyChat>

                <AreaFooterChat>
                    <BsFillEmojiSmileFill size={25} color='#C4C4C4' />
                    <BsFillLightningFill size={25} color='#C4C4C4' />
                    <ImAttachment size={25} color='#C4C4C4' />
                    <input type='text' />
                    <BsFillMicFill size={25} color='#C4C4C4' />
                </AreaFooterChat>
            </AreaChat>
        </Container>
    )
}