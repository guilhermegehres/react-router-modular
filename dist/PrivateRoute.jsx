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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Component } from "react";
import { Route } from "react-router";
var PrivateRoute = (function (_super) {
    __extends(PrivateRoute, _super);
    function PrivateRoute() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.runGuards = function () {
            for (var i = 0; i < _this.props.guards.length; i++) {
                var guard = _this.props.guards[i];
                if (!guard.canActivate) {
                    throw "a guard must be an instacne of Guard class";
                }
                if (!guard.canActivate()) {
                    return false;
                }
            }
            return true;
        };
        return _this;
    }
    PrivateRoute.prototype.render = function () {
        var _this = this;
        var routeData = __assign({}, this.props);
        var Component = routeData.component;
        var rest = __assign(__assign({}, routeData), { component: undefined });
        return <Route {...rest} render={function (props) { return (_this.runGuards()
            ? <Component {...props}/>
            : <div>not auth</div>); }}/>;
    };
    return PrivateRoute;
}(Component));
export { PrivateRoute };
