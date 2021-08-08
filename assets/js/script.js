"use strict";

//import Player from "./multimedia.js";

class Multimedia{
    constructor(url){
        this.url = url
    }
    get url(){
        return this.url
    }
    setStart(){
        console.log("Este método es para realizar un cambio en la URL del video")
    }
}
class Player extends Multimedia{
    constructor(url,id){
        super(url)
        this.id = id
    }
    playMultimedia(){
        const category = document.getElementById(this.id)
        category.setAttribute("src", this.url)
    }
    setStart(time){
        super.url += `?start=${time}`
    }
}

const musica = new Player("https://www.youtube.com/embed/CfbTPqhxURY","musica")
const peliculas = new Player("https://www.youtube.com/embed/eDaNejmf-1A","peliculas")
const series = new Player("https://www.youtube.com/embed/7CeeroWynyI","series")



document.getElementById('collapseOne').addEventListener("click", () => {
    musica.playMultimedia()
})
document.getElementById('collapseTwo').addEventListener("click", () => {
    peliculas.playMultimedia()
})
document.getElementById('collapseThree').addEventListener("click", () => {
    series.playMultimedia()
})