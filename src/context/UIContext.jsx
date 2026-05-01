import { createContext, useContext, useState, useEffect } from 'react';

const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
    // Default to disabled per implementation plan
    const getInitialCursorState = () => {
        const savedState = localStorage.getItem('chaartech-cursor-active');
        return savedState === 'true'; // Default false if null or 'false'
    };

    const [isReptileActive, setIsReptileActive] = useState(getInitialCursorState);

    // Persist to local storage
    useEffect(() => {
        localStorage.setItem('chaartech-cursor-active', isReptileActive);
    }, [isReptileActive]);

    const toggleReptile = () => {
        setIsReptileActive(prev => !prev);
    };

    return (
        <UIContext.Provider value={{ isReptileActive, toggleReptile }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error('useUI must be used within a UIProvider');
    }
    return context;
};

export default UIContext;
