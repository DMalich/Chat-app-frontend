import { ModalOverlayStyle } from "../../utils/styles";
import CreateConversationForm from "../forms/CreateConversationForm";
import { ModalContainer, ModalHeader } from "./index";

function CreateConversationModal() {
    return (
        <ModalOverlayStyle>
            <ModalContainer>
                <ModalHeader>
                    <h2>Create a conversation</h2>
                </ModalHeader>
                <CreateConversationForm />
            </ModalContainer>
        </ModalOverlayStyle>
    );
}

export default CreateConversationModal;
