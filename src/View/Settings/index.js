import { useState } from 'react';
import {
    Container,
    AreaMult,
    AreaMenu,
    AreaInfo,
    CampoMenu
} from './styles';

import AreaTitle from '../../components/AreaTitle';
import { menu } from './menu';
import SettingsCf from './view/SettingsCf';
import QrCode from './view/QrCode';
import Interaction from './view/Interaction';
import Message from './view/Message';
import Break from './view/Break';

export default function Settings({ width }) {
    const [route, setRoute] = useState('Configurações');

    const Route = () => {
        switch (route) {
            case 'Configurações':
                return <SettingsCf />
            case 'QRcode':
                return <QrCode />
            case 'Interação':
                return <Interaction />
            case 'Mensagem':
                return <Message />
            case 'Pausa':
                return <Break />
            default:
                return <SettingsCf />
        };
    };
    return (
        <Container width={width}>
            <AreaTitle title='Configurações' />
            <AreaMult>
                <AreaMenu>
                    {menu.map((v, i) =>
                        <CampoMenu
                            key={i}
                            onClick={() => setRoute(v.title)}
                            IsColor={route === v.title}
                        >
                            <p>{v.title}</p>
                            <div style={{ border: route === v.title && '1px solid #23FC00' }} />
                        </CampoMenu>
                    )}
                </AreaMenu>
                <AreaInfo>
                    {
                        Route()
                    }
                </AreaInfo>
            </AreaMult>
        </Container>
    )
}