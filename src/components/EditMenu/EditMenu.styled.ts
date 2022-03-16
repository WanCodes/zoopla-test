import styled from 'styled-components';

export const MenuContainer = styled.div`
    margin-bottom: 1rem;
    border-top: solid 1px #D1D0CF;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

export const EditButton = styled.button`
    border-radius: 4px;
    color: #322744;
    border-color: #322744;
    background-color: transparent;
    padding: 0.25rem 1.3125rem 0.25rem 1.3125rem;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: #322744;
        border-color: #322744;
    }
`;