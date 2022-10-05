import {
    Container,
} from './styles'
import { useState } from 'react';
import { BsArrowDown, BsArrowReturnRight, BsArrowReturnLeft } from "react-icons/bs";

export default function Option({ key, onClick, Selected, remove, name, defaultValue, onChange }) {
    const [isSelected, setIsSelected] = useState(false);

    const isVery = (e) => {
        Selected(e)
        setIsSelected(e.length > 1);
        onChange(e)
    };

    return (
        <Container>
            <section>
                <BsArrowReturnRight
                    size={30}
                    cursor='pointer'
                    onClick={() => remove(key)}
                />
        
                <select name={name} onChange={onChange} defaultValue={defaultValue}>
                    <option value="DEFAULT" disabled>Ação</option>
                    <option value="incoming">Entrante</option>
                    <option value="respondent" >Responder</option>
                    <option value="toask" >Perguntar</option>
                    <option value="option">Opções</option>
                </select>
                {/* <BsArrowReturnLeft
                    size={30}
                    cursor='pointer'
                    onClick={() => remove(key)}
                /> */}
            </section>
        </Container>
    )
}