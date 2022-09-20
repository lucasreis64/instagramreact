
import LogoInsta from "./images/instagramLogo.png"

export default function NavBar () {
    return (
    <div className="totaltopo">
        <div className="topo desktop">
            <div className="iconesesquerda">
                <ion-icon name="logo-instagram"></ion-icon>
                <div className="linha"></div>
                <a href="instagram"><img src={LogoInsta} alt=""/></a>
            </div>
            <div className="iconescentrais">
                <input className="pesquisa" type="text" placeholder="Pesquisar" />
            </div>
            <div className="iconesdireita">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
        <div className="topo1 mobile">
            <ion-icon name="logo-instagram"></ion-icon>
            <a href="instagram"><img src={LogoInsta} alt=""/></a>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    </div>
    )

}