import React, { useState } from "react";


const ColorList: React.FC = () => {

    let colors: string[] = ['black', 'red', 'orange']


    return (
        <>
        <h1>Colors List</h1>
        <ul>
            {colors.map((color) =>(
                <li>{color}</li>
            ))}
        </ul>


        </>
    )

}

export default ColorList