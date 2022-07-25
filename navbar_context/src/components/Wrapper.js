import React, { useState } from 'react';
import UserContext from "../contexts/UserContext";

export default () => {
    const [ name, setName ] = useState("Bob Smith");

    return (
        <UserContext.Provider
            value={{name,
                    setName
                    }}
        >
            { children }
        </UserContext.Provider>
    );
};