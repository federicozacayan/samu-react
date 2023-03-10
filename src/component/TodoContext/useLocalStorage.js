import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }
            
            setItem(parsedItem);
            setLoading(false);
        }, 3000)
    });
    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            console.log(error);
        }
    };
    return {
        item,
        saveItem,
        loading
    }
}

export { useLocalStorage };