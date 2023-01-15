import React from "react";
import { Outlet, Route } from "react-router";
import { Routes } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AuthenticationPage/>}></Route>
                <Route
                    path="conversations"
                    element={
                        <div>
                            <div>Conversations</div>
                            <Outlet />
                        </div>
                    }
                >
                    <Route
                        path=":id"
                        element={<div>Conversations ID Page</div>}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
