import {
    Container,
    AreaCards,
    AreaDash,
    AreaDashBottom,
    PainelDash,
    AreaRlt
} from './styles'
import { useState } from 'react';
import CardDash from '../../components/CardDash';
import {
    BsFillChatRightTextFill,
    BsChatRightDotsFill,
    BsChatRightQuoteFill
} from "react-icons/bs";
import TinyBarChart from '../../components/TinyBarChart';
import PieChartLabel from '../../components/PieChartLabel';
import LineChart from '../../components/LineChartLabel';
import Period from '../../components/Period';

export default function Dashboard({ width }) {
    return (
        <Container width={width}>
            <AreaCards width={width - 5}>
                <CardDash
                    Icon={BsFillChatRightTextFill}
                    color={'#6AD4FF'}
                    title={'Conexões Finalizadas'}
                    value={500}
                />
                <CardDash
                    Icon={BsChatRightDotsFill}
                    color={'#23FC00'}
                    title={'Conexões Pendentes'}
                    value={500}
                />
                <CardDash
                    Icon={BsChatRightQuoteFill}
                    color={'#E83F44'}
                    title={'Conexões não atendidas'}
                    value={10}
                />
            </AreaCards>
            <PainelDash width={width - 5}>
                <Period/>

                <AreaRlt width={width - 30}>
                    <button>
                        Relatorio
                    </button>

                    <select name="select">
                        <option value="valor1">Valor 1</option>
                        <option value="valor2" selected>Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>
                </AreaRlt>

            </PainelDash>
            <AreaDash width={width - 5}>
                <PieChartLabel />
                <TinyBarChart />
            </AreaDash>
            <AreaDashBottom width={width - 5}>
                <LineChart />
            </AreaDashBottom>
        </Container>
    )
}