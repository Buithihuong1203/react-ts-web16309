import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


type Inputs = {
    email: string,
    password: string
}
type SignInProps = {
    onSignIn: (user: Inputs) => void
}


const Signin = (props: SignInProps) => {
    const { register, handleSubmit, formState: { } } = useForm<Inputs>()
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        props.onSignIn(dataInput);
        navigate("/signin");
    }



    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>


    )
}

export default Signin