import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Wrapper = styled.form`
    background-color: #e5771f;
    padding: 2.5rem 0;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`

export const Para = styled.p`
    font-size: 2.4rem;
    font-weight: bold;
`

export const Input = styled.input`
    padding: 1.5rem 2rem;
    width: ${({input_width}) => input_width};
    border-radius: 100px;
    border: none;
    font-size: 1.8rem;
    font-weight: bold;
`
    
export const Button = styled.button`
    padding: 1.5rem 2rem;
    width: 10rem;
    border-radius: 100px;
    border: none;
    font-size: 1.6rem;
    font-weight: bold;
    background-color: #76c7ad;
    cursor: pointer;
`

export const Title = styled.h1`
    font-family: 'Monoton', cursive;
    background-color: #f4a226;
    font-size: 8rem;
    font-weight: 400;
    text-align: center;
    padding: 2rem 0;
    word-spacing: 3rem;
`

export const PackingListWrapper = styled.div`
    background-color: #5a3e2b;
    color: #ffebb3;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    min-height: 35rem;
    justify-content: space-between;
`

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    width: 80%;
    margin-inline: auto;
    flex-wrap: wrap;
    margin-bottom: 3rem;
`

export const ListItem = styled.li`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-right: 10rem;
`
    
export const CheckBox = styled.div`
    background-color: #fff;
    width: 1.9rem;
    height: 1.9rem;
    cursor: pointer;
`
    
export const MainItem = styled.p`
    font-size: 2rem;
`
    
export const DeleteSign = styled.div`
    font-size: 4rem;
    color: red;
    font-weight: bold;
    cursor: pointer;
`

export const Operations = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
`

export const OperationList = styled.select`
    cursor: pointer;
    border: none;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    border-radius: 100px;
    color: #5a3e2b;
    font-weight: bold;
`
        
export const OperationBtn = styled.button`
    border: none;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    border-radius: 100px;
    color: #5a3e2b;
    font-weight: bold;
    cursor: pointer;
`

export const Footer = styled.footer`
    background-color: #76c7ad;
    font-weight: bold;
    font-style: italic;
    font-size: 2.5rem;
    height: calc(858px - 780px);
    display: flex;
    justify-content: center;
    align-items: center;
`
