import {createContext, useState} from 'react';

export const FarAwayContext = createContext();

export const FarAwayProvider = ({children}) =>{
    const [count, setCount] = useState(1);
    const [item, setItem] = useState('');
    const [sortingIndicator, setSortingIndicator] = useState('input');
    const [itemList, setItemList] = useState([]);
    const states = {
        count, 
        setCount,
        item,
        setItem,
        itemList,
        setItemList,
        sortingIndicator, 
        setSortingIndicator
    }
    return <FarAwayContext.Provider value={states}>
        {children}
    </FarAwayContext.Provider>
}