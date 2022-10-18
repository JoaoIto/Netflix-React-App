import React from "react";
import ButtonLink from "./ButtonLink";
import Logo from "../Logo/Logo";

export default function Header(){
    return (
        <header className="h-1/3 flex flex-col items-center justify-evenly p-8">
        <Logo/>
        <h2 className="text-2xl text-white font-bold">Quer adicionar seu filme?</h2>
       <ButtonLink href="/"></ButtonLink>
        </header>
    )
}