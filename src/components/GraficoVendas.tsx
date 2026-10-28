import {
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IVenda } from "../context/DataContext";

interface VendaDia {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

const transformData = (data: IVenda[]): VendaDia[] => {
  const dias = data.reduce((acc: {[key: string]: VendaDia}, item) => {
    const dia = item.data.split(' ')[0]
    if(!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0
      }
    }

    acc[dia][item.status] += item.preco

    return acc
  }, {})

  return Object.values(dias).map((dia) => ({...dia, data: dia.data.substring(5)}))
};

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data)
  return (
    <LineChart
      style={{
        width: "100%",
        height: "400px",
      }}
      responsive
      data={transformedData}
      margin={{
        top: 20,
        right: 20,
        left: 0,
        bottom: 0,
      }}
    >
      <Legend />
      <XAxis dataKey="data" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3} />
      <Line
        type="monotone"
        dataKey="processando"
        stroke="#fbcb21"
        strokeWidth={3}
      />
      <Line type="monotone" dataKey="falha" stroke="#c01e13" strokeWidth={3} />
    </LineChart>
  );
};

export default GraficoVendas;
