import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
    ConversationsSidebarStyle,
    ConversationsSidebarContainer,
    ConversationsSidebarHeader,
    ConversationsSidebarItem,
} from "../../utils/styles";
import { MdEditNote } from "react-icons/md";
import { ConversationType } from "../../utils/types";
import styles from './index.module.scss';

type Props = {
    conversations: ConversationType[];
};

const ConversationsSidebar: FC<Props> = ({ conversations }) => {
    const navigate = useNavigate();

    return (
        <ConversationsSidebarStyle>
            <ConversationsSidebarHeader>
                <h1>Conversations</h1>
                <MdEditNote size={30} />
            </ConversationsSidebarHeader>
            <ConversationsSidebarContainer>
                {conversations.map((conversation) => (
                    <ConversationsSidebarItem onClick={() => {navigate(`/conversations/${conversation.id}`)}}>
                        <div className={styles.userAvatar}></div>
                        <div>
                            <span className={styles.userName}>{conversation.name}</span>
                            <span className={styles.conversationLastMessage}>{conversation.lastMessage}</span>
                        </div>
                    </ConversationsSidebarItem>
                ))}
            </ConversationsSidebarContainer>
        </ConversationsSidebarStyle>
    );
};

export default ConversationsSidebar;
