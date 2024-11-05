import Aos from "aos";
import React, { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

export const ContextProvider = ({ children }) => {
    useEffect(() => {
        Aos.init({ duration: 1000, offset: 0 });
    }, []);
    const [spinner, setSpinner] = useState(false);

    return (
        <MainContext.Provider
            value={{
                spinner,
                setSpinner,
            }}
        >
            {children}
        </MainContext.Provider>
    );
};

