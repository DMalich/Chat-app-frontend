import styled from "styled-components";

export const Page = styled.div`
    height: 100%;
    background: linear-gradient(135deg, black, #0e0642);
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-family: 'Poppins';
    padding: 25px 0;
    font-weight: 500;
    box-sizing: border-box;
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
