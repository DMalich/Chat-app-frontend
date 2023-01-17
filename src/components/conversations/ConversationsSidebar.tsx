import { ConversationsSidebarStyle } from "../../utils/styles";
import { BiConversation } from "react-icons/bi";
import { MdEditNote} from 'react-icons/md';

function ConversationsSidebar() {
    return (
        <ConversationsSidebarStyle>
            <header>
                <h1>Conversations</h1>
                {/* <BiConversation size={28}/> */}
                <MdEditNote size={30} />
            </header>
        </ConversationsSidebarStyle>
    );
}

export default ConversationsSidebar;
