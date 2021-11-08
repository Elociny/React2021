import styled from "styled-components"; 

const Div = styled.div`
    .roda-pe {
        color: #d9d9d9;
        background-color: #3C6E71;

        padding: 25px 35px;
        margin-top: 50px;
    }

    .cima {
        display: flex;
        flex-direction: row;

        justify-content: space-between;
    }

    .c-titulo {
        font-size: 18px;
        font-weight: bolder;

        margin-bottom: 15px;

        cursor: pointer;
    }

    .c-info {
        margin-bottom: 10px;

        cursor: pointer;
    }

    .pt-2 {
        margin-top: 40px;
    }

    .c-img {
        display: flex;
        flex-direction: row;
    }

    .img1 {
        margin: 5px 5px;

        cursor: pointer;
    }

    .baixo {
        text-align: right;
    }
`;

export { Div };