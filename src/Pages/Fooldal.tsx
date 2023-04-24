import React, { Component} from "react";

export default class Fooldal extends Component{
    render(){
        return(
            <div>
                <div>
                <h1 style={{alignItems:"center"}}>Üdvözöllek a PetrikGaming weboldalán!</h1>
                <button style={{textAlign:"center"}}>
                            <a href="http://example.com/petrikgaming.apk">A játék letöltéséhez kattints ide.</a>
                        </button>
                <p>Ha nem tudod, miről szól a játék, vagy hibát szeretnél bejelenti, válassz a fenti lehetőségek közül!</p>
                </div>
               
                
            <img src="/mobile-gaming-clipart-xl.png" alt="PetrikGaming" style={{width:"100%", height:"auto"}}></img>
        </div>
        
        )
    }

   

}