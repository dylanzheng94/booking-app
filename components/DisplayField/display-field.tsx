import { FC } from "react";
import Styles from "./display-field.module.scss"

interface IDisplayFieldProps
{
    label: string;
    value: string;
}

// Component --------------------------------------------------------------------------------------

const DisplayField: FC<IDisplayFieldProps> = (props) =>
{
    return(
        <div>
            <label className={Styles.label}>{props.label}</label>
            <p className={Styles.value}>{props.value}</p>
        </div>
    )
}

export default DisplayField;