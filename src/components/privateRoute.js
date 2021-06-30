import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

function PrivateRoute({component, ...rest}) {
    const isAuthenticated = useSelector(state => state.list.isAuthenticated);
    const Component = component;
    if (Component != null) {
        return (
            <Route {...rest} render = {
                (props) => (
                    isAuthenticated ? (<Component {...props}/>) : (<Redirect to = '/login'/>)
                    )} />
            )
    } else {
        return null;
    }
};
export default PrivateRoute