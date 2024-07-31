import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useContext, useState } from "react";
import {Button} from "@/components/ui/button"
import {ReleaseContext} from "@/context/context"
import {getToken, getUser} from "@/auth"

const Filter = () => {
  const {setFilterReleaseData} = useContext(ReleaseContext)
  const [date, setDate] = useState(new Date())
  const [code, setCode] = useState('')
  const [client, setClient] = useState('')
  const [accountPlan, setAccountPlan] = useState('')
  const [accountBank, setAccountBank] = useState('')

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
      setFilterReleaseData(data)
      console.log(data);
    } catch (error) {
      console.log('error aqui')
      console.log("Error:", error);
    }
  }

  const handlerFilter = () => {
    const newPropertiesFilter = new URLSearchParams({
      codigo: code,
      clienteFornecedor: client,
      planoDeContas: accountPlan,
      contaBancaria: accountBank,
    })

    getReleases(newPropertiesFilter)
    console.log(newPropertiesFilter)
  }

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
      />
      <div className="mt-10 w-4/5 space-y-5 ml-5">
        <div className="grid max-w-sm items-center gap-1.5">
          <Label htmlFor="code">Codigo</Label>
            <Input 
              type="text" 
              id="code" 
              value={code}
              onChange={({target}) => setCode(target.value)}
            />
        </div>
        <div className="grid max-w-sm items-center gap-1.5">
          <Label htmlFor="client">Cliente</Label>
          <Input 
            type="text" 
            id="client"
            value={client}
            onChange={({target}) => setClient(target.value)}
            />
        </div>
        <div className="grid max-w-sm items-center gap-1.5">
          <Label htmlFor="account-plan">Plano de Conta</Label>
          <Input
            type="text" 
            id="account-plan"
            value={accountPlan}
            onChange={({target}) => setAccountPlan(target.value)}
            />
        </div>
        <div className="grid max-w-sm items-center gap-1.5">
          <Label htmlFor="account-bank">Conta Bancaria</Label>
          <Input
            type="text"
            id="account-bank"
            value={accountBank}
            onChange={({target}) => setAccountBank(target.value)}
            />
        </div>
        <Button variant="outline" onClick={handlerFilter}>Filtrar</Button>
      </div>
    </div>
  );
};

export default Filter;