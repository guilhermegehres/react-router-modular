System.register(["react", "react-router-dom", "./PrivateRoute", "uuid/v4"], function (exports_1, context_1) {
    "use strict";
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
    var react_1, react_router_dom_1, PrivateRoute_1, v4_1, AppRouter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_router_dom_1_1) {
                react_router_dom_1 = react_router_dom_1_1;
            },
            function (PrivateRoute_1_1) {
                PrivateRoute_1 = PrivateRoute_1_1;
            },
            function (v4_1_1) {
                v4_1 = v4_1_1;
            }
        ],
        execute: function () {
            AppRouter = (function (_super) {
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
                        return react_1["default"].createElement(react_router_dom_1.Redirect, { key: v4_1["default"](), to: this.props.match + route.redirectTo });
                    }
                    var path = this.props.match + route.path;
                    if (route.guards) {
                        return react_1["default"].createElement(PrivateRoute_1.PrivateRoute, { key: v4_1["default"](), path: path, exact: route.exact, component: route.component, guards: route.guards });
                    }
                    return react_1["default"].createElement(react_router_dom_1.Route, { key: v4_1["default"](), path: path, exact: route.exact, component: route.component });
                };
                AppRouter.prototype.render = function () {
                    if (this.props.isRoot) {
                        return react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
                            react_1["default"].createElement(react_router_dom_1.Switch, null, this.renderRoutes()));
                    }
                    return this.renderRoutes();
                };
                return AppRouter;
            }(react_1.Component));
            exports_1("AppRouter", AppRouter);
        }
    };
});
