import React, { Component } from "react";
import { Route } from "react-router";
import { Guard } from "./Route";

export class PrivateRoute extends Component<PrivateRouteProps> {
    runGuards = (): boolean => {
        for(let i = 0;i< this.props.guards.length; i++){
            const guard = this.props.guards[i];
            if(!guard.canActivate){
                throw "a guard must be an instacne of Guard class"
            }
            if(!guard.canActivate()){
                return false;
            }
        }
        return true;
    }
    render() {
        const routeData = {...this.props}
        const Component = routeData.component;
        const rest = {...routeData, component : undefined};
        return <Route {...rest} 
            render={(props) => (
                this.runGuards() 
                ? <Component {...props} />
                : <div>not auth</div>
                // : <Redirect to='/login' />
            )} />
    }
}

interface PrivateRouteProps{
    path: string;
    exact: boolean | undefined;
    component: any;
    guards: Array<Guard>
}