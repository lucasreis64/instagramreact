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
    
    const postMap = post.map((p, index)=><PostConteudo key={index} imgPerfil = {p.imgPerfil} nomePerfil = {p.nomePerfil} imgPost = {p.imgPost} 
    videoPost ={p.videoPost} likes = {p.likes} comentarios = {p.comentarios} />)


    
    function PostConteudo(props){
        const coracaoPreenchido = <ion-icon onClick = {()=>likeContador()} className = "vermelho" name="heart"></ion-icon>
        const coracao = <ion-icon name="heart-outline" onClick = {()=>likeContador()}></ion-icon>
        const savePreenchido = <ion-icon onClick = {()=>savePreenchimento()} name="bookmark"></ion-icon>
        const save = <ion-icon onClick = {()=>savePreenchimento()} name="bookmark-outline"></ion-icon>
        
        let [saveBotao, setSaveBotao] = React.useState(false)
        let [likeBotao, setLikeBotao] = React.useState(false) 
        let [like, setLike] = React.useState(props.likes)
        const comentarioMap = props.comentarios.map((c, index) => <RenderComentario key={index} comentarios = {c} /> )
        let conteudoPost = '';
        
        function savePreenchimento() {
            if (saveBotao === false) {
                setSaveBotao(true)
            }
            else {setSaveBotao(false)}
        }

        function likeContador() {
            console.log(likeBotao)
            if (likeBotao === false) {
                setLike(like + 1)
                setLikeBotao(true)

            }
            else {setLike(like - 1);  setLikeBotao(false);}
        }

        function likeContadorPost() {
            if (likeBotao === false) {
                setLike(like + 1)
                setLikeBotao(true)
            }
        }

        function RenderVideo (props) {
            return(
            <video onClick = {()=>likeContadorPost()} loop="loop" autoPlay muted>
                <source src={props.video[0]} type="video/mp4" />
                <source src={props.video[1]} type="video/ogv" />
            </video>
            )
        }
        
        function RenderImage (props) {
            return <img onClick = {()=>likeContadorPost()} src={props.image} alt=""/>
        }
            
        function RenderComentario (props) {
            return(
            <div className="comentario">
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
            <div className="post">
                <div className="posttop">
                    <div>
                        <img src={props.imgPerfil} alt = ""/>
                        <h3><strong>{props.nomePerfil}</strong></h3>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                {conteudoPost}
                <div className="postbottom1">
                    <div>
                        {likeBotao ? coracaoPreenchido : coracao}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    {saveBotao ? savePreenchido : save}
                </div>
                <div className="postbottom2">
                    <img src={vila} alt=""/>
                    <h3>Curtido por <strong>viladafolha</strong> e outras <strong>{like.toLocaleString('pt-BR')} pessoas</strong></h3>
                </div>
                {comentarioMap}
                <div className="comentar">
                    <div>
                        <ion-icon name="happy-outline"></ion-icon>
                        <input
                        className="comentarinput"
                        type="text"
                        placeholder="Adicione um comentário..."/>
                    </div>
                    <h2 className="publicar">Publicar</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="feed">
            {postMap}
        </div>
    )
}

