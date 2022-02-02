import { Field, Formik, FormikConfig, useFormik, yupToFormErrors } from "formik";
import { initScriptLoader } from "next/script";
import { FC, useState } from "react";
import * as Yup from 'yup';
import { DataType } from "../../pages/booking";

// Interfaces -------------------------------------------------------------------------------------

interface IFormValues
{
    name: string;
    email: string;
}

const FormSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(50, "Must be 50 characters of less")
    .required('Required'),
    email: Yup.string()
    .email('Invalid email')
    .required('Required')
})

interface IPersonalInfoFormProps
{
    onValidForm: any;
    onInvalidForm: any;
    passFormDataToParent: any;
}

// Component --------------------------------------------------------------------------------------

const PersonalInfoForm: FC<IPersonalInfoFormProps> = (props) =>
{
    const initialFormValues: IFormValues = 
    {
        name: '',
        email: '',
    }

    const formik = useFormik(
        {
            initialValues: initialFormValues,
            validationSchema: FormSchema,
            onSubmit: values => console.log(values),
            enableReinitialize: true,
            isInitialValid: false
        }
    )

    // States -------------------------------------------------------------------------------------

    const [formData, setFormData] = useState(null);

    const onSubmit = () => 
    {
        console.log("submitted");
    }

    const formIsValid = () => {return Object.keys(formik.errors).length == 0};

    const checkIfFormIsComplete = (e) => 
    {
        
        console.log(formik.touched)
        formik.handleBlur(e);
        formik.handleChange(e);
        console.log(e.target.value);
        console.log(formik.values);
        console.log(formik.errors);

        if (!formik.errors.name && !formik.errors.email && Object.keys(formik.touched).length == 2)
        {
            formik.handleSubmit(e);
            console.log("-- We can enable next button");
            props.onValidForm();
            console.log(formik.values);
            //props.passFormDataToParent(JSON.stringify(formik.values));
        }
        else
        {
            console.log("-- We need to disable the next button");
            props.onInvalidForm();
        }

                

    }

    const sendDataToParent = (e) => 
    {
        if (formik.isValid)
        props.passFormDataToParent(JSON.stringify(formik.values), DataType.USER_INFO);
    }


    // Component View -----------------------------------------------------------------------------
return (
<>
        <h1>
            Enter Your Information
        </h1>
        <Formik 
            initialValues={initialFormValues} 
            validationSchema={FormSchema}
            onSubmit={onSubmit}
        >
        <form style={{marginTop: '2em'}}>
            
            <div style={{marginTop: '1em'}}>
                <label>
                    <div>Full name {formik.touched.name && formik.errors.name ? <span style={{color: 'red'}}>{formik.errors.name}</span> : null}</div>
                    <input type="text" 
                        name="name" 
                        onChange={(e) => {checkIfFormIsComplete(e)}} 
                        onBlur={(e) => sendDataToParent(e)}
                        value={formik.values.name}>
                    </input>
                </label>
            </div>

            <div style={{marginTop: '1em'}}>
                <label>
                    <div>Email {formik.touched.email && formik.errors.email ? <span style={{color: 'red'}}>{formik.errors.email}</span> : null}</div>
                    <input type="email" 
                        name="email" 
                        onChange={(e) => {checkIfFormIsComplete(e)} }
                        onBlur={(e) => {sendDataToParent(e)}}
                        value={formik.values.email}>
                    </input>
                </label>
            </div>


        </form>
        </Formik>
        </>
    )

}
export default PersonalInfoForm;