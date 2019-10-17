# react-router-modular
A modular way to use react-router

# Simple Example 
 ```jsx
    import React, { Component } from 'react';
    import { RouterModule, Route, AppRouter, Guard } from 'react-router-modular';

    class MyGuard implements Guard{
        canActivate = () => true
    }

    export class AppModule extends Component implements RouterModule {
        routes : Array<Route> = [
            {path : "/my-route", exact: true, component: MyComponent},
            {path : "/my-route/:myParam", exact: true, component: MyComponent},
            {path : "/my-protected-route", exact: true, component: MyComponent, guards: [new MyGuard()]},
            // Note: routes with redirectTo params must be de last items of routes array
            {path : "", exact: true, redirectTo: 'my-route'},
            {path : "/any-thing", exact: true, redirectTo: 'my-protected-route'},
        ];

        render() {
            return <AppRouter isRoot={true} routes={this.routes} match="" />
        }
    }
```

# Child Module
 ```jsx
    import React, { Component } from 'react';
    import { RouterModule, Route, AppRouter } from 'react-router-modular';
    import { withRouter, RouteComponentProps } from 'react-router';

    export class AppModule extends Component implements RouterModule {
        routes : Array<Route> = [
            {path : "/my-route", exact: true, component: ChildModule},
        ];

        render() {
            // Note: isRoot param is only for root module and must be true
            return <AppRouter isRoot={true} routes={this.routes} match="" />
        }
    }

    class ChildModuleClass extends Component<RouteComponentProps> implements RouterModule {
        routes : Array<Route> = [
            {path : "/my-child-route", exact: true, component: AnyComponent},
        ];

        render() {
            return <AppRouter routes={this.routes} match={this.props.match.path} />
        }
    }

    export const ChildModule = withRouter(ChildModuleClass);
```
