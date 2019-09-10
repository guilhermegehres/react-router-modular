var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import uuidv4 from 'uuid/v4';
var AppRouter = (function (_super) {
    __extends(AppRouter, _super);
    function AppRouter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderRoutes = function () {
            return (_this.props.routes.map(function (route) {
                return _this.getRoute(route);
            }));
        };
        return _this;
    }
    AppRouter.prototype.getRoute = function (route) {
        if (route.redirectTo) {
            return <Redirect key={uuidv4()} to={this.props.match + route.redirectTo}/>;
        }
        var path = this.props.match + route.path;
        if (route.guards) {
            return <PrivateRoute key={uuidv4()} path={path} exact={route.exact} component={route.component} guards={route.guards}/>;
        }
        return <Route key={uuidv4()} path={path} exact={route.exact} component={route.component}/>;
    };
    AppRouter.prototype.render = function () {
        if (this.props.isRoot) {
            return <Router>
                    <Switch>
                        {this.renderRoutes()}
                    </Switch>
                </Router>;
        }
        return this.renderRoutes();
    };
    return AppRouter;
}(Component));
export { AppRouter };
