import { useContext, useEffect, useState } from "react";
import { getAuthUser } from "../api";
import { AuthContext } from "../context/AuthContext";
import { User } from "../types";

function useAuth() {
    const [user, setUser] = useState<User | undefined>();
    const [loading, setLoading] = useState(true);

    const { updateAuthUser } = useContext(AuthContext);
    const controller = new AbortController();

    useEffect(() => {
        getAuthUser()
            .then(({ data }) => {
                console.log(data);
                setUser(data);
                updateAuthUser(data);
                setTimeout(() => setLoading(false), 1000);
            })
            .catch((err) => {
                console.log(err);
                setTimeout(() => setLoading(false), 1000);
            });

        return () => {
            controller.abort();
        };
    }, []);

    return { user, loading };
}

export default useAuth;