import {useContext} from 'react';
import {FarAwayContext} from '../store/FarAwayContext';
import {ListItem, CheckBox, MainItem, DeleteSign} from './StyledComponents';

const CheckBoxStyle = {
    fontSize: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export const Item = ({id, count, item, packed}) =>{
    const {itemList, setItemList} = useContext(FarAwayContext);
    const handleDelete = () =>{
        setItemList(itemList.filter(item => item.id !== id));
    }

    const handleCheckBox = () =>{
        setItemList(itemList.map(item => item.id === id ? {...item, packed: !item.packed} : item));
    }
    return <ListItem>
        <CheckBox style={CheckBoxStyle} onClick={handleCheckBox}><span>{packed ? '✅' : null}</span></CheckBox>
        <MainItem style={{textDecoration: packed ? 'line-through' : 'none'}}>{count} {item}</MainItem>
        <DeleteSign onClick={handleDelete}>&times;</DeleteSign>
    </ListItem>
}