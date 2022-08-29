import {
    Container,
} from './styles'
import { useState } from 'react';

export default function Contacts({ width }) {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <Container width={width}>
            Contacts
        </Container>
    )
}