import { FC, useEffect, useState } from "react";
import { DataType } from "../../pages/booking";
import PurposeItem from "../Purpose-Item/purpose-item";
import RadioOptions from "../Radio-Options/radio-options";

interface PurposeFormProps
{
   onPurposeSelected: any;
}

// Component --------------------------------------------------------------------------------------

const PurposeForm: FC<PurposeFormProps> = (props) =>
{
  

   const purposes = [
      'Citizenship Test',
      'Get police check',
      'Get biometrics'
   ]

   const SelectItem = (purpose: string) =>
   {
      if (purpose == selectedPurpose) return;
      console.log("Item selected: " + purpose);
      setSelectedPurpose(purpose);
      props.onPurposeSelected(purpose, DataType.APPT_TYPE);
   }

   // States --------------------------------------------------------------------------------------

   const [selectedPurpose, setSelectedPurpose] = useState(null);

   // React Hooks ---------------------------------------------------------------------------------

   useEffect(() => 
   {
      // Fetch initial data
   }, []);

   // Component View ------------------------------------------------------------------------------

   return(
      <div style={{width: '100%', maxWidth: '600px'}}>
        
         <h1>Select your appointment purpose</h1>
         
         <RadioOptions options={purposes} onSelect={SelectItem}/>
                       
      </div>
   );
}

export default PurposeForm;