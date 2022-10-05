import {
    Container,
} from './styles'
import { useState } from 'react';
import InputMultArray from '../InputMultArray';
import InputMenuOption from '../InputMenuOption';
import InputLabel from '../InputLabel';

export default function TypeInput({
    selected,
    value,
    onChange,
    id,
    name,
    funcOn
}) {
    const Run = () => {
        switch (selected) {
            case 'incoming':
                return <InputMultArray
                    name={name}
                    funcOn={funcOn}
                    id={`resp ${id}`}
                />;
            case 'toask':
                return <InputMenuOption
                    title={`Campo de opções: ${id}`}
                    placeholder={`Digite as opçoes!`}
                    value={value}
                    id={`resp ${id}`}
                    name={name}
                    funcOn={funcOn}
                />;
            case 'option':
                return 
            case 'respondent':
                return <InputLabel
                    title={`Responda: ${id}`}
                    placeholder={`Digite a resposta!`}
                    value={value}
                    id={`resp ${id}`}
                    name={name}
                    onChange={onChange}
                    type='text'
                    width={38.8}
                    height={60}
                    radius={5}
                />;

            default:
                console.log(selected);
        };
    }
    return (
        <Container>
            {
                <InputMenuOption
                    title={`Campo de opções: ${id}`}
                    placeholder={`Digite as opçoes!`}
                    value={value}
                    id={`resp ${id}`}
                    name='info'
                    funcOn={funcOn}
                />
            }
        </Container>
    )
}