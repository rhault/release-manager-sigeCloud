import { useContext } from "react";
import { ReleaseContext } from "../../context/context";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableDashboard = () => {
  const { filterReleaseData } = useContext(ReleaseContext);
  const optionDateShort = {
    day: '2-digit',
    month: '2-digit',  
    year: '2-digit',   
  };
  const headerPropertyTable = [
    "Codigo",
    "Vencimento",
    "Data Quitação",
    "Previsto",
    "Situação",
    "Plano de Conta",
    "Cliente",
    "F pagamento",
    "Banco",
  ];

  return (
    <>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            {headerPropertyTable.map((item, index) => (
              <TableHead key={index}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterReleaseData.map((item) => (
            <TableRow key={item.Codigo}>
              <TableCell>{item.Codigo}</TableCell>
              <TableCell>{item.DataVencimento.slice(0,10)}</TableCell>
              <TableCell>{item.DataQuitacao.slice(0,10)}</TableCell>
              <TableCell>R$ {item.Valor}</TableCell>
              <TableCell>{item.Valor === item.TotalRecebido ? 'Pago' : 'Aberto'}</TableCell>
              <TableCell>{item.PlanoDeConta}</TableCell>
              <TableCell>{item.Cliente}</TableCell>
              <TableCell>{item.FormaPagamento}</TableCell>
              <TableCell>{item.ContaBancaria}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableDashboard;
