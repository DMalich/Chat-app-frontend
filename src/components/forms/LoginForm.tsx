import {
    Button,
    InputContainer,
    InputField,
    InputLabel,
} from "../../utils/styles";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./index.module.scss";

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField
                    id="email"
                    type="email"
                    {...(register("email"), { required: true })}
                />
            </InputContainer>
            <InputContainer className={styles.loginFormPassword}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField
                    id="password"
                    type="password"
                    {...(register("password"), { required: true })}
                />
            </InputContainer>
            <Button className={styles.button}>Login</Button>
            <div className={styles.nonExistingUserContainer}>
                <Link to="/register" className={styles.nonExistingUser}>
                    Create an account?
                </Link>
            </div>
        </form>
    );
}

export default LoginForm;
