import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { Route as CustomRoute } from './Route';
import uuidv4 from 'uuid/v4'

export class AppRouter extends Component<AppRouterProps>{

    private getRoute(route : CustomRoute){
        if(route.redirectTo){
            return <Redirect key={uuidv4()} to={this.props.match + route.redirectTo} />
        }
        const path = this.props.match + route.path;
        if(route.guards){
            return <PrivateRoute key={uuidv4()} path={path} exact={route.exact} component={route.component} guards={route.guards}/>
        }
        return <Route key={uuidv4()} path={path} exact={route.exact} component={route.component} />
    }

    private renderRoutes = () => {
        return (
            this.props.routes.map((route : CustomRoute) => {
                return this.getRoute(route);
            })
        )
    }

    render(){
        if(this.props.isRoot){
            return <Router>
                    <Switch>
                        {this.renderRoutes()}
                    </Switch>
                </Router>
        }
        return this.renderRoutes();
    }
}

interface AppRouterProps{
    routes: CustomRoute[];
    match: string;
    isRoot?: boolean;
}