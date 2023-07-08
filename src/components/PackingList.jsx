import {useContext} from 'react';
import {FarAwayContext} from '../store/FarAwayContext';
import {PackingListWrapper, List, Operations, OperationList, OperationBtn} from './StyledComponents';
import {Item} from './Item';

const optionData = [
    ["input", "SORT BY INPUT ORDER"],
    ["description", "SORT BY DESCRIPTION"],
    ["packed", "SORT BY PACKED STATUS"]
]

export const PackingList = () =>{
    const {itemList, setItemList, sortingIndicator, setSortingIndicator} = useContext(FarAwayContext);

    const handleDeleteAllItem = () =>{
        if(!itemList.length){
            alert('There is no item in your list!')
        }else if(confirm('Are your sure you want to delete all items!')){
            setItemList([]);
        }
    }

    let newList = null;
    if(sortingIndicator === 'input'){
        newList = itemList;
    }else if(sortingIndicator === 'description'){
        newList = itemList.slice().sort((a, b) => a.item.localeCompare(b.item));
    }else{
        newList = itemList.slice().sort((a, b) => +a.packed - +b.packed);
    }

    return <PackingListWrapper>
        <List>
            {
                newList?.map(thing => <Item key={thing.id} {...thing} />)
            }
        </List>
        <Operations>
            <OperationList value={sortingIndicator} onChange={() => setSortingIndicator(event.target.value)}>
                {
                    optionData.map((data, index) => <option key={index} value={data[0]}>{data[1]}</option>)
                }
            </OperationList>
            <OperationBtn onClick={handleDeleteAllItem}>CLEAR LIST</OperationBtn>
        </Operations>
    </PackingListWrapper> 
}