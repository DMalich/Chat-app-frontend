import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import ConversationsPanel from "../components/conversations/ConversationsPanel";
import ConversationsSidebar from "../components/conversations/ConversationsSidebar";
import { Page } from "../utils/styles";

function ConversationsPage() {
    const { id } = useParams();

    return (
        <Page>
            <ConversationsSidebar />
            {id && <ConversationsPanel />}
            {/* <Outlet /> */}
        </Page>
    );
}

export default ConversationsPage;
