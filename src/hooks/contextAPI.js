import React, { useContext, createContext, useEffect, useState } from 'react';

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [colorMode, setColorMode] = useState('dark-mode');
    const [isTemplateOpen, setIsTemplateOpen] = useState(false);
    const [changeTemp, setChangeTemp] = useState('template-1');

    // light mode and dark mode functionality
    useEffect(() => {
        const currentMode = localStorage.getItem("mode")
        setColorMode(currentMode)
    }, []);

    const handleMode = (mode) => {
        setColorMode(mode)
        localStorage.setItem("mode", mode)
    }
    // switch template functionality
    useEffect(() => {
        const currentTemp = localStorage.getItem("temp")
        setChangeTemp(currentTemp)
    }, []);
    const handleTemp = (temp) => {
        setChangeTemp(temp)
        localStorage.setItem("temp", temp)
    }

    const openTemplate = () => {
        setIsTemplateOpen(true)
    }
    const closeTemplate = () => {
        setIsTemplateOpen(false)
    }
    return (<AppContext.Provider value={{ openTemplate, closeTemplate, handleMode, handleTemp, colorMode, isTemplateOpen, changeTemp }}>
        <div className={`wrapper ${colorMode === "dark-mode" ? "dark-mode" : "light-mode"}`} id={`${changeTemp}`}>
            {children}

        </div>
    </AppContext.Provider>)
}

const GlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, GlobalContext }