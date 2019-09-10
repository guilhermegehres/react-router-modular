# react-router-modular
A modular way to use react-router

# Exmaple 
 ```jsx
    import React, { Component } from 'react';
    import { RouterModule, Route, AppRouter, Guard } from 'react-router-modular';

    class MyGuard implements Guard{
        canActivate = () => true
    }

    export class App extends Component implements RouterModule {
        routes : Array<Route> = [
            // My component can be another RouterModule with sub routes
            {path : "/my-route", exact: true, component: MyComponent},
            {path : "/my-route/:myParam", exact: true, component: MyComponent},
            {path : "/my-protected-route/:myParam", exact: true, component: MyComponent, guards: [new MyGuard()]},
        ];

        render() {
            return <AppRouter isRoot={true} routes={this.routes} match="" />
        }
    }
```
