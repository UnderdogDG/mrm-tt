import styled from 'styled-components'

function MainContainer({children}){
    return(
        <Container>
            { children }
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color:  ${ ({ theme })=> theme.container.color };
`;


export default MainContainer;