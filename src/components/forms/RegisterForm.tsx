import { Link } from "react-router-dom";
import {
    Button,
    InputContainer,
    InputField,
    InputLabel,
} from "../../utils/styles";
import styles from "./index.module.scss";

function RegisterForm() {
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField id="email" type="email" />
            </InputContainer>
            <section className={styles.nameFieldRow}>
                <InputContainer>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <InputField id="text" type="firstName" />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <InputField id="text" type="lastName" />
                </InputContainer>
            </section>
            <InputContainer>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField id="password" type="password" />
            </InputContainer>
            <Button className={styles.button}>Create Account</Button>
            <div className={styles.existingUserContainer}>
                <Link to="/login" className={styles.existingUser}>
                    Already have an account?
                </Link>
            </div>
        </form>
    );
}

export default RegisterForm;
