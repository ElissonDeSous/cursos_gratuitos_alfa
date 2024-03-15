
import Link from "next/link";

// componentes
import Topo from './componentes/topo/index'
import Conteudo from './componentes/conteudo/index'
import Rodape from './componentes/footer/index'


export default function Home() {
  return (
    <main className="" >
        <Topo/>
        <Conteudo/>
        <Rodape/>
    </main>
  );
}
