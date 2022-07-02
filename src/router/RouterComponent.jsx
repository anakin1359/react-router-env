import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const RouterComponent = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route
                path="/page1"
                render={({ match: {url} }) => (
                    <Switch>
                        {page1Routes.map((routeProps) => (
                            <Route
                                key={routeProps.path}
                                exact={routeProps.exact}
                                path={`${url}${routeProps.path}`}
                            >
                                {routeProps.children}
                            </Route>
                        ))}
                    </Switch>
                )}
            />

            <Route
                path="/page2"
                render={({ match: {url} }) => (
                    <Switch>
                        {page2Routes.map((routeProps) => (
                            <Route
                                key={routeProps.path}
                                exact={routeProps.exact}
                                path={`${url}${routeProps.path}`}
                            >
                                {routeProps.children}
                            </Route>
                        ))}
                    </Switch>
                )}
            />

            {/* 404 Not Found */}
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
}