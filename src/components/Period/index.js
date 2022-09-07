import {
    Container,
} from './styles'
import { useState } from 'react';


export default function CardDash({  color }) {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <Container>
            <input type='date' />
            <p>a</p>
            <input type='date' />
        </Container>

    )
}