import { proxy } from 'valtio'

const state = proxy({
    intro : true,
    color : '#FCA642',
    isLogoTexture : true,
    isFullTexture : false,
    logoDecal : "./vite.svg ",
    fullDecal : "./t_background.jpg",
})

export default state