import { useState } from 'react';
import {
    Container,
    Controller,
} from './styles';
import InputMultArray from '../../../../components/InputMultArray';
import InputMenuOption from '../../../../components/InputMenuOption';
import InputLabel from '../../../../components/InputLabel';
import Option from '../../../../components/Option';


export default function Interaction({ }) {
    const [input, setInput] = useState([]);
    const [selected, setSelected] = useState();

    const inputCreate = () => {
        switch (selected) {
            case 'incoming':
                return setInput([...input, <InputMultArray />]);
            case 'toask':
                return setInput([...input, <InputMenuOption />]);
            case 'option':
                return setInput([...input, <InputMenuOption />]);
            case 'respondent':
                return setInput([...input, <InputLabel
                    title='Responda:'
                    type='text'
                    width={34.3}
                    height={60}
                    radius={5}
                />]);
            default:
                console.log(selected);
        };
    };

    function removOPCicle(pos) {
        setInput([...input.filter((_, i) => i !== pos)]);
    };

    return (
        <Container>
            <Controller>
                <InputMultArray />
                <Option
                    onClick={() => inputCreate()}
                    Selected={setSelected}
                />
                {input.map((v, i) =>
                    <>
                        {v}
                        <Option
                            onClick={() => inputCreate()}
                            Selected={setSelected}
                            key={i}
                            remove={() => removOPCicle(i)}
                        />

                    </>
                )}
            </Controller>
        </Container>
    )
}