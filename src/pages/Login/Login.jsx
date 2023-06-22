import "./Login.css"
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from 'yup'
import { login } from "../../Store/Slices/LoginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // ----- useNavigate hook here ---
  const navigate =  useNavigate();  
  // ------- useDispatch hook here --
  const dispatch = useDispatch();

   let initialValues ={
        email:"",
        password:""
    }

     const {values,errors,touched,handleSubmit,handleChange,handleBlur} = useFormik({
        initialValues,
        validationSchema:Yup.object({
            email:Yup.string().email("enter valid email").required("email required"),
            password:Yup.string().min(5).max(25).required("password required")
        }),
        onSubmit:(values)=>{
          dispatch(login(true))
          navigate("/home")
        }
     })
    
 
  return (
   <>
     <div className="Login flex justify-center">
         <div className="loginContainer">
             <h3>Log<span>in</span></h3>
             <form onSubmit={handleSubmit}>
                 <div className="input-filed">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Enter your email" id="email" value={values.email}  onChange={handleChange} onBlur={handleBlur}/>
                    {touched.email && errors.email?<p className="error">{errors.email}</p>:null}
                 </div>
                 <div className="input-filed">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter your password" value={values.password} id="password" onChange={handleChange} onBlur={handleBlur} name="password"/>
                    {touched.password && errors.password?<p className="error">{errors.password}</p>:null}
                 </div>
                 <button className="login-btn" type="submit">Login</button>
             </form>
         </div>
     </div>
   </>
  )
}

export default Login