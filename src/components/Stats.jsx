import {useContext} from 'react';
import {FarAwayContext} from '../store/FarAwayContext';

import {Footer} from './StyledComponents';

export const Stats = () => {
    const {itemList} = useContext(FarAwayContext);
    const itemLength = itemList.length;
    const isAnyItemNotPacked = itemList.some(element => element.packed === false);
    let message = null;
    const totalItem = itemList.reduce((curr, next) =>{
        return curr + next.count;
    }, 0)
    const countOfPackedItem = itemList.reduce((curr, next) =>{
        return curr + (next.packed ? next.count : 0);
    }, 0);
    if(!itemLength){
        message = 'Start adding some items to your packing list 🚀';
    }
    else if(isAnyItemNotPacked){
        message = `💼 You have ${totalItem} items on your list, and you already packed ${countOfPackedItem} (${parseInt((countOfPackedItem * 100) / totalItem)}%)`
    }else{
        message = 'You got everything! Ready to go ✈️';
    }
    
    return <Footer>{message}</Footer>
}