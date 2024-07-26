const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const params = new URLSearchParams({
  codigo: "22902",
  /* clienteFornecedor: "",
  planoDeContas: "",
  formaDePagamento: "", */
  /* filtrarPor: "QUITACAO", */
  /* contaBancaria: "", */
  /* dataInicial: "2024-07-25",
  dataFinal: "2024-07-25", */
}).toString();

const data = {
  Codigo: 22902,
  UltimaAlteracao: "2024-07-25T18:22:44.273-03:00",
  DataCompetencia: "2024-07-25T00:00:00-03:00",
  DataVencimento: "2024-07-25T00:00:00-03:00",
  DataVencimentoOriginal: "2024-07-25T00:00:00-03:00",
  DataQuitacao: "2024-07-25T00:00:00-03:00",
  Empresa: "Bahiafix",
  Cliente: "Cliente teste",
  NumeroDocumento: "L 22902",
  Descricao: "Despesa referente ao plano de conta 2.5.5 - CHEQUE SEM FUNDO",
  Observacoes: null,
  Quitado: true,
  Conciliado: true,
  EhDespesa: true,
  PlanoDeConta: "CHEQUE SEM FUNDO",
  CentroDeCusto: null,
  ContaBancaria: "CAIXA (HÉLIO)",
  FormaPagamento: "Cheque",
  LancamentoGrupo: null,
  Valor: 10,
  TotalRecebido: 10,
  Pagamentos: [
    {
      Data: "2024-07-25T00:00:00-03:00",
      FormaPagamento: "Cheque",
      NumeroDocumento: "L 22902",
      ContaBancaria: "CAIXA (HÉLIO)",
      Conciliado: true,
      Valor: 10,
    },
  ],
  NumeroBoleto: 0,
  NumeroNFSe: 0,
  CodigoVenda: 0,
  CodigoContrato: 0,
  Parcelas: [],
  JurosPagamentos: 0,
  MultaPagamentos: 0,
};

const getReleases = async () => {
  try {
    const releases = await fetch(
      `https://api.sigecloud.com.br/request/Lancamentos/Pesquisar?${params}`,
      {
        method: "Get",
        headers: {
          Accept: "application/json",
          "Authorization-Token": "",
          User: "",
          App: "API",
        },
      }
    );

    if (!releases) {
      throw new Error("Error");
    }

    const data = await releases.json();
    console.log(data[0]["PlanoDeConta"]);
  } catch (error) {
    console.log("Error:", error);
  }
};

const updateReleases = async (newReleases) => {
  try {
    fetch("https://api.sigecloud.com.br/request/Lancamentos/Atualizar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Authorization-Token": "",
        User: "",
        App: "API",
      },
      body: JSON.stringify(newReleases),
    })
      .then((data) => data.json())
      .then((dataResponse) => console.log(dataResponse));
  } catch (err) {
    console.log(err);
  }
};

/* getReleases(); */
updateReleases(data);
