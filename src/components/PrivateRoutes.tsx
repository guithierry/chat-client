import { Redirect, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute({
    path,
    component: Component,
}: {
    path: string;
    component: any;
}) {
    const {
        responseObject: { tokenObj },
    } = useAuth();

    if (!tokenObj) {
        return <Redirect to={{ pathname: "/" }} />;
    }

    return <Route path={path} component={Component} />;
}
