import Link from "next/link"

import ReactNative from "./ReactNative.png"


export default function conteudo(){
    return(
        <section className="">
            <div className="flex justify-center mt-[50px]">
                <h2 className="text-2xl	">
                    Conteudo Iniciante
                </h2>
            </div>
               
          <div className="flex  justify-evenly flex-wrap h-[800px]">
             <div className="   bg-violet-500 mt-8 flex flex-col justify-center  border-solid border-2 w-[450px] h-[330px] border-indigo-600  gradientGame">
                
                <ul>
                   <li>
                      <Link className="h-[500px]" href='https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n' target="blank">
                      
                        <img className="image" src="./htmlcsss.png"  height="100px"  alt="" />
                       <div className="flex  items-center justify-center h-[50px]">
                       <strong className=" bg-violet-500 flex justify-center items-center h-[20px]  font-bold">HTML e CSS</strong>
                       </div>
                       
                      </Link>
                   </li>
                </ul>
               <div className="flex justify-center items-center h-[400px] w-[100%] bg-blue-600 ">
                <Link className="font-bold " href="/paginas/html_css" target="blank">Exercicios</Link>
                </div>
             </div>
             <div className="  bg-violet-500 mt-8 flex flex-col  border-solid border-2 w-[450px] h-[330px] border-indigo-600  gradientGame">
                
                <ul>
                   <li>
                      <Link className="h-[500px]" href='https://www.youtube.com/playlist?list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm' target="blank">
                        <img className="image" src="./javascript.png"  height="100px"  alt="" />
                       <div className="flex  items-center justify-center h-[50px]">
                       <strong className=" bg-violet-500 flex justify-center items-center h-[20px]  font-bold">Java Script</strong>
                       </div>
                       
                      </Link>
                   </li>
                </ul>
                <div className="flex justify-center items-center h-[400px] w-[100%] bg-blue-600 ">
                <Link className="font-bold" href="">Exercicios</Link>
                </div>
             </div>
             <div className="  bg-violet-500 mt-8 flex flex-col  border-solid border-2 w-[450px] h-[330px] border-indigo-600  gradientGame">
                
                <ul>
                   <li>
                      <Link className="h-[500px]" href='https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO' target="blank">
                        <img className="image" src="./react.png"  height="100px"  alt="" />
                       <div className="flex  items-center justify-center h-[50px]">
                       <strong className=" bg-violet-500 flex justify-center items-center h-[20px]  font-bold">React</strong>
                       </div>
                       
                      </Link>
                   </li>
                </ul>
                <div className="flex justify-center items-center h-[400px] w-[100%] bg-blue-600 ">
                <Link className="font-bold" href="">Exercicios</Link>
                </div>
             </div>
             <div className=" bg-violet-500 mt-8 flex flex-col  border-solid border-2 w-[450px] h-[330px] border-indigo-600  gradientGame">
                
                <ul>
                   <li>
                      <Link href='https://terabox.com/s/1uY9Dd2ll66gBhj9SQQTo4w' target="blank">
                      
                        <img src="./ReactNative.png" width="450px"  alt=""  />

                        <strong className="flex justify-center items-center h-[50px]  font-bold">React Native</strong>
                      </Link>
                   </li>
                </ul>
                <div className="flex justify-center items-center h-[400px] w-[100%] bg-blue-600 ">
                <Link className="font-bold" href="">Exercicios</Link>
                </div>
             </div>

          </div>

        </section>
    )
}