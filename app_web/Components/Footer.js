import style from './footer.module.css';
export default function Footer() {
  return (

      <>
       <div className={style.footer}>
        <footer>
            <div className={style.social}>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </div>
            <ul className={style.list}>
                <li ><a href="#">Home</a></li>
                <li ><a href="#">Services</a></li>
                <li ><a href="#">About</a></li>
                <li ><a href="#">Terms</a></li>
                <li ><a href="#">Privacy Policy</a></li>
            </ul>
            <p className={style.copyright}>Lucas Vidotto © 2023</p>
        </footer>
    </div>
      </>

  )
}
