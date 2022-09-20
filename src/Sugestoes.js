import badbivesmemes from "./images/badbivesmemes.jpeg"
import chibirdart from "./images/bhibirdart.jpeg"
import razoespara from "./images/razoespara.jpeg"
import adorableanimals from "./images/adorableanimals.jpeg"
import smallcutecats from "./images/smallcutecats.jpeg"

export default function Sugestoes () {
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
        <div className="sugestoes">
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

    return (sugestoesMap)
}