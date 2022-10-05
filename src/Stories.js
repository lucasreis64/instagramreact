
import naruto from "./images/naruto.jpg"
import sasuke from "./images/sasuke.jpg"
import vila from "./images/vila.jpg"
import ninegag from "./images/9gag.jpeg"
import meowed from "./images/meowed.jpeg"
import barked from "./images/barked.jpeg"
import nathanpyle from "./images/nathanpyle.jpeg"
import wawawiwac from "./images/wawawiwac.jpeg"
import respondeai from "./images/respondeai.jpeg"
import filomoderna from "./images/filomoderna.jpeg"
import memeriago from "./images/memeriago.jpeg"
import fundoStories from "./images/fundoStories.png"

export default function Stories () {
    
    const stories = [
        {source: naruto, p: "naruto"},
        {source: sasuke, p: "sasuke"},
        {source: vila, p: "vila"},
        {source: ninegag, p: "9gag"},
        {source: meowed, p: "meowed"},
        {source: barked, p: "barked"},
        {source: nathanpyle, p: "nathanpyle"},
        {source: wawawiwac, p: "wawawiwac"},
        {source: respondeai, p: "respondeai"},
        {source: filomoderna, p: "filomoderna"},
        {source: memeriago, p: "memeriago"},
    ]

    return (
        <div className="stories" id = 'mudar'>
            {stories.map((s, index)=><ConteudoStories key={index} source={s.source} p={s.p}/>)}
        </div>
    )
}
function ConteudoStories(props){
        return(
        <div>
            <img className="circulostories" src={fundoStories} alt = ""/>
            <img className="imgstories" src={props.source} alt=""/>
            <p>{props.p}</p>
        </div>
        )
}