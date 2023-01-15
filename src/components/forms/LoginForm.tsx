import {
    Button,
    InputContainer,
    InputField,
    InputLabel,
} from "../../utils/styles";
import styles from "./index.module.scss";

function LoginForm() {
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField id="email" type="email" />
            </InputContainer>
            <InputContainer className={styles.loginFormPassword}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField id="password" type="password" />
            </InputContainer>
            <Button className={styles.button}>Login</Button>
        </form>
    );
}

export default LoginForm;
