import {useFormik} from "formik";
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const formvalidationSchema=yup.object({
  password: yup.string().min(8,"need a better password").max(12,"maximum 12 characters only").required("why not fill the password"),
  email: yup.string().min(5,"need a better email").required("why not fill the email")
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Pattern not matched"),

})




export function BasicForm() {
  const formik= useFormik({
    initialValues: {email:"",password:""},
    validationSchema: formvalidationSchema,
  onSubmit:(values) => { 
      console.log("onSubmit: ",values);
      }
  })
  return(
   
  <form onSubmit={formik.handleSubmit}>


    <TextField 
    id="name"
    name="email"
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error
    helperText="Incorrect entry."
   
 
    type="email" placeholder="Email" />
     <br/>
     {formik.errors.email  && formik.touched.email ? formik.errors.email:""}
       <br/>
    <br/>



    < TextField id="password"
    name="password" value={formik.values.password}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error
    helperText="Incorrect entry."
    type="password" placeholder="Password" />
    <br />
 
    {formik.errors.password  && formik.touched.password ? formik.errors.password:""}<br/>


    <button type="submit">Submit</button>
  </form>
  )
}
