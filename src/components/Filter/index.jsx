import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { ReleaseContext } from "@/context/context";
import { getToken, getUser } from "@/auth";

const Filter = () => {
  const { setFilterReleaseData } = useContext(ReleaseContext);
  const [code, setCode] = useState("");
  const [client, setClient] = useState("");
  const [accountPlan, setAccountPlan] = useState("");
  const [accountBank, setAccountBank] = useState("");
  const [dateStart, setDateStart] = useState("")
  const [dateEnd, setDateEnd] = useState("")

  const getReleases = async (params) => {
    try {
      const releases = await fetch(
        `/api/request/Lancamentos/Pesquisar?${params.toString()}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Authorization-Token": getToken(),
            User: getUser(),
            App: "API",
          },
        }
      );

      if (!releases) {
        throw new Error("Network response was not ok");
      }

      const data = await releases.json();
      setFilterReleaseData(data);
      console.log(data);
    } catch (error) {
      console.log("error aqui");
      console.log("Error:", error);
    }
  };

  const handlerFilter = () => {
    const newPropertiesFilter = new URLSearchParams({
      
      clienteFornecedor: client,
      planoDeContas: accountPlan,
      contaBancaria: accountBank,
      dataInicial: dateStart,
      dataFinal: dateEnd
    });
    
    console.log(dateStart)
    getReleases(newPropertiesFilter);
    console.log(newPropertiesFilter);
  };

  return (
    <div className="mt-10 w-4/5 space-y-5 ml-5">
      <div>
        <label htmlFor="start">Inicio</label>
        <input 
          type="date" 
          id="start" 
          min="2021-01-01" 
          className="border" 
          onChange={({target}) => setDateStart(target.value)}
        />
      </div>
      <div>
        <label htmlFor="end">Final</label>
        <input 
          type="date" 
          id="end" 
          min="2021-01-01" 
          className="border" 
          onChange={({target}) => setDateEnd(target.value)}
          />
      </div>
      <div className="grid max-w-sm items-center gap-1.5">
        <Label htmlFor="code">Codigo</Label>
        <Input
          type="text"
          id="code"
          value={code}
          onChange={({ target }) => setCode(target.value)}
        />
      </div>
      <div className="grid max-w-sm items-center gap-1.5">
        <Label htmlFor="client">Cliente</Label>
        <Input
          type="text"
          id="client"
          value={client}
          onChange={({ target }) => setClient(target.value)}
        />
      </div>
      <div className="grid max-w-sm items-center gap-1.5">
        <Label htmlFor="account-plan">Plano de Conta</Label>
        <Input
          type="text"
          id="account-plan"
          value={accountPlan}
          onChange={({ target }) => setAccountPlan(target.value)}
        />
      </div>
      <div className="grid max-w-sm items-center gap-1.5">
        <Label htmlFor="account-bank">Conta Bancaria</Label>
        <Input
          type="text"
          id="account-bank"
          value={accountBank}
          onChange={({ target }) => setAccountBank(target.value)}
        />
      </div>
      <Button variant="outline" onClick={handlerFilter}>
        Filtrar
      </Button>
    </div>
  );
};

export default Filter;
