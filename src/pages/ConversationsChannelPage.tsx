import { ConversationsChannelPageStyle } from "../utils/styles";
import { useParams } from "react-router-dom";

function ConversationsChannelPage() {
    console.log(useParams());

    return (
        <ConversationsChannelPageStyle>
            Channel page
        </ConversationsChannelPageStyle>
    );
}

export default ConversationsChannelPage;
