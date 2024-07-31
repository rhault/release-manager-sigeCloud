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

  const headerPropertyTable = [
    "Codigo",
    "Vencimento",
    "Data Quitação",
    "Previsto",
    "Situação",
    "Plano de Conta",
    "Cliente",
    "Banco",
    "Valor",
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
              <TableCell>{item.DataVencimento}</TableCell>
              <TableCell>{item.Cliente}</TableCell>
              <TableCell>{item.PlanoDeConta}</TableCell>
              <TableCell>{item.FormaPagamento}</TableCell>
              <TableCell>{item.ContaBancaria}</TableCell>
              <TableCell>{item.Valor}</TableCell>
              <TableCell>{item.Valor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableDashboard;
