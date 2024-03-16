import Topo from '../../componentes/topo/index'
import Rodape from '@/pages/componentes/footer'

export default function ExerciciosHTML(){
    return(
        <div className=''>
            <Topo/>
            <h1 className='text-[50px] h-{100px} flex justify-center items-center' >Exercicios Praticos</h1>
      <div className='flex flex-col justify-around h-[700px]'>
         <div className='flex justify-center '>
                 <div className=' flex flex-col justify-center items-center bg-violet-700 w-[800px] h-[100px]  font-bold tex rounded-s-lg	pr-[20px]' 
                 >
                    <h2 className='text-[20px] text-black'>Ponto Inicial</h2>
                   <div className='w-[700px]'>1- Desenvolva um catálogo de filmes com apenas 3 títulos de sua preferência , ao clicar no filme vai levar em outra página com a sinopse desse filme e o título.</div> 
                   
                   </div>
            </div>
            <div className='flex justify-center'>
                 <div className=' flex flex-col justify-center items-center bg-violet-700 w-[800px] h-[100px]  font-bold tex rounded-s-lg	pr-[20px]' 
                 >
                    <h2 className='text-[20px] text-black'>Pratique um pouco mais</h2>
                   <div className='w-[700px]'>2- Crie um menu de um site contendo a página Home, produtos,serviços e contatos, utilize a lista em html. </div> 
                   
                   </div>
            </div>
            <div className='flex justify-center'>
                 <div className=' flex flex-col justify-center items-center bg-violet-700 w-[800px] h-[150px]  font-bold tex rounded-s-lg	pr-[20px]' 
                 >
                       <h2 className='text-[20px] text-black'>Atualizando seu site de filmes</h2>
                   <div className='w-[700px]'>3- coloque um trailer para cada filme, utilize as tag do youtube para fazer isso <br />explicação: entra no youtube escolhe o trailer do seu filme, coloque em compartilhar e clicar em incorporar copie e cola as tags html e coloque no seu editor de códigos</div> 
                   
                   </div>
            </div>
            <div className='flex justify-center'>
                 <div className=' flex flex-col justify-center items-center bg-violet-700 w-[800px] h-[150px]  font-bold tex rounded-s-lg	pr-[20px]' 
                 >
                       <h2 className='text-[20px] text-black'>Site de filmes basico</h2>
                   <div className='w-[700px]'> 4-Agora desenvolva um site completo estático com apenas html, adicione mais 10 filmes com gêneros diferente e adicione um menu contendo os gêneros, e cada link do menu leva pra um gênero de filmes diferente</div> 
                   
                   </div>
            </div>
         
         </div>

         <Rodape/>   
    </div>
    )
}