import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import AppointmentSummary from "../components/AppointmentSummary/appointment-summary";
import NextAvailableDatePicker from "../components/Next-Available-Date-Picker/next-available-date-picker";
import PersonalInfoForm from "../components/PersonalInfoForm/personal-info-form";
import PurposeForm from "../components/Purpose-Form/purpose-form";
import Styles from "../styles/booking.module.scss";



// Component --------------------------------------------------------------------------------------

function Booking()
{

   // States --------------------------------------------------------------------------------------

   const [isNextDisabled, setIsNextDisabled] = useState(true);
   const [isPurposeSelected, setIsPurposeSelected] = useState(false);
   const [step, setStep] = useState(1);
   const [backButtonText, setBackButtonText] = useState("Exit");

   const [userInfo, setUserInfo] = useState(null);
   const [appointmentDetails, setAppointmentDetails] = useState(new Appointment);
   const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);
   const [showFormNavControls, setShowFormNavControls] = useState(true);


   // React Hooks ----------------------------------------------------------------------

   useEffect(() => {
      window.addEventListener("beforeunload", alertUser);
      return () => {
        window.removeEventListener("beforeunload", alertUser);
      };
    }, []);

   // Events -------------------------------------------------------------------------------------

   const alertUser = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

   const enableNextButton = () =>
   {
      setIsNextDisabled(false);
   }

   const disableNextButton = () =>
   {
      setIsNextDisabled(true);
   }

   const incrementStep = () =>
   {
      let currentStep = step;
      setStep(++currentStep);

      if (backButtonText == "Exit")setBackButtonText("Back");

      setIsNextDisabled(true);
   }

   const decrementStep = () =>
   {
      if (step == 1)
      {
         setBackButtonText("Exit");
         return;
      }
      let currentStep = step;
      setStep(--currentStep);
   }

   const setAppointmentDetailsState = (data: any, dataType: string) =>
   {
      if (data != null)
      {
         enableNextButton();
         
         let appt = appointmentDetails

         switch (dataType)
         {
            case DataType.APPT_TYPE:
               appt.type = data;
               break;
            case DataType.APPT_DATE:
               appt.time = data;
               break;
            case DataType.USER_INFO:
               data = JSON.parse(data);
               appt.name = data.name;
               appt.email = data.email;
               break;
            default:
               break;
         }

         setAppointmentDetails(appt);
      }
   }

   const showBookingConfirmed = () =>
   {
      setShowFormNavControls(false);
      setShowBookingConfirmation(true);
   }

   
   // Component View ------------------------------------------------------------------------------

   return(
      <div >
         <h6>Step {step} of 4</h6>
         <div >
         
         { 
            (step == 1) &&
            <PurposeForm onPurposeSelected={setAppointmentDetailsState}></PurposeForm> 
         }
         {
            (step == 2) &&
            <NextAvailableDatePicker onDateSelected={setAppointmentDetailsState}></NextAvailableDatePicker>   
         }
         {
            (step == 3) &&
            <PersonalInfoForm 
               onValidForm={enableNextButton} 
               onInvalidForm={disableNextButton}
               passFormDataToParent={setAppointmentDetailsState} >   
            </PersonalInfoForm>
         }
         {
            (step == 4) &&
            <AppointmentSummary apptDetails={appointmentDetails}></AppointmentSummary>
         }
         {
            (showBookingConfirmation) &&
            <Alert variant="success" style={{borderRadius: '1em'}}>
               <FontAwesomeIcon icon={["fas", "check"]}/>
               <Alert.Heading>Appointment Confirmed!</Alert.Heading>
               <p>
                  Your appointment has been successfully booked.
                  A confirmation has been sent to your email.
               </p>
            </Alert>
         }

         </div>
      

        
         { (showFormNavControls) &&
         <div style={{display: 'flex', justifyContent: 'flex-start', marginTop: '1.5em'}}>
            { 
            (step < 4) &&
            <button className={Styles.nextButton}
               style={{padding: '0.5em 1em', width: '8em', borderRadius: '2em'}}  
               disabled={isNextDisabled} 
               onClick={incrementStep}>
               Next
            </button>
            }   
            {
               (step == 4) &&
               <button
               style={{padding: '0.5em 1em', width: '15em', borderRadius: '2em'}}  
               onClick={showBookingConfirmed}>
                  Book this appointment
               </button>

            }  
            <button style={{borderStyle: 'none', marginLeft: '1.5em', backgroundColor: 'transparent'}}
               onClick={decrementStep}>
               {backButtonText}
            </button>
         </div>  
         }         
   
      </div>
   )
}

export default Booking

export class Appointment
{
   type: string;
   time: string;
   name: string;
   email: string;
}

export class DataType
{
   public static APPT_TYPE = 'appt_type';
   public static USER_INFO = 'user_info';
   public static APPT_DATE = 'appt_date';
}