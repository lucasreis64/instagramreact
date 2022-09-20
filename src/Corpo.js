import NavBar from "./NavBar"
import BottomBar from "./BottomBar"
import Stories from "./Stories"
import Posts from "./Posts"
import SideBar from "./SideBar"
import React from "react"

export default function Corpo () {
    const [seta, setSeta] = React.useState(<ion-icon   onClick={()=>rolarDireita()} id="seta" className="seta" name="chevron-forward-circle"></ion-icon>);
    const position = 500

    function rolarDireita() {
        var roll = document.getElementById('mudar')
        roll.scroll({
            top: 0,
            left: position,
            behavior: 'smooth'
        });
        setSeta(<ion-icon   onClick={()=>rolarEsquerda()} id="setaesquerda" name="chevron-back-circle"></ion-icon>)
    }

    function rolarEsquerda() {
        var roll = document.querySelector('#mudar')
        roll.scroll({
            top: 0,
            left: -position,
            behavior: 'smooth'
        });
        setSeta(<ion-icon   onClick={()=>rolarDireita()} id="seta" className="seta" name="chevron-forward-circle"></ion-icon>)
    }

    return (
        <div className="Pagina">
            <NavBar/>
            <BottomBar/>
            <div className="inferior">
                <div className="principal" id="principal">
                    <Stories/>
                    <Posts/> 
                    {seta}
                </div>
                <SideBar/>    
            </div>
        </div>
    )
} 


