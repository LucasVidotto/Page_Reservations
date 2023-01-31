import styled from "styled-components";
export const ServiceCard = styled.div`
    display:flex;
    flex-direction:column
`

export const CardDetail = styled.div`
    display:grid;
    grid-template-columns: 28% 28% 28%;
    justify-content: space-between;
`

export const Details = styled.div`
display:flex;
justify-content:center;
background: rgba(255, 255, 255, 0);
border-radius: 16px;
padding:1rem;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(2.3px);
-webkit-backdrop-filter: blur(2.3px);
border: 1px solid rgba(255, 255, 255, 1);
margin-left:0.5rem;
margin-right:0.5rem;
margin-bottom:1.5rem;

&:hover {
    background: rgba(255, 255, 255, 0.07);
    border-radius: 16px;
    box-shadow: 0 2px 10px rgba(255, 255, 255, 1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}

`