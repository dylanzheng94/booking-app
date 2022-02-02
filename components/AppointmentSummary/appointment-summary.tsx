import { FC, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Appointment } from "../../pages/booking";
import DisplayField from "../DisplayField/display-field";
import Styles from "./appointment-summary.module.scss"

interface IAppointmentSummaryProps
{
    apptDetails: Appointment
}

const AppointmentSummary: FC<IAppointmentSummaryProps> = (props) =>
{
    // Component View -----------------------------------------------------------------------------

    return(
        <div>
            <h1>Review your appointment details</h1>

            <div className={'card shadow-sm p-3 mb-5 bg-white'} style={{padding: '1em', borderRadius: '1em', marginTop: '1em'}}>
                
                <Row>
                    <Col sm style={{marginTop: '1em'}}>
                        <h5 className={Styles.subheading}>Appointment</h5>
                        
                        <DisplayField label="Purpose of appointment" value={props.apptDetails.type}></DisplayField>
                        <DisplayField label="Date and time" value={props.apptDetails.time}></DisplayField>
                    </Col>
               
                    <Col sm style={{marginTop: '1em'}}>
                        <h5 className={Styles.subheading}>Personal Info</h5>

                        <DisplayField label="Name" value={props.apptDetails.name}></DisplayField>
                        <DisplayField label="Email" value={props.apptDetails.email}></DisplayField>
                    </Col>
                </Row>
            </div>
            
        </div>
    )
}

export default AppointmentSummary;

