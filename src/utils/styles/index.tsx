import styled from "styled-components";
import { PageProps } from "./styleTypes";

export const SIDEBAR_WIDTH = 350;

export const Page = styled.div<PageProps>`
    height: 100%;
    width: 100%;
    /* background: linear-gradient(135deg, black, #09042b); */
    background: transparent;
    display: ${(props) => props.display};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
`;

export const InputContainer = styled.div`
    background-color: #131313;
    padding: 12px 16px;
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
`;

export const InputField = styled.input`
    font-family: "Inter";
    background-color: inherit;
    outline: none;
    border: none;
    color: white;
    background-color: inherit;
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 4px 0;
`;

export const InputLabel = styled.label`
    color: grey;
    display: block;
    font-size: 14px;
    margin: 4px 0;
`;

export const Button = styled.button`
    width: 100%;
    color: white;
    background-color: #2408db;
    outline: none;
    border: none;
    font-size: 16px;
    border-radius: 8px;
    font-family: "Poppins";
    padding: 25px 0;
    font-weight: 500;
    transition: 400ms background-color ease-in;
    &:hover {
        cursor: pointer;
        background-color: #1e07b1;
    }
    &:active {
        background-color: #18068d;
    }
    &:focus {
        background-color: #1e07b1;
    }
`;

export const ConversationsSidebarStyle = styled.aside`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${SIDEBAR_WIDTH}px;
    color: white;
    background-color: #131313;
    border-right: 1px solid #5454543d;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ConversationSidebarHeader = styled.header`
    /* background-color: #151515; */
    position: fixed;
    width: ${SIDEBAR_WIDTH}px;
    height: 100px;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: #0e0d0d;
    height: 65px;
    /* border-bottom: 1px solid #5454543d; */
    box-sizing: border-box;
    & h1 {
        font-weight: 400;
    }
`;

export const ConversationsChannelPageStyle = styled.div`
    margin-left: ${SIDEBAR_WIDTH}px;
    height: 100px;
    color: white;
`;

export const ConversationSidebarContainer = styled.div``;

export const ConversationSidebarItem = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 14px 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #ffffff35;
    background-color: #101010;
`;
