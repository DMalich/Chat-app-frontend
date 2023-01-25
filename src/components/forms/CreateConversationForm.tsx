import { InputContainer, InputField, InputLabel } from "../../utils/styles";
import styles from "./index.module.scss";

function CreateConversationForm() {
    return (
        <form className={styles.createConversationForm}>
            <InputContainer backgroundColor="#161616">
                <InputLabel>Recipient</InputLabel>
                <InputField />
            </InputContainer>
            <InputContainer backgroundColor="#161616">
                <InputLabel>Message (optional)</InputLabel>
                <InputField />
            </InputContainer>
        </form>
    );
}

export default CreateConversationForm;
