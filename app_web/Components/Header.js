/* import Navbar from './Navbar'
 */
import Image from "next/image"
import caroucel from '../styles/caroucel.module.css';
import Image04 from '../Images/img4.jpeg'
import Image03 from '../Images/img3.jpeg'
import Image05 from '../Images/img5.jpeg'
import Image06 from '../Images/img6.jpeg'
import contato from '../Images/contato.jpg'
import Image44 from '../Images/img44.svg';


export default function Header() {
  
    return (
        <>
        <div className={caroucel.pic}>
            <img src="/images/back.jpg"  />
            <img src="/images/back.jpg"  />
            <img src="/images/back.jpg"  />
            {/* <img src={Image03}   />
            <img src={Image03}  />
            <img src={Image03}   />
            <img src={Image03}  /> */}
           {/*  <img src="http://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w" alt="imagens4"  />
            <img src="https://newevolutiondesigns.com/images/freebies/cool-4k-wallpaper-2.jpg" alt="imagens3"  />
            <img src="http://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w" alt="imagens5" />
            <img src="http://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w" alt="imagens6"  />
            <img src="http://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w" alt="imagens contatoz" /> */}
        </div>
        </>
  )
}