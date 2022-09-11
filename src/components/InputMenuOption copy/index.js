import {
    Container,
    InpuArea,
    AreaOp,
    NumberInput,
    AcaoInput
} from './styles'
import { useState } from 'react';
import { BsArrowRight, BsPlusLg, BsArrowReturnRight, BsArrowReturnLeft } from "react-icons/bs";

export default function InputMenuOption({ title, width, height, radius }) {
    const [menuArea, setMenuArea] = useState('');
    const [inputOpt, setinputOpt] = useState([]);

    const handleInputOpt = () => {
        setinputOpt([...inputOpt, ''])
    };

    return (
        <Container width={width} height={height} radius={radius}>
            <label>Menu 1:</label>
            <InpuArea>
                <textarea
                    type='text'
                    maxLength={10}
                    value={menuArea}
                    rows="8" cols="320"
                    onChange={e => setMenuArea(e.target.value)}
                />
            </InpuArea>

            <AreaOp>
                {inputOpt.map((v, i) =>
                    <div>
                        <BsArrowReturnRight
                            size={30}
                            color='#fff'
                            cursor='pointer'
                            onClick={() => alert('remove')}
                        />
                        <span>
                            <NumberInput type='number' />
                            <BsArrowRight size={30} color='#fff' cursor='pointer' />
                            <AcaoInput type='text' />

                        </span>

                        <BsArrowReturnLeft
                            size={30}
                            color='#fff'
                            cursor='pointer'
                            onClick={() => alert('remove')}
                        />
                    </div>
                )}




                <BsPlusLg size={25} color='#fff' cursor='pointer' onClick={handleInputOpt} />
            </AreaOp>

        </Container>
    )
}