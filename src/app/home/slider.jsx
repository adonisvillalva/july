"use client";
import {useState, useEffect} from 'react';

import img_1 from "/public/img/demo1.jpg"
import img_2 from "/public/img/demo2.png"
import Image from 'next/image'
export default function Slider(){
    const images = [img_1, img_2]
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images);
    useEffect(() => {
        const interval = setInterval(() =>{
            if(selectedIndex == images.length)
                setSelectedIndex(0);
            else{
                setSelectedImage(images[selectedIndex]);
                setSelectedIndex(selectedIndex + 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    })
    return(
        <section className="slider-content flex flex-row items-center">
            <section className='basis-1/2'>
                <div className="content">
                    <h1>Hola, soy Julyssa Armas y esto es Disney Channel</h1>
                    <p>Bienvenido a mi portafolio, espero que te guste mis trabajos :D</p>
                </div>
            </section>
            <section className='slider basis-1/2'>
                <Image src={selectedImage} alt="imagen de presentación"/>
            </section>
        </section>
    )
  }