import Link from "next/link"
export default function Topo(){

    return(
  <header className="bg-violet-800  h-[100px]">
     <div className="flex justify-center items-center h-[100px]">
      <Link href = "/"><h1 className="text-3xl font-bold text-white">Cursos Gratuitos</h1></Link>
       
     </div>
  </header>
    )
} 