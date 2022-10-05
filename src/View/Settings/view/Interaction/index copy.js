import { useState } from 'react';
import {
    Container,
    Controller,
} from './styles';
import InputMultArray from '../../../../components/InputMultArray';
import Option from '../../../../components/Option';
import TypeInput from '../../../../components/TypeInput';

export default function Interaction({ }) {
    const [input, setInput] = useState([]);
    const [selected, setSelected] = useState();
    const valueBase = { description: '', quantidade: 0 };
    const [ingredientes, setIngredientes] = useState([{ ...valueBase }]);

    const handleAdd = () => {
        setIngredientes(state => [...state, { ...valueBase }]);
    }
    const handleChange = (e, ix) => {
        const { name, value } = e.target;
        let values = [...ingredientes];
        values[ix][name] = value;
        setIngredientes(state => [...values]);
    }
    const handleDelete = (ix) => {
        let values = ingredientes.filter((a, b) => {
            if (b !== ix) {
                return a;
            }
        });
        setIngredientes(state => [...values]);
    }

    const inputCreate = (e) => {
        e.preventDefault();
        switch (selected) {
            case 'incoming':
                return setInput([...input, ''])
            case 'toask':
                return setInput([...input, '']);
            case 'option':
                return setInput([...input, '']);
            case 'respondent':
                return setInput([...input, '']);
            default:
                console.log(selected);
        };
    };

    const onChangeOPCicle = (e, i) => {
        input[i] = e.target.value;
        setInput([...input]);

    };

    function removOPCicle(pos) {
        setInput([...input.filter((_, i) => i !== pos)]);
    };

    return (
        <Container>
            <Controller>
                <InputMultArray />
                <Option
                    onClick={e => inputCreate(e)}
                    Selected={setSelected}
                />
                {ingredientes.map((ing, ix) => (
                    <div>
                        <label> Descrição:
                            <input name="description" type="text" value={ing.description} onChange={e => handleChange(e, ix)} style={{ width: 100 }} />
                        </label>
                        <label> Quantidade:
                            <input name="quantidade" type="number" value={ing.quantidade} onChange={e => handleChange(e, ix)} style={{ width: 50 }} />
                        </label> {' '}
                        <button onClick={e => handleDelete(ix)}>Remover</button>
                    </div>
                ))}
                
            </Controller>
        </Container>
    )
}