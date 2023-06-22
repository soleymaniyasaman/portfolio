import React, { useContext, createContext, useEffect, useState } from 'react';

const AppContext = createContext()

const AppProvider = ({ children }) => {
    return <AppContext.Provider value="hello">
        {children}
    </AppContext.Provider>
}

const GlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, GlobalContext }