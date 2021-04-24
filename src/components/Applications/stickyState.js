import {useState, useEffect} from 'react';

//Using custom hook to persist sort and filter selections in local storage
function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
        const stickyValue = localStorage.getItem(key);

        return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });

    useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value])
    
    return [value, setValue];
}

export default useStickyState;