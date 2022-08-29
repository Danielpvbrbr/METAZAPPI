import {
    Container,
} from './styles'

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Janeiro',
        pdt: 4000,
        natd: 2400,
        atd: 2400,
    },
    {
        name: 'Fevereiro',
        pdt: 3000,
        natd: 1398,
        atd: 2210,
    },
    {
        name: 'Março',
        pdt: 2000,
        natd: 9800,
        atd: 2290,
    },
    {
        name: 'Abril',
        pdt: 2780,
        natd: 3908,
        atd: 2000,
    },
    {
        name: 'Maio',
        pdt: 1890,
        natd: 4800,
        atd: 2181,
    },
    {
        name: 'Junho',
        pdt: 2390,
        natd: 3800,
        atd: 2500,
    },
    {
        name: 'Julho',
        pdt: 3490,
        Natd: 4300,
        atd: 2100,
    },
];

export default function TinyBarChart({ v }) {

    return (
        <Container>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pdt" fill="#23FC00" />
                    <Bar dataKey="Natd" fill="#E83F44" />
                    <Bar dataKey="atd" fill="#6AD4FF" />
                </BarChart>
            </ResponsiveContainer>
        </Container>
    )
}