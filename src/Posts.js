//fotos de perfil
import meowed from "./images/meowed.jpeg"
import barked from "./images/barked.jpeg"
import naruto from "./images/naruto.jpg"
import vila from "./images/vila.jpg"

//videos feed
import narutoMP4 from "./videos/narutovideo.mp4"
import narutoOGV from "./videos/narutovideo.ogv"
import ursoMP4 from "./videos/urso.mp4"
import ursoOGV from "./videos/urso.ogv"

//imagens feed
import cachorro from "./images/cachorro.jpeg"
import gato from "./images/gato.jpeg"

import React from "react"



export default function Posts () {
    
    let cont = false;
    const post = [
        {imgPerfil: naruto, nomePerfil: "naruto", imgPost: '' , videoPost: [narutoMP4, narutoOGV], likes: 356198,
        comentarios: [['viladafolha','Esse é o nosso hokage!!!'], ['sasuke','Feio demais.']]},
        {imgPerfil: meowed, nomePerfil: "meowed", imgPost: gato, videoPost: '', likes:  99159,
        comentarios: [['respondeai','Muito esperto!! 💓💓🤗💓💓'], ['filomoderna','Concentrado hahaha 🥰🤗']]},
        {imgPerfil: barked, nomePerfil: "barked", imgPost: cachorro, videoPost: '', likes: 101523,
        comentarios: [['respondeai','Que fofura!! 💓💓🤗💓💓'], ['filomoderna','Ser humaninho mais fofo do mundo 🥰🤗']]},
        {imgPerfil: barked, nomePerfil: "barked", imgPost: '' , videoPost: [ursoMP4, ursoOGV], likes: 152198,
        comentarios: [['respondeai','Demais!'], ['filomoderna','Animal!!!!']]}
    ]
    
    const postMap = post.map((p)=><PostConteudo imgPerfil = {p.imgPerfil} nomePerfil = {p.nomePerfil} imgPost = {p.imgPost} 
    videoPost ={p.videoPost} likes = {p.likes} comentarios = {p.comentarios} />)


    
    function PostConteudo(props){
        const [likeBotao, setLikeBotao] = React.useState(<ion-icon name="heart-outline" onClick = {()=>likeContador()}></ion-icon>) 
        const [like, setLike] = React.useState(props.likes)
        const comentarioMap = props.comentarios.map((c) => <RenderComentario comentarios = {c} /> )
        let conteudoPost = '';
        
        function likeContador() {
            if (cont === false) {
                setLike(like + 1)
                setLikeBotao(<ion-icon onClick = {()=>likeContador()} class = "vermelho" name="heart"></ion-icon>)
                cont = true
            }
            else {setLike(like); cont = false; setLikeBotao(<ion-icon name="heart-outline" onClick = {()=>likeContador()}></ion-icon>)}
        }

        function likeContadorPost() {
            if (cont === false) {
                setLike(like + 1)
                setLikeBotao(<ion-icon onClick = {()=>likeContador()} class = "vermelho" name="heart"></ion-icon>)
                cont = true
            }
        }

        function RenderVideo (props) {
        
            console.log(props.video)
            return(
            <video onClick = {()=>likeContadorPost()} loop="loop" autoPlay muted>
                <source src={props.video[0]} type="video/mp4" />
                <source src={props.video[1]} type="video/ogv" />
            </video>
            )
        }
        
        function RenderImage (props) {
            console.log(props.image)
            return <img onClick = {()=>likeContadorPost()} src={props.image} alt=""/>
        }
            
        function RenderComentario (props) {
            console.log(props.comentarios)
            
            return(
            <div class="comentario">
                <p>
                <strong>{props.comentarios[0]} </strong>
                {props.comentarios[1]}
                </p>
                <ion-icon name="heart-outline"></ion-icon>
            </div>
            )
        }

        if (props.videoPost === '') {conteudoPost = <RenderImage image = {props.imgPost}/>}
        else {conteudoPost = <RenderVideo video = {props.videoPost}/> }
        return (
            <div class="post">
                <div class="posttop">
                    <div>
                        <img src={props.imgPerfil} alt = ""/>
                        <h3><strong>{props.nomePerfil}</strong></h3>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                {conteudoPost}
                <div class="postbottom1">
                    <div>
                        {likeBotao}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="postbottom2">
                    <img src={vila} alt=""/>
                    <h3>Curtido por <strong>viladafolha</strong> e outras <strong>{like.toLocaleString('pt-BR')} pessoas</strong></h3>
                </div>
                {comentarioMap}
                <div class="comentar">
                    <div>
                        <ion-icon name="happy-outline"></ion-icon>
                        <input
                        class="comentarinput"
                        type="text"
                        placeholder="Adicione um comentário..."/>
                    </div>
                    <h2 class="publicar">Publicar</h2>
                </div>
            </div>
        )
    }

    return (
        <div class="feed">
            {postMap}
        </div>
    )
}

