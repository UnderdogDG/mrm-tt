import { useContext, useRef } from "react";
import styled from "styled-components";

import { AppContext } from "../context/MainContext";

function Form(){

    const { setState } = useContext( AppContext );

    const inputRef = useRef(null);

    const filterInput = (e)=>{
        let str = inputRef.current.value.trim();
        if(str){
            setState(prev=>prev.setStringIp(str));
        }
    }

    return(

        <FormContainer>
            <StyledField>
                
                <StyledInput ref={inputRef} type={"text"} onChange={ (e)=>filterInput(e) }/>

                <StyledButton>
                    Generar
                </StyledButton>
            </StyledField>
        </FormContainer>

    );
}

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    
`;


const StyledField = styled.div`
    display: flex;
    width: 100%;
    max-width: 600px;
    justify-content: center;
    align-items: stretch;
    box-shadow: 4px 4px 16px #fff9c4;
`;

const StyledInput = styled.input`
    width: 80%;
    min-width: 400px;
    background-color: ${ ({ theme })=> theme.input.bg };
    border-radius: 0;
    border: 0 solid ${ ({ theme })=> theme.input.border.color };
    border-bottom: ${ ({ theme })=> theme.input.border.width } solid ${ ({ theme })=> theme.input.border.color };
    font-size: 24px;
    font-weight: bold;
    color: #263238;
    padding: 20px 10px;
    text-align: center;

    &:active{
        border: 0px solid ;
    }

`;

const StyledButton = styled.div`
    width: 20%;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  ${ ({ theme })=> theme.button.bg };
    padding: 10px 15px;
    border-radius: 0 8px 8px 0;
    transform: scale(1.0);
    transition: transform 0.25s ease-out;
    box-shadow: 4px 4px 16px #fff9c4;

    &:hover{
        transform: scale(1.05);
        cursor: pointer;
    }
`;

export default Form;