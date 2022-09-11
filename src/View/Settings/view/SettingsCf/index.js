import { useState } from 'react';
import {
    Container,
    AreaOption
} from './styles';
import Switch from '@mui/material/Switch';


export default function SettingsCf({ }) {
    const [sons, setSons] = useState(false);
    const [notf, setNotf] = useState(false);
    const [emotic, seteEmotic] = useState(false);
    const [isDark, setIsDark] = useState(false);
    // const [isMenu, setIsMenu] = useState(false);

    return (
        <Container>
            <AreaOption>
                <section>
                    <Switch
                        checked={notf}
                        onChange={e => setNotf(e.target.checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <p>Notificação descktop</p>
                </section>
                <section>
                    <Switch
                        checked={emotic}
                        onChange={e => seteEmotic(e.target.checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <p>Mostrar emoticons</p>
                </section>
                <section>
                    <Switch
                        checked={sons}
                        onChange={e => setSons(e.target.checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <p>Sons de Notificação </p>
                </section>
                <section>
                    <Switch
                        checked={isDark}
                        onChange={e => setIsDark(e.target.checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <p>Modo escuro automático</p>
                </section>
            </AreaOption>
        </Container>
    )
}