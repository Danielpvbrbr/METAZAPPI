import {
    Container,
} from './styles'
import { useState } from 'react';
// import {
//     BsSearch,
// } from "react-icons/bs";

export default function InputLabel({
    title,
    width,
    height,
    radius,
    type,
    placeholder,
    onChange,
    value,
    id,
    name
}) {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <Container width={width} height={height} radius={radius}>
            <label>{title}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                id={id}
                name={name}
            />
        </Container>
    )
}