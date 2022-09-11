import {
    Container,
} from './styles'
import { useState } from 'react';
import { BsArrowDown, BsArrowReturnRight, BsArrowReturnLeft } from "react-icons/bs";

export default function Option({ key, onClick, Selected, remove }) {
    const [isSelected, setIsSelected] = useState(false);


    const isVery = (e) => {
        Selected(e)
        setIsSelected(e.length > 1);
    };

    return (
        <Container>
            <section>
                <BsArrowReturnRight
                    size={30}
                    cursor='pointer'
                    onClick={() => remove(key)}
                />
                <select name="select" onChange={e => isVery(e.target.value)} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>Ação</option>
                    <option value="incoming">Entrante</option>
                    <option value="respondent" >Responder</option>
                    <option value="toask" >Perguntar</option>
                    <option value="option">Opções</option>
                </select>
                <BsArrowReturnLeft
                    size={30}
                    cursor='pointer'
                    onClick={() => remove(key)}
                />
            </section>
            {isSelected &&
                <BsArrowDown
                    size={30}
                    color='#fff'
                    cursor='pointer'
                    onClick={onClick}
                />
            }
        </Container>
    )
}