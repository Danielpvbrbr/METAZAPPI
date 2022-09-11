import {
    Container,
} from './styles'
import { useState } from 'react';
// import {
//     BsSearch,
// } from "react-icons/bs";

export default function InputLabel({ title, width, height, radius, type }) {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <Container width={width} height={height} radius={radius}>
            <label>{title}</label>
            <input type={type} placeholder='Usuario' />
        </Container>
    )
}