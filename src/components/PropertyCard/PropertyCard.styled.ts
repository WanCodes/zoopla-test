import styled from 'styled-components';

export const CardContainer = styled.div`
    position: relative;
    background-color: #fff;
    border: solid 1px #D1D0CF;
    border-radius: 4px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    contain: content;
    margin-bottom: 2rem;
    max-width: 800px;
`;

export const Content = styled.div`
    display: flex;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const ImageWrapper = styled.div`
    max-width: 26.875rem;
    min-height: 19.375rem;
    max-height: 12.9375rem;
    overflow: hidden;
    width: 460px;

    @media (max-width: 700px) {
        width: 100%;
        max-width: none;
    }
`;

export const ListingDetails = styled.div`
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 1rem;
`;

export const PriceStyled = styled.p`
    margin: 0;
    font-weight: 600;
    line-height: 1.625;
    line-height: 1.25;
    font-size: 1.375rem;
    color: #322744;
`;

export const ListingTitle = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.375;
    color: #322744;
    margin: 0;
    padding-top: 0.5rem;
`;

export const ListingAddress = styled.p`
    margin: 0;
    font-weight: 400;
    line-height: 1.625;
    font-size: 0.875rem;
    color: #76767C;
`;

export const ImgStyled = styled.img`
    height: 100%;
`;

export const Footer = styled.div`
    border-top: solid 1px #D1D0CF;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
`;

export const Text = styled.span`
    margin: 0;
    font-weight: 400;
    line-height: 1.625;
    font-size: 0.75rem;
    color: #76767C;
`;

export const ActiveButton = styled.button`
    border-radius: 4px;
    color: #322744;
    border-color: #D1D0CF;
    background-color: transparent;
    padding: 0.25rem 1.3125rem 0.25rem 1.3125rem;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: rgba(102, 45, 190, 0.1);
    }
`;

export const Expired = styled.p`
    margin: 0;
    font-weight: 400;
    line-height: 1.625;
    font-size: 0.875rem;
    color: red;
`;