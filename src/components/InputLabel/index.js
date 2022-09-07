import {
    Container,
} from './styles'
import { useState } from 'react';
import {
    BsSearch,
} from "react-icons/bs";

export default function InputLabel({ title, width, height,radius }) {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <Container width={width} height={height} radius={radius}>
            <label>{title}</label>
            <input type='search' placeholder='Usuario' />
        </Container>
    )
}