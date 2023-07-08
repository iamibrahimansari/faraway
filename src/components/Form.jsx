import {useContext} from 'react';
import {FarAwayContext} from '../store/FarAwayContext';

import {Wrapper, Para, Input, Button, Operations, OperationList} from './StyledComponents';

const dropDownStyled = {
    width: '10rem',
    fontSize: '1.8rem',
    padding: '1.5rem 2rem'
}

export const Form = () =>{
    const {count, setCount, item, setItem, itemList, setItemList} = useContext(FarAwayContext);
    const handleOnClick = event =>{
        event.preventDefault();
        if(item){
            const newItem = item[0].toUpperCase() + item.slice(1).toLowerCase();
            const isThisItemAlreadyPresent = itemList.some(item => item.item === newItem);
            if(isThisItemAlreadyPresent){
                setItemList(itemList.map(item => item.item === newItem ? {...item, count: item.count + count} : item));
            }else{
                setItemList([...itemList, 
                    {
                        id: itemList.length ? itemList[itemList.length - 1].id + 1 : 1, 
                        count, 
                        item: newItem, 
                        packed: false
                    }
                ]);
            }
            setItem('');
            setCount(1);
        }else{
            alert("You can't add an empty item");
        }
    }

    return <Wrapper>
        <Para>What do you need for your 😍 trip?</Para>
        <Operations>
            <OperationList value={count} onChange={() => setCount(+event.target.value)} style={dropDownStyled}>
                {
                    [...Array(20)].map((_, index) => {
                        return <option key={index} value={index + 1}>{index + 1}</option>
                    })
                }
            </OperationList>
        </Operations>
        <Input onChange={event => setItem(event.target.value)} type="text" value={item} placeholder="Item..." input_width="30rem" />
        <Button onClick={handleOnClick} type="submit">ADD</Button>
    </Wrapper>
}