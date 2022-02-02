import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Styles from "./radio-options.module.scss"

// Component --------------------------------------------------------------------------------------

function RadioOptions({
   options,
   onSelect
})
{
   // States --------------------------------------------------------------------------------------

   // On Item Click
   // 1. Make solid background
   // 2. Set the option

   const [optionSelected, setOptionSelected] = useState(false);
   const [selectedOption, setSelectedOption] = useState(null);

   // Functions ------------------------------------------------------------------------------

   const selectOption = (selectedOption) => 
   {
      setOptionSelected(true);
      setSelectedOption(selectedOption);
      onSelect(selectedOption);
   }

   const isOptionSelected = (option) =>
   {
      return option === selectedOption;
   }


   // Component View ------------------------------------------------------------------------------

   return(
      <div>
      {     
         options.map(option => (
            /*<div>
               <button type="button" 
                  className={Styles.radioOption} 
                  onClick={() => onSelect(option)}
                  onKeyPress={() => onSelect(option)}>
                  {option}
               </button>   
            </div>    */
           <div>
               <label className={Styles.radioLabel}>   
                  <input type="radio" 
                     value={option}  style={{opacity: 0}}
                     onChange={() => selectOption(option)} 
                     checked={option === selectedOption}>
                  </input>
                  <div>{option}</div>
               </label>
               </div>
            

            
            

            
            
         ))
      }
      </div>
   )
}

export default RadioOptions;