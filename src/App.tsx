import React from "react";
import { Outlet, Route } from "react-router";
import { Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ConversationsPage from "./pages/ConversationsPage";
import ConversationsChannelPage from "./pages/ConversationsChannelPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/register" element={<RegisterPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/conversations" element={<ConversationsPage />}>
                    <Route path=":id" element={<ConversationsChannelPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
