import {
    Button,
    InputContainer,
    InputField,
    InputLabel,
} from "../../utils/styles";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserCredentialsParams } from "../../utils/types";
import { postLoginUser } from "../../utils/api";
import styles from "./index.module.scss";

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserCredentialsParams>();

    const navigate = useNavigate();

    const onSubmit = async (data: UserCredentialsParams) => {
        try {
            await postLoginUser(data);
            navigate("/conversations");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                />
            </InputContainer>
            <InputContainer className={styles.loginFormPassword}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField
                    id="password"
                    type="password"
                    {...register("password", { required: true })}
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
