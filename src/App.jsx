import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Filter from "@/components/Filter";
import { ReleaseContext, ReleaseProvider } from "@/context/context";
import TableDashboard from "@/components/Table";
import Modifier from "@/components/Modifier"

function App() {
  return (
    <>
      <ReleaseProvider>
        <div className="flex flex-col w-full">
          <header className="w-full h-16 bg-blue-400 px-5">
            <h1 className="text-white text-2xl  mt-4">
              Lançamentos Financeiros
            </h1>
          </header>
          <main className="flex flex-col md:flex-row w-full px-5">
            <section className="w-4/5">
              <TableDashboard />
            </section>
            <div className="flex flex-col w-1/5 border-l-2">
              <Tabs defaultValue="filter" className="w-full">
                <TabsList className="w-full h-16">
                  <TabsTrigger value="filter" className="w-1/2">
                    Filtros
                  </TabsTrigger>
                  <TabsTrigger value="modific" className="w-1/2">
                    Modific
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="filter" className="w-full">
                  <Filter />
                </TabsContent>
                <TabsContent value="modific">
                  <Modifier/>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </ReleaseProvider>
    </>
  );
}

export default App;
