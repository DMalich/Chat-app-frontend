import React from "react";
import { Outlet, Route } from "react-router";
import { Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/register" element={<RegisterPage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
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
