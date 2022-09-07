import {
    Container,
} from './styles'
import { useState } from 'react';
import {
    BsSearch,
} from "react-icons/bs";

export default function InputSearch({ width, height }) {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <Container width={width} height={height}>
            <BsSearch size={20} />
            <input type='search' placeholder='Pesquisar...' />
        </Container>

    )
}