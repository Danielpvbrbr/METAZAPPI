import { useState } from 'react';
import {
    Container,
    Controller,
} from './styles';
import Option from '../../../../components/Option';
import OptionSem from '../../../../components/OptionSem';
import TypeInput from '../../../../components/TypeInput';

export default function Interaction() {
    const [selected, setSelected] = useState('incoming');
    const valueBase = { info: '', type: selected };
    const [input, setInput] = useState([{ ...valueBase }]);

    const handleAdd = () => {
        setInput(state => [...state, { ...valueBase }]);
    };

    const handleChange = (e, ix) => {
        const { name, value } = e.target;
        let values = [...input];
        values[ix][name] = value;
        setInput(state => [...values]);
    };

    const handleDelete = (ix) => {
        let values = input.filter((a, b) => {
            if (b !== ix) {
                return a;
            }
        });
        setInput(state => [...values]);
    };
    
    const funcOn = (res, ix) => {
        const { name, value } = res;
        let values = [...input];
        values[ix][name] = value;
        setInput(state => [...values]);
    };

    return (
        <Container>
            <Controller>
                {input.map((inpt, i) =>
                    <div key={i}>
                        <TypeInput
                            value={inpt.info}
                            name='info'
                            id={i}
                            onChange={e => handleChange(e, i)}
                            funcOn={e => funcOn(e, i)}
                            selected={inpt.type}
                        />

                        <OptionSem
                            onClick={e => handleAdd(e)}
                            Selected={setSelected}
                            defaultValue={inpt.type}
                            onChange={e => handleChange(e, i)}
                            key={i}
                            name="info"
                            remove={() => handleDelete(i)}
                        />
                    </div>
                )}
                <Option
                    onClick={e => handleAdd(e)}
                    Selected={setSelected}
                    onChange={e => setSelected(e.target.value)}
                    defaultValue={selected}
                    desabled={input.length > 1}
                />

                <pre>
                    {JSON.stringify(input, null, 2)}
                </pre>
            </Controller>
        </Container>
    )
}