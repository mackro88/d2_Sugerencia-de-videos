"use strict";
import {Player} from './multimedia.js';

const musica = new Player("https://www.youtube.com/embed/CfbTPqhxURY","musica")
const peliculas = new Player("https://www.youtube.com/embed/eDaNejmf-1A","peliculas")
const series = new Player("https://www.youtube.com/embed/7CeeroWynyI","series")

musica.setStart(50)

console.log(musica.url)
console.log(peliculas.url)
console.log(series.url)

document.getElementById('cat_musica').addEventListener('click', () => {
    musica.playMultimedia()
})
document.getElementById('cat_peliculas').addEventListener('click', () => {
    peliculas.playMultimedia()
})
document.getElementById('cat_series').addEventListener('click', () => {
    series.playMultimedia()
}) 
