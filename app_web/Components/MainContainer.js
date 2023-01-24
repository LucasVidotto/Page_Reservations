import Footer from "./Footer";
import Navbar from "./Navbar";
import  Header  from "./Header";

export default function MainContainer({children}) {
    return(
        <>
            <Navbar />
            < Header />
            <div> {children} </div>
            <Footer />
        </>
    )
}