import NavBar from "./NavBar"
import BottomBar from "./BottomBar"
import Stories from "./Stories"
import Posts from "./Posts"
import SideBar from "./SideBar"

export default function Corpo () {
    return (
        <div class="Pagina">
            <NavBar/>
            <BottomBar/>
            <div class="inferior">
                <div class="principal" id="principal">
                    <Stories/>
                    <Posts/> 
                    <ion-icon   /* onClick={()=>rolardireita()} */ id="seta" class="seta" name="chevron-forward-circle"></ion-icon>
                </div>
                <SideBar/>    
            </div>
        </div>
    )
}