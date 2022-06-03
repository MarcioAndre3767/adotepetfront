import { styled } from '@mui/material';



/*tem que ser crase*/
export const CabecalhoContainer = styled('header')`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f0f0f0;
    padding: ${ ({theme}) => theme.spacing(6)  }; /* 8px x 6 = 48px */
`;

export const Logo = styled('img')`
    width: 230px;

`;