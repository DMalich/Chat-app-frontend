import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
    Button,
    InputContainer,
    InputField,
    InputLabel,
} from "../../utils/styles";
import styles from "./index.module.scss";

function RegisterForm() {
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
                    {...register("email", {
                        required: "Email is required!",
                    })}
                />
            </InputContainer>
            <section className={styles.nameFieldRow}>
                <InputContainer>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <InputField
                        id="text"
                        type="firstName"
                        {...register("firstName", {
                            required: "First Name is required!",
                        })}
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <InputField
                        id="text"
                        type="lastName"
                        {...register("lastName", {
                            required: "Last Name is required!",
                        })}
                    />
                </InputContainer>
            </section>
            <InputContainer>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField
                    id="password"
                    type="password"
                    {...register("password", {
                        required: "Password is required!",
                    })}
                />
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
