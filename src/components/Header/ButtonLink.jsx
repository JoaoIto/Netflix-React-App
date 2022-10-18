import React from "react";

export default function ButtonLink(props){
    console.log(props);
    return (
        <a href={props.href} className="text-center bg-red-600 text-white w-80 p-3 rounded-xl ease-in duration-300 hover:bg-red-700">Adicionar</a>
    )
}