import {
    Container,
} from './styles'
import { useState } from 'react';

export default function Users({ width }) {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <Container width={width}>
            Users
        </Container>
    )
}