import { ConversationsChannelPageStyle } from "../utils/styles";
import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContext";

function ConversationsChannelPage() {
    const { user } = useContext(AuthContext);

    return (
        <ConversationsChannelPageStyle>
            {user && user.email}
        </ConversationsChannelPageStyle>
    );
}

export default ConversationsChannelPage;
