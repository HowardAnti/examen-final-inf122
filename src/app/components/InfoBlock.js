"use client"

import Image from "next/image";
import { useEffect,useState } from "react";
import style from './InfoBlock.module.css';


function InfoBlock(){
    const[pokemon,setPokemon]=useState("/vercel.svg");
    const[id,setId]=useState("Esperando...");
    
    const[name,setName]=useState("Esperando...");
    const[type,setType]=useState("Esperando...");
    const[type1,setType1]=useState("Esperando...");
    const[height,setHeight]=useState("Esperando...");
    const[weight,setWeight]=useState("Esperando...");
    const[abilities,setAbilities]=useState("Esperando...");
    const[abilities1,setAbilities1]=useState("Esperando...");

    const[HP,setHP]=useState("Esperando...");
    const[attack,setAttack]=useState("Esperando...");
    const[defense,setDefense]=useState("Esperando...");
    const[speed,setSpeed]=useState("Esperando...");

    const url="https://pokeapi.co/api/v2/pokemon/80";

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setPokemon(data.sprites.front_default),
            setId(data.id),
            setName(data.species.name),
            setType(data.types[0].type.name),
            setType1(data.types[1].type.name),
            setWeight(data.weight),
            setHeight(data.height),
            setAbilities(data.abilities[0].ability.name),
            setAbilities1(data.abilities[1].ability.name),
            setHP(data.stats[0].base_stat),
            setAttack(data.stats[1].base_stat),
            setDefense(data.stats[2].base_stat),
            setSpeed(data.stats[5].base_stat)
            
            
        })
    })

    return(
        <div className={style.maincontainer}>
            <div className={style.last}>
            <p className={style.mantitle}>My Pokemon</p>
            <p className={style.maintitle}>{name}</p>
            <p className={style.number}># {id}</p>
            <div className={style.imagecontainer}>
            <img src={pokemon} width={350} height={350}/>
            </div>
            </div>
            <div className={style.infocontainer}>
            <p className={style.title}>About</p>
            <hr/>
                <div className={style.l}>
                <div className={style.info} >
                    <p className={style.subtitle}>Type</p> 
                    <p className={style.subtitle}>Height</p>
                    <p className={style.subtitle}>Weight</p>
                    <p className={style.subtitle}>Abilities</p>
                </div>
                <div>
                    <p className={style.subtitle1}>{type}, {type1}</p>  
                    <p className={style.subtitlen}>{height/10} m</p> 
                    <p className={style.subtitlen}>{weight/10} kg</p> 
                    <p className={style.subtitle1}>{abilities}, {abilities1}</p> 
                </div>
                </div>
            <p className={style.title}>Stats</p>
            <div className={style.l}>
                <div className={style.info}>
                    <p className={style.subtitle}>HP</p> 
                    <p className={style.subtitle}>Attack</p>
                    <p className={style.subtitle}>Defense</p>
                    <p className={style.subtitle}>Speed</p>
                </div>
                <div>
                    <p className={style.subtitle1}>{HP}</p>  
                    <p className={style.subtitle1}>{attack}</p>  
                    <p className={style.subtitle1}>{defense}</p> 
                    <p className={style.subtitle1}>{speed}</p> 
                </div>
                </div>
            
            </div>
        </div>
    )
}

export default InfoBlock;