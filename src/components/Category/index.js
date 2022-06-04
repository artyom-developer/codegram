import React from 'react'
import{Anchor,Image}from './styles'
const DEFAULT_IMAGE = 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dfa60b9b2c3943fbbaa9ad1e016919a2_9366/Tenis_EQ21_Run_Azul_H00517_04_standard.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) =>(
   <Anchor href={path} >
       <Image src={cover} />
       { emoji }
   </Anchor>
)