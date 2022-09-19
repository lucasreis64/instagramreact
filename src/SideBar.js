import badbivesmemes from "./images/badbivesmemes.jpeg"
import chibirdart from "./images/bhibirdart.jpeg"
import razoespara from "./images/razoespara.jpeg"
import adorableanimals from "./images/adorableanimals.jpeg"
import smallcutecats from "./images/smallcutecats.jpeg"

import Usuario from "./Usuario"


export default function SideBar () {

    return (
        <div class="sidebarembalagem">
            <div class="sidebar">
                <Usuario/>
                <Sugestoes/>
            <div class="sidebarbottom">
                <h3>
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma
                </h3>
            </div>
            <div class="sidebarbottomcredits">
                <h3>© 2021 INSTAGRAM DO FACEBOOK</h3>
            </div>
            </div>
        </div>
    )
}

