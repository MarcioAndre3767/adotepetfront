import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/Lista/Lista';


const Home: NextPage = () => {
 
  return (
    <div>
       <Titulo 
        titulo="" 
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong> adotar um pet virtualmente</strong>
          </span>        
        } />

        <Lista 
          pets={[
            {
              id: 1,
              nome: 'Bidu',
              historia:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker',
              foto: 'https://s1.best-wallpaper.net/wallpaper/m/1706/Furry-shepherd-dog-side-view-puppy_m.jpg'             
            },
            {
              id: 2,
              nome: 'Bidu dog',
              historia: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker',
              foto: 'https://s1.best-wallpaper.net/wallpaper/m/1706/Furry-shepherd-dog-side-view-puppy_m.jpg'             
            }
          ]}
        />

    </div>
   
  )
}

export default Home


