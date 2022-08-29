import {
    Container,
    AreaText
} from './styles'
import { useState } from 'react';


export default function CardDash({ Icon, title, value, color }) {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <Container color={color}>
            <section>
                <Icon color='#fff' size={50} />
            </section>
            <AreaText>
                <h1>{title}</h1>
                <h2>{value}</h2>
            </AreaText>
        </Container>

    )
}