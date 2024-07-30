import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Filter from "@/components/Filter"
import {ReleaseContext, ReleaseProvider} from "@/context/context"

function App() {
  const headerPropertyTable = [
    'Codigo',
    'Cliente',
    'Plano de Conta',
    'Forma de pagamento',
    'Conta Bancaria',
    'Valor',
    'Tipo de Lançamento',
    'Situação do   Lançamento'
  ]

  return (
    <>
    <ReleaseProvider>
      <ReleaseContext.Consumer>
        {({filter, setFilter}) => (
          <div className="flex flex-col w-full">
            <header className="w-full h-16 bg-blue-400 px-5">
              <h1 className="text-white text-2xl  mt-4">Lançamentos Financeiros</h1>
            </header>
            <main className="flex flex-col md:flex-row w-full px-5">
              <section className="w-4/5">
                <Table className="w-full">
                  <TableHeader>
                    <TableRow>
                      {headerPropertyTable.map((item, index) => 
                        <TableHead key={index}>{item}</TableHead>
                      )}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>1</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </section>
              <div className="flex flex-col w-1/5 border-l-2">
                <Tabs defaultValue="filter" className="w-full">
                  <TabsList className="w-full h-16">
                    <TabsTrigger value="filter" className="w-1/2" >Filtros</TabsTrigger>
                    <TabsTrigger value="modific" className="w-1/2">Modific</TabsTrigger>
                  </TabsList>
                  <TabsContent value="filter" className="w-full">              
                    <Filter/>
                  </TabsContent>
                  <TabsContent value="modific">
                    value2
                  </TabsContent>
                </Tabs>
              </div>
            </main>
          </div>
        )}
      </ReleaseContext.Consumer>
    </ReleaseProvider>
    </>
  )
}

export default App
