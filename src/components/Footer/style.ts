import styled from "styled-components";

export const FooterStyle = styled.footer`
    background-color: var(--container-color);
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    & > div{
        padding: 2rem 0 6rem;

        > div{
            display: flex;
            justify-content: center;
            column-gap: 1.125rem;


            a{
                background-color: var(--title-color);
                color: var(--container-color);
                font-size: 1.25rem;
                border-radius: 0.5rem;
                display: inline-flex;
                justify-content: center;
                
                height: 30px;
                width: 30px;
            }
        }
    }

    h2 , a {
        color: var(--title-color);
    }

    h2{
        text-align: center;
        margin-bottom: var(--mb-2);
    }


    ul{
        display: flex;
        justify-content: center;
        column-gap: 1.5rem;
        margin-bottom: var(--mb-2);

        a:hover{
            color: var(--title-color-dark);
        }
    }

    span{
        display: block;
        margin-top: 4.5rem;
        color: var(--title-color);
        text-align: center;
        font-size: var(--small-font-size);
    }

    @media screen and (max-width: 992px) {
        
    }
`