import Link from "next/link"

import Topo from "@/pages/componentes/topo"
import Rodape from "@/pages/componentes/footer"

export default function modulos(){
       return(
          <div>
            <Topo/>
            <h1 className="flex justify-center  text-[30px]">Modulos html e css</h1>

            <div className="flex justify-center mt[20px] flex-col items-center justify-around h-[700px]">
               <div>
                <Link href='https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n' target="blank">
                <div className="bg-violet-600 h-[100px] w-[800px] flex justify-center items-center text-[20px] ">Curso: HTML e CSS Modulo 1</div>
                </Link>
                   
               </div>
            
            <div className="flex justify-center flex-col items-center">
               <div>
                <Link href='https://www.youtube.com/playlist?list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s' target="blank">
                <div className="bg-violet-600 h-[100px] w-[800px] flex justify-center items-center text-[20px] ">Curso: HTML e CSS Modulo 2</div>
                </Link>
                </div>  
               </div>
            <div className="flex justify-center flex-col items-center">
               <div>
                <Link href='https://www.youtube.com/playlist?list=PLHz_AreHm4dmcAviDwiGgHbeEJToxbOpZ' target="blank">
                <div className="bg-violet-600 h-[100px] w-[800px] flex justify-center items-center text-[20px] ">Curso: HTML e CSS Modulo 3</div>
                </Link>
                   
               </div>
            </div>
            <div className="flex justify-center flex-col items-center">
               <div>
                <Link href='https://www.youtube.com/playlist?list=PLHz_AreHm4dkcVCk2Bn_fdVQ81Fkrh6WT' target="blank">
                <div className="bg-violet-600 h-[100px] w-[800px] flex justify-center items-center text-[20px] ">Curso: HTML e CSS Modulo 4</div>
                </Link>
                   
               </div>
            </div>
            
            </div>
            <Rodape/>
          </div>
       )
}