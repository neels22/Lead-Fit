import { useState } from "react";

import Header from './Header'
import { Button } from "./Button";
export function HeaderWithButton() {
    
    const [title,setTitle] = useState("neels")

    function updateTitle() {
        setTitle(Math.random())
      }

    return (
        <>
        
        <Button updateTitle={updateTitle} ></Button>

            <Header title={title} ></Header>

            <Header title="hi"></Header>
            <Header title="hi"></Header>
            <Header title="hi"></Header>
            <Header title="hi"></Header>
            <Header title="hi"></Header>
            <Header title="hi"></Header>
        
        </>
    )

}