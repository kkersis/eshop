import { createContext, useEffect } from "react";
import { getUser } from "../../api/requests";
import useApi from "../hooks/useApi";

export const UserContext = createContext({});

function UserProvider({children}){
    const {data, call} = useApi();

    useEffect(() => {
        call(getUser);
    }, []) //eslint-disable-line

    return (
        <UserContext.Provider value={data}>{children}</UserContext.Provider>
    )
}

export default UserProvider;