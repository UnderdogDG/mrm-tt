import styled from "styled-components";

function Header({ title }){
    return(
        <StyledH1>
            { title }
        </StyledH1>
    );
}

const StyledH1 = styled.h1`
    font-size: ${ ({theme})=>theme.header.size };
    font-weight: ${ ({theme})=>theme.header.weight };
`;

export default Header;