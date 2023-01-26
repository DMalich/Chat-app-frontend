import { createRef, useEffect, Dispatch, FC } from "react";
import { ModalOverlayStyle } from "../../utils/styles";
import CreateConversationForm from "../forms/CreateConversationForm";
import { ModalContainer, ModalHeader, ModalContentBody } from "./index";
import { MdClose} from 'react-icons/md';

type Props = {
    setShowModal: Dispatch<React.SetStateAction<boolean>>;
};

const CreateConversationModal: FC<Props> = ({ setShowModal }) => {
    const ref = createRef<HTMLDivElement>();

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            e.key === "Escape" && setShowModal(false);
        };
        window.addEventListener("keydown", handleKeydown);

        return () => window.removeEventListener("keydown", handleKeydown);
    }, []);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { current } = ref;

        if (current === e.target) {
            console.log("close modal");
            setShowModal(false);
        }
    };

    return (
        <ModalOverlayStyle ref={ref} onClick={handleOverlayClick}>
            <ModalContainer>
                <ModalHeader>
                    <h2>Create a conversation</h2>
                    <MdClose size={30} onClick={() => setShowModal(false)} />
                </ModalHeader>
                <ModalContentBody>
                    <CreateConversationForm />
                </ModalContentBody>
            </ModalContainer>
        </ModalOverlayStyle>
    );
};

export default CreateConversationModal;
