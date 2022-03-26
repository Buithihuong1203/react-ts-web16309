import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
    chidren: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const isAuth = true;
    if (!isAuth) {
        return <Navigate to="/login" />

    }
    return props.chidren

}

export default PrivateRouter