import {
    Container,
    AreaInfo
} from './styles'

import perfil from '../../Img/4712139.png';

export default function CardMSG({ key, data }) {

    return (
        <Container key={key}>
            <img src={perfil} alt='Perfil' />
            <AreaInfo>
                <div>
                    <h3>{data.name}</h3>
                    <h4>{data.last_message}</h4>
                </div>
                <section>
                    <h4>{data.sector}</h4>
                    <p>{data._timestamp}</p>
                    <h3>2</h3>
                </section>
            </AreaInfo>
        </Container>
    )
}