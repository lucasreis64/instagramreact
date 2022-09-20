import boruto from "./images/boruto.png"
import React from "react"

export default function Usuario () {
    const [realname, setName] = React.useState("Boruto");
    const [img, setImg] = React.useState(boruto);
    
    const username = "uzumakiboruto"
    
    function mudarNome () {
        const nome = prompt("Insira seu novo nome de usuário!");
        if (nome===""|| nome === null){
            alert("Nome inválido, tente novamente!")
        }
        else {setName(nome)}
    }

    function mudarImagem () {
        const imagem = prompt("Insira sua nova imagem de perfil!");
        if (imagem===""|| imagem === null){
            alert("Imagem inválida, tente novamente!")
        }
        else {setImg(imagem)}
    }


    return (
        <SideBarRender/>
    )
    
    function SideBarRender () {
        return (
            <div className="sidebartop">
                <img src={img} alt="" onClick={()=>mudarImagem()}/>
                <div>
                    <h3><strong>{username}</strong></h3>
                    <div className = "mudar-nome"><h3>{realname}</h3><ion-icon name="pencil-outline" onClick={()=>mudarNome()} /></div>
                </div>
            </div>
        )
    }


}