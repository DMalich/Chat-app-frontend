import LoginForm from "../components/forms/LoginForm";
import { Page } from "../utils/styles";

function LoginPage() {
    return (
        <Page display="flex" justifyContent="center" alignItems="center">
            <LoginForm />
        </Page>
    );
}

export default LoginPage;
