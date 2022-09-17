
import LogoInsta from "./images/instagramLogo.png"

export default function NavBar () {
    return (
    <div class="totaltopo">
        <div class="topo desktop">
            <div class="iconesesquerda">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="linha"></div>
                <a href="instagram"><img src={LogoInsta} alt=""/></a>
            </div>
            <div class="iconescentrais">
                <input class="pesquisa" type="text" placeholder="Pesquisar" />
            </div>
            <div class="iconesdireita">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
        <div class="topo1 mobile">
            <ion-icon name="logo-instagram"></ion-icon>
            <a href="instagram"><img src={LogoInsta} alt=""/></a>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    </div>
    )

}