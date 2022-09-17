import badbivesmemes from "./images/badbivesmemes.jpeg"
import chibirdart from "./images/bhibirdart.jpeg"
import razoespara from "./images/razoespara.jpeg"
import adorableanimals from "./images/adorableanimals.jpeg"
import smallcutecats from "./images/smallcutecats.jpeg"

import Usuario from "./Usuario"


export default function SideBar () {
    

    const sugestoes = [
        {source: badbivesmemes, user: "bad.vibes.memes", h3: "Segue você"},
        {source: chibirdart, user: "chibirdart", h3: "Segue você"},
        {source: razoespara, user: "razoesparaacreditar", h3: "Novo no Instagram"},
        {source: adorableanimals, user: "adorable_animals", h3: "Segue você"},
        {source: smallcutecats, user: "smallcutecats", h3: "Segue você"}
    ]

    const sugestoesMap = sugestoes.map((s) => <RenderSugestoes source = {s.source} user = {s.user} h3 = {s.h3} />)

    function RenderSugestoes (props) {
        return (
        <div class="sugestoes">
            <div>
            <img src={props.source} alt = ""/>
                <div>
                    <h3>{props.user}</h3>
                    <h3>{props.h3}</h3>
                </div>
            </div>
            <h2>Seguir</h2>
        </div>
        )
    }

    return (
        <div class="sidebarembalagem">
            <div class="sidebar">
                <Usuario/>
                {sugestoesMap}
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

