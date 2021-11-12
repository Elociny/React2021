import styled from "styled-components"; 

const Div = styled.div`
    .input {
        display: flex;
        flex-direction: row;
    }

    .inp input {
        padding: 7px 250px;
    }

    .inp input:hover {
        cursor: text;
    }

    .img img {
        margin-left: 10px;

        cursor: pointer;
    }
`;

export { Div }