import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import {Button} from "@/components/ui/button"

const Filter = () => {
  const [date, setDate] = useState(new Date())
  const [code, setCode] = useState('')
  const [client, setClient] = useState('')
  const [accountPlan, setAccountPlan] = useState('')
  const [accountBank, setAccountBank] = useState('')
  const [propertiesFilter, setPropertiesFilter] = useState({})

  const handlerFilter = () => {
    const newPropertiesFilter = {
      codigo: code,
      clienteFornecedor: client,
      planoDeContas: accountPlan,
      contaBancaria: accountBank,
    }

    setPropertiesFilter(newPropertiesFilter)
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