import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { ReleaseContext } from "@/context/context";
import { getToken, getUser } from "@/auth";

const Modifier = () => {
  const { filterReleaseData } = useContext(ReleaseContext);
  const [client, setClient] = useState("");
  const [accountPlan, setAccountPlan] = useState("");
  const [accountBank, setAccountBank] = useState("");

  const updateReleases = (releasesData, newProperties) => {
    return new Promise((resolve, reject) => {
      try{
        releasesData.forEach(release => {
          for(let key in newProperties){
            release[key] = newProperties[key] || release[key]
            console.log(release[key])
          }
        })
        console.log('updateReleases ok')
        resolve(releasesData)
      }
      catch(err){
        console.log('updateReleases err')
        reject(err)
      }
    })
  }

  const updateReleasesPOST = async (newReleases) => {
    try {
      fetch("/api/request/Lancamentos/Atualizar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Authorization-Token": getToken(),
          User:getUser() ,
          App: "API",
        },
        body: JSON.stringify(newReleases),
      })
        .then((data) => data.json())
        .then((dataResponse) => console.log(dataResponse));
    } catch (err) {
      console.log('updateReleasesPOST err:', err)
    }
  };

  const handlerUpdate = () => {
    const newPropertiesReleases = {
      Cliente: client,
      PlanoDeConta: accountPlan,
      ContaBancaria: accountBank
    }

    updateReleases(filterReleaseData, newPropertiesReleases)
    .then(newReleasesData => {
      newReleasesData.map(releasePOST => {
        updateReleasesPOST(releasePOST)
        console.log('all ok')
        console.log(releasePOST)
      })
    })
    .catch(err => {
      console.log('o bicho pegou')
      console.log(err)
    })
  }

  return (
    <div className="mt-10 w-4/5 space-y-5 ml-5">
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
      <Button variant="outline" onClick={handlerUpdate}>
        Modificar
      </Button>
    </div>
  );
};

export default Modifier;
