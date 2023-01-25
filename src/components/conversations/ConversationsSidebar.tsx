import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ConversationsSidebarStyle,
    ConversationsSidebarContainer,
    ConversationsSidebarHeader,
    ConversationsSidebarItem,
} from "../../utils/styles";
import { MdEditNote } from "react-icons/md";
import { ConversationType } from "../../utils/types";
import CreateConversationModal from "../modals/CreateConversationModal";
import styles from "./index.module.scss";

type Props = {
    conversations: ConversationType[];
};

const ConversationsSidebar: FC<Props> = ({ conversations }) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal && <CreateConversationModal></CreateConversationModal>}
            <ConversationsSidebarStyle>
                <ConversationsSidebarHeader>
                    <h1>Conversations</h1>
                    <div onClick={() => setShowModal(!showModal)}>
                        <MdEditNote size={30} />
                    </div>
                </ConversationsSidebarHeader>
                <ConversationsSidebarContainer>
                    {conversations.map((conversation) => (
                        <ConversationsSidebarItem
                            onClick={() => {
                                navigate(`/conversations/${conversation.id}`);
                            }}
                        >
                            <div className={styles.userAvatar}></div>
                            <div>
                                <span className={styles.userName}>
                                    {conversation.name}
                                </span>
                                <span
                                    className={styles.conversationLastMessage}
                                >
                                    {conversation.lastMessage}
                                </span>
                            </div>
                        </ConversationsSidebarItem>
                    ))}
                </ConversationsSidebarContainer>
            </ConversationsSidebarStyle>
        </>
    );
};

export default ConversationsSidebar;
