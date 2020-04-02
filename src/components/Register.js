import React, {useState} from 'react'
import {Formik,Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import UserServices from '../services/user.service'


const RegisterSchema = Yup.object().shape(
    {
        email: Yup.string().required('required').email('invalid mail'),
        password: Yup.string().required('required'),
        firstName: Yup.string().required('required'),
        lastName: Yup.string().required('required')
    }
)

export default ({tokenCb}) => {
    const [errorText ,setError] = useState(null);

    const register = async(values) => {
        try {
            const token = await UserServices.register(values);
            tokenCb(token);
        }
        catch(err){
            debugger;
            const {error} = await err.response.json();
            setError(error);
        }
    }

    return (
        <Formik
            initialValues={{email:'',password:'',firstName:'',lastName:''}}
            onSubmit={register}
            //for the validation - use yup
            validationSchema = {RegisterSchema}
        >
            <Form>
                <h1>Register Form</h1>                
                <div className="form-group">
                    <Field
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                    />
                    <ErrorMessage 
                        className="alert alert-danger"
                        component = "div"
                        name = "firstName" />
                </div>
                <div className="form-group">
                    <Field
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                    />
                    <ErrorMessage 
                        className="alert alert-danger"
                        component = "div"
                        name = "lastName" />
                </div>
                <div className="form-group">
                    <Field
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name="email"/>
                    <ErrorMessage 
                        className="alert alert-danger"
                        component = "div"
                        name = "email" />
                </div>
                <div className="form-group">
                    <Field
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <ErrorMessage name = "password" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Register</button>
                </div>
                
                {
                    errorText && (
                        <div className="alert alert-danger">
                            {
                                errorText
                            }
                        </div>
                    )
                }

            </Form>
        </Formik>
    )
}