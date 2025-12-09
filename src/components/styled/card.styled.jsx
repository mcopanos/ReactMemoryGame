import styled from "styled-components";

const Card = styled.div`

    /* background: #9156ea; //#9156eaa6 */
    background: ${(props) => props.variant === 'open' ? '#9156eaa6' : '#9156ea'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 200px;
    border-radius: 10px;
    box-shadow:  -1px 1px 5px 5px rgba(0, 0, 0, 0.15);
`;

export default Card;