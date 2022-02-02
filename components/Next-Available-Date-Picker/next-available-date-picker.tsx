import { FC, useEffect, useState } from "react";
import { DataType } from "../../pages/booking";
import RadioOptions from "../Radio-Options/radio-options";

interface NextAvailableDatePickerProps
{
   onDateSelected: any; 
}

const NextAvailableDatePicker: FC<NextAvailableDatePickerProps> = (props) =>
{

   // Mock Data -----------------------------------------------------------------------------------

   const dates = [
      'Wedesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
   ]

   // States --------------------------------------------------------------------------------------

   const [selectedDate, setSelectedDate] = useState(null);

   // React Hooks ---------------------------------------------------------------------------------

   useEffect(() => 
   {
      // TODO: Fetch available dates from server
   });

   // Functions -------------------------------------------------------------------------------

   const selectItem = (date: string) =>
   {
      if (date == selectedDate) return;
      setSelectedDate(date);
      props.onDateSelected(date, DataType.APPT_DATE);
   }

   // Component View ------------------------------------------------------------------------------
   return(
      <div style={{width: '100%', maxWidth: '600px'}}>
         <h1>Next Available Times</h1>
         <p>Select an available time</p>

         <RadioOptions options={dates} onSelect={selectItem}></RadioOptions>
      </div>
   )
}

export default NextAvailableDatePicker;