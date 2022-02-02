function reducer(state = [], action)
{
   if (action.type === 'selectedApptPurpose')
   {
      return [
         ...state, // Copy everything in current state
         {
            apptPurpose: action.payload.apptPurpose
         }
      ]
   }
   else if (action.type === 'selectedApptDate')
   {
      return [
         ...state,
         {
            apptDate: action.payload.apptDate
         }
      ]
   }

   return state;
}

export default reducer;