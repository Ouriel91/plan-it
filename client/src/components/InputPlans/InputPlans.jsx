import { useState } from "react";
import "./InputPlans.css";
import { Button } from "monday-ui-react-core";

const InputPlans = ({props}) =>{
    const [inputValue,setInputValue] =  useState("");

    const handleInputValue = (event) =>{
        setInputValue(event.target.value)
    }
    const handleButtonClick = async() =>{
        try {
            if(inputValue === ""){
              alert("Error Invalid empty Input ")
            }
            setInputValue("");
        }catch (error) {
            alert("Error To Render While Button Clicked")
        }
    }

    return (
        <div className="divInputPlans" >
            <div>
                <input 
                    type="text"
                    className="plansInput"
                    onChange={handleInputValue}
                    value={inputValue}
                    placeholder ="Enter New Event"
                />
                <Button 
                    className="button button-87"  
                    type="button" onClick={handleButtonClick}>
                        ADD EVENT
                </Button>
            </div>
        </div>
    )
 } 

export default InputPlans;