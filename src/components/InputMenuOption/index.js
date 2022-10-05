import {
    Container,
    InpuArea,
    AreaOp,
    NumberInput,
    AcaoInput
} from './styles'
import { useState } from 'react';
import { BsArrowRight, BsPlusLg, BsArrowReturnRight, BsArrowReturnLeft } from "react-icons/bs";

export default function InputMenuOption({
    title,
    width,
    height,
    radius,
    type,
    placeholder,
    funcOn,
    id,
    name
}) {
    const [textTarget, setTextTarget] = useState('');
    const valueBase = { info: '', type: 'incoming' };
    const [inputOpt, setinputOpt] = useState([...valueBase]);


    const handleInputOpt = () => {
        setinputOpt(state => [...state, { ...valueBase }]);
        funcOn({
            name: name,
            value: {
                text: textTarget,
                subOpt: inputOpt
            }
        });
    };

    function onChange(e, ix) {
        // setTextTarget(e.target.value);
        funcOn({
            name: name,
            value: {
                text: textTarget,
                subOpt: inputOpt
            }
        });

        const { name, value } = e.target;
        let values = [...inputOpt];
        values[ix][name] = value;
        setinputOpt(state => [...values]);
    };


    function removInput(ix) {
        let values = inputOpt.filter((a, b) => {
            if (b !== ix) {
                return a;
            }
        });
        setinputOpt(state => [...values]);
    };

    return (
        <Container width={width} height={height} radius={radius}>
            <label>{title}</label>
            <InpuArea>
                <textarea
                    type={type}
                    placeholder={placeholder}
                    value={textTarget}
                    onChange={onChange}
                    id={id}
                    name={name}
                    rows="8"
                    cols="320"
                />
            </InpuArea>

            <AreaOp>
                {/* {inputOpt.map((v, i) =>
                    <div>
                        <BsArrowReturnRight
                            size={20}
                            color='#fff'
                            cursor='pointer'
                            onClick={() => removInput(i)}
                        />
                        <span>
                            <NumberInput type='number' />
                            <BsArrowRight size={25} color='#fff' cursor='pointer' />
                            <select name="select" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Ação</option>
                                <option value="transfer">Transfer</option>
                                <option value="respondent" >Responder</option>
                                <option value="menu" >Menu</option>
                            </select>
                            <BsArrowRight size={25} color='#fff' cursor='pointer' />
                            <AcaoInput type='text' />
                        </span>
                        <BsArrowReturnLeft
                            size={20}
                            color='#fff'
                            cursor='pointer'
                            onClick={() => removInput(i)}
                        />
                    </div>
                )} */}
                <BsPlusLg
                    size={25}
                    color='#fff'
                    cursor='pointer'
                    onClick={handleInputOpt}
                />
            </AreaOp>

        </Container>
    )
}