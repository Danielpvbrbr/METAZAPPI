import {
    Container,
    InpuCicle
} from './styles'
import { useState } from 'react';


export default function InputMultArray({ name, id, funcOn, width, height, radius }) {
    const [oPCicle, setOPCicle] = useState([]);
    const [opArray, setOpArray] = useState('');


    function OPCicle(event) {
        const key = event.keyCode || event.which;

        if (key === 188) {
            let arrayOp = opArray.split('');
            let index = arrayOp.indexOf(',');

            if (index > -1) {
                arrayOp.splice(index, 1);
                setOPCicle([...oPCicle, arrayOp.join('')]);
                setOpArray('');
            } else {
                setOPCicle([...oPCicle, arrayOp.join('')]);
                setOpArray('');
            };
        };
    };

    function onChange(e) {
        setOpArray(e.target.value);
        funcOn({ name: name, value: oPCicle })
    };

    function removOPCicle(pos) {
        setOPCicle([...oPCicle.filter((_, i) => i !== pos)]);
        setOpArray('');
    };

    return (
        <Container width={width} height={height} radius={radius}>
            <label>Quando o entrante for: <span>Obs: ( Use a virgula para separa )</span></label>
            <InpuCicle>
                {oPCicle.map((v, i) =>
                    <span key={i} onClick={() => removOPCicle(i)}>{v}</span>
                )}

                <input
                    type='text'
                    maxLength={10}
                    value={opArray}
                    name={name}
                    id={id}
                    onChange={onChange}
                    onKeyDown={e => OPCicle(e)}
                />
            </InpuCicle>
        </Container>
    )
}