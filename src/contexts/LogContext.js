import { createContext, useState} from "react";
import React from "react";
import {v4} from 'uuid';

const LogContext = createContext();
export function LogContextProvider({children}) {
    const [logs, setLogs] = useState([]);

    const onCreate = ({title, body, date, futuredate, selectedImageId}) => {
        const log = {
            id: v4(),
            title,
            body,
            date,
            futuredate,
            selectedImageId,
        };
        setLogs((prevLogs) => [log, ...prevLogs]);
    };

    const onModify = (modified) => {
        setLogs((prevLogs) =>
        prevLogs.map((log) => (log.id === modified.id ? modified : log))
    );
    };

    const onRemove = id => {
        const nextLogs = logs.filter(log => log.id !== id);
        setLogs(nextLogs);
    };

    return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
            {children}
        </LogContext.Provider>);
};

export default LogContext;