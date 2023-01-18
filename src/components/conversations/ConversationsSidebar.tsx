import { FC } from "react";
import {
    ConversationsSidebarStyle,
    ConversationSidebarContainer,
    ConversationSidebarHeader,
    ConversationSidebarItem,
} from "../../utils/styles";
import { MdEditNote } from "react-icons/md";
import { ConversationType } from "../../utils/types";
import styles from './index.module.scss';

type Props = {
    conversations: ConversationType[];
};

const ConversationsSidebar: FC<Props> = ({ conversations }) => {
    return (
        <ConversationsSidebarStyle>
            <ConversationSidebarHeader>
                <h1>Conversations</h1>
                <MdEditNote size={30} />
            </ConversationSidebarHeader>
            <ConversationSidebarContainer>
                {conversations.map((conversation) => (
                    <ConversationSidebarItem>
                        <div className={styles.userAvatar}></div>
                        <div>
                            <span className={styles.userName}>{conversation.name}</span>
                            <span className={styles.conversationLastMessage}>{conversation.lastMessage}</span>
                        </div>
                    </ConversationSidebarItem>
                ))}
            </ConversationSidebarContainer>
        </ConversationsSidebarStyle>
    );
};

export default ConversationsSidebar;
