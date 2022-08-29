import {
  Container,
} from './styles'

import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
      name: 'Janeiro',
      pdt: 40000,
      Natd: 2400,
      atd: 2460,
  },
  {
      name: 'Fevereiro',
      pdt: 6000,
      Natd: 1398,
      atd: 2210,
  },
  {
      name: 'Março',
      pdt: 2000,
      Natd: 9800,
      atd: 2290,
  },
  {
      name: 'Abril',
      pdt: 27380,
      Natd: 39908,
      atd: 2000,
  },
  {
      name: 'Maio',
      pdt: 18290,
      Natd: 4800,
      atd: 2181,
  },
  {
      name: 'Junho',
      pdt: 2390,
      Natd: 3800,
      atd: 2500,
  },
  {
      name: 'Julho',
      pdt: 9490,
      Natd: 43600,
      atd: 100,
  },
];

export default function LineChartLabel() {

  return (
    <Container style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotoneX" dataKey="pdt" stroke="#23FC00" fill="#23FC00" />
          <Line type='monotoneX' dataKey="Natd" stroke="#E83F44" fill="#E83F44" />
          <Line type='monotoneX' dataKey="atd" stroke="#6AD4FF" fill="#6AD4FF" />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );

}
