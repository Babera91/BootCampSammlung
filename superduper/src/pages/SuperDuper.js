import Logo from "../components/Logo";
import Creativ from "../components/Creative";
import Navbar from "../components/Navbar";
import Staff from "../components/Stuff";
import Horse from "../components/Horse";
import Agrotechs from "../components/Agrotechs";
import Namu from "../components/Namu";
import img from "../img/Screenshot_2.png";
import horse from"../img/Horse.jpg"
import agro from "../img/agro.jpg"
import Namus from "../img/Namu.jpg"


const SuperDuper = () => {
    return ( 
        <div>
            <header>
                <Logo  />
                <Creativ img ={img}/>
                <Navbar />
            </header>
            <main>
                <Staff />
                <Horse horse={horse} />
                <Agrotechs agro ={agro}/>
                <Namu Namu ={Namus}/>
            </main>
        </div>
     );
}
 
export default SuperDuper;