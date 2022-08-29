import {
    Container,
} from './styles'
import { useState } from 'react';

export default function Sectors({ width }) {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <Container width={width}>
            Sectors
        </Container>
    )
}