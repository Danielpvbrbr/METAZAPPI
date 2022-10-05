import {
    Container,
} from './styles'
// import { useState } from 'react';
import { BsPlusCircleFill, BsArrowReturnRight } from "react-icons/bs";

export default function Option({ key, onClick, remove, name, defaultValue, onChange,desabled }) {
    return (
        <Container>
            <BsArrowReturnRight
                size={30}
                color='#fff'
            />

            <section>
                <select name={name} onChange={onChange} defaultValue={defaultValue}>
                    <option value="DEFAULT" disabled>Ação</option>
                    <option value="incoming">Entrante</option>
                    <option value="respondent" >Responder</option>
                    <option value="toask" >Perguntar</option>
                    <option value="option">Opções</option>
                </select>

                <BsPlusCircleFill
                    size={20}
                    color='#23FC00' 
                    cursor='pointer'
                    onClick={onClick}
                />
            </section>
        </Container>
    )
}