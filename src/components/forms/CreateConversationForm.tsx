import { InputContainer, InputField } from "../../utils/styles";
import styles from './index.module.scss';

function CreateConversationForm() {
    return (
        <form className={styles.createConversationForm}>
            <InputContainer>
                <InputField />
            </InputContainer>
        </form>
    );
}

export default CreateConversationForm;
