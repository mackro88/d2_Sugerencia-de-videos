"use strict";
export class Multimedia{
    #url;
    constructor(url){
        this.#url = url
    }
    get url(){
        return this.#url
    }
    set url(startTime){
        this.#url = startTime
    }
    setStart(){
        console.log("Este método es para realizar un cambio en la URL del video")
    }
}
export class Player extends Multimedia{
    constructor(url,id){
        super(url)
        this.id = id
    }
    playMultimedia(){
        const category = document.getElementById(this.id)
        console.log(category)
        category.setAttribute("src", this.url)
    }
    setStart(time){
        super.url += `?start=${time}`
    }
}