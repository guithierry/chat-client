import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import { GoogleLogin } from "react-google-login";
import { GoogleResponse } from "../../types";

export default function Register() {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID as string;

    const { handleResponseObject } = useAuth();
    const history = useHistory();

    const handleSuccess = (response: any) => {
        const { tokenObj, profileObj } = response as GoogleResponse;

        handleResponseObject({ tokenObj, profileObj });
        return history.push("/dashboard");
    };

    const handleFailure = (response: any) => {
        console.log(response);
    };

    return (
        <Container>
            <div>
                <h1>Welcome to the chat</h1>
                <p>Log in and start to talk</p>
            </div>
            <GoogleLogin
                clientId={CLIENT_ID}
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                buttonText="Sign in with Google"
            />
        </Container>
    );
}
