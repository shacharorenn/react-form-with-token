import React from 'react'
import {Formik,Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import UserServices from '../services/user.service'
const LoginSchema = Yup.object().shape(
    {
        email: Yup.string().required('required').email('invalid mail'),
        password: Yup.string().required('required')
    }
)

export default ({tokenCb}) => {

    const login = async(values) => {
        const token = await UserServices.login(values);
        tokenCb(token);
    }

    return (
        <Formik
            initialValues={{email:'',password:''}}
            onSubmit={login}
            //for the validation - use yup
            validationSchema = {LoginSchema}
        >
            <Form>
                <h1>Login Form</h1>
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
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </Form>
        </Formik>
    )
}