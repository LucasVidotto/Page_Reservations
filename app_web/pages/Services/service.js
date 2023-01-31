import styled from '../../styles/service.module.css'
import DetailsAcc from './DetailsAcc'
import ServicesDate from './serviceDate'
import {ServiceCard} from '../../styles/styledComponents/service';
export default function Service(){
    return(
        <ServiceCard>  
            <div className={styled.slider}>
    
                <a href="#slide-1">1</a>
                <a href="#slide-2">2</a>
                <a href="#slide-3">3</a>
                <a href="#slide-4">4</a>
                <a href="#slide-5">5</a>

                <div className={styled.slides}>
                    <div id="slide-1">
                        <img 
                        className={styled.imagem}
                        src="https://images3.alphacoders.com/107/thumb-1920-1077714.jpg" 
                        alt="imagem"/>
                    </div>
                    <div id="slide-2">
                        <img 
                        className={styled.imagem}
                        src="https://www.papeldeparede.etc.br/fotos/wp-content/uploads/papeldeparede-Livro-paisagem-4K.jpg" 
                        alt="imagem"/>
                    </div>
                    <div id="slide-3">
                    <img 
                        className={styled.imagem}
                        src="https://p4.wallpaperbetter.com/wallpaper/86/821/85/nature-1920x1080-pictures-wallpaper-preview.jpg" 
                        alt="imagem"/>
                    </div>
                    <div id="slide-4">
                    <img 
                        className={styled.imagem}
                        src="https://4kwallpapers.com/images/walls/thumbs_2t/464.jpeg" 
                        alt="imagem"/>
                    </div>
                    <div id="slide-5">
                    <img 
                        className={styled.imagem}
                        src="https://i.pinimg.com/originals/21/33/72/213372b81f306de6cb801d0bf8ca15de.jpg" 
                        alt="imagem"/>
                    </div>
                </div>
            </div>
            <ServicesDate />
            <DetailsAcc />
        </ServiceCard>
    )
}