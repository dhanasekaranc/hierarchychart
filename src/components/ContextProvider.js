import React, { useState } from "react";

export const DataContext = React.createContext();

const DataProvider = ({ children, initState }) => {
    const [data, setData] = useState(initState);

    return (
        <DataContext.Provider value={{data,setData}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;