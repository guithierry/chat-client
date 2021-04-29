import { BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoutes";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans JP', sans-serif;
        /* font-family: 'Open Sans', sans-serif; */
    }

    :root {
        --background-one: #202225;
        --background-two: #2F3136;
        --background-three: #36393F;
        --background-four: #393C43;
        --background-five: #232528;
        --background-input: #40444B;
        --logout: #F04747;
    }
`;

export default function App() {
    return (
        <>
            <GlobalStyles />
            <AuthProvider>
                <BrowserRouter>
                    <Route exact path="/" component={Register} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}
