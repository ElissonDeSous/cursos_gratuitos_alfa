import Topo from '../../componentes/topo/index'
import Rodape from '@/pages/componentes/footer'

export default function ExerciciosHTML(){
    return(
        <div className=''>
            <Topo/>
            <h1 className='text-[50px] h-{100px} flex justify-center items-center' >Exercicios Praticos</h1>
      <div className='flex flex-col justify-around h-[700px]'>
         <div className='flex justify-center '>
                 <div className=' flex flex-col justify-center items-center bg-violet-700 w-[800px] h-[150px]  font-bold tex rounded-s-lg	pr-[20px]' 
                 >
                    <h2 className='text-[20px] text-black'>Ponto Inicial</h2>
                   <div className='w-[700px] '>1- Desenvolva um catálogo de filmes com três títulos de sua preferência, com o objetivo de clicar em cada filme e ser redirecionado para outra página contendo a sinopse do filme escolhido e seu título</div> 
                   
                   </div>
            </div>
            <div className='flex justify-center'>
                 <div className=' flex flex-col justify-center items-center bg-violet-700 w-[800px] h-[150px]  font-bold tex rounded-s-lg	pr-[20px]' 
                 >
                    <h2 className='text-[20px] text-black'>Pratique um pouco mais</h2>
                   <div className='w-[700px]'>2-Desenvolva um menu de um site que contenha as páginas home; produtos; serviços; e contatos. Utilize uma lista em HTML.</div> 
                   
                   </div>
            </div>
            <div className='flex justify-center'>
                 <div className=' flex flex-col justify-center items-center bg-violet-700 w-[800px] h-[150px]  font-bold tex rounded-s-lg	pr-[20px]' 
                 >
                       <h2 className='text-[20px] text-black'>Atualizando seu site de filmes</h2>
                   <div className='w-[700px]'>3- Coloque um trailer para cada filme utilizando as tags do YouTube<br /> <br />Explicação: Acesse o YouTube, escolha o trailer do seu filme, clique em "Compartilhar" e depois em "Incorporar". Copie e cole as tags HTML no seu editor de códigos</div> 
                   
                   </div>
            </div>
            <div className='flex justify-center'>
                 <div className=' flex flex-col justify-center items-center bg-violet-700 w-[800px] h-[150px]  font-bold tex rounded-s-lg	pr-[20px]' 
                 >
                       <h2 className='text-[20px] text-black'>Site de filmes basico</h2>
                   <div className='w-[700px]'> 4-Agora, desenvolva um site estático completo apenas com HTML. Adicione mais 10 filmes com diferentes tipos e crie um menu contendo essas categorias. Cada link do menu deve levar a uma página com filmes do tipo correspondente</div> 
                   
                   </div>
            </div>
         
         </div>

         <Rodape/>   
    </div>
    )
}