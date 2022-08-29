import {
    Container,
    LoginLateral,
    AreaLogo,
    InputLabel,
    LabelArea,
    Area
} from './styles'
import Robo from '../../Img/robo.png'
import { useState } from 'react'

export default function Authentication() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    return (
        <Container>
            <LoginLateral>
                <AreaLogo>
                    <img src={Robo} alt='Logo' />
                </AreaLogo>

                <InputLabel>
                    <section>
                        <LabelArea>
                            <label>Usuario:</label>
                            <input
                                type='text'
                                value={user}
                                onChange={e => setUser(e.target.value)}
                                placeholder='Digite seu usuário'
                            />
                        </LabelArea>

                        <LabelArea>
                            <label>Senha:</label>
                            <input
                                type='password'
                                value={pass}
                                onChange={e => setPass(e.target.value)}
                                placeholder='Digite sua senha'
                            />
                        </LabelArea>
                    </section>

                    <button onClick={() => alert(user)}>
                        Acessar
                    </button>
                </InputLabel>
            </LoginLateral>
            <Area>
                <img src={Robo} alt='Logo' />
            </Area>
        </Container>
    )
}