import {
    Container,
} from './styles'
import { useState } from 'react';
import {
    BsX,
} from "react-icons/bs";

export default function LineDate({ title, width, height, radius }) {
    return (
        <Container width={width} height={height} radius={radius}>
            <p>Segunda de 08:00 as 18:00</p>
            <BsX color='#ff0000' size={25} cursor='pointer' />
        </Container>
    )
}