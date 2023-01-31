import { useContext } from "react";
import styled from "styled-components";
import { useTransition } from "react-spring";

import { AppContext } from '../components/context/MainContext';

function List(){

    const { state } = useContext(AppContext);

    /* const transitionElements = useTransition(state.listIp, item => item, {
        config:{ duration: 300 },
        from:{ paddingLeft: '105%', opacity: 0, height: '100px' },
        enter: { paddingLeft: '0%', opacity: 1 },
        leave:[
          { paddingLeft: '105%', opacity: 0 },
          { height: '0px' }
        ]
      }); */

    return(
        <StyledListContainer>
            {
                state.listIp.length >= 1
                ? state.listIp.map(e=>{
                    return <StyledListItem key={e}>{e}</StyledListItem>
                })

                : <StyledListItem>No existen Coincidencias</StyledListItem>
            }
            {/* {
                transitionElements.map(({ item, props, key })=>{
                    return(
                        (transitionElements.length > 0)
                        ? <StyledListItem key={key} >
                            {item}
                         </StyledListItem>
                        : null
                    )

                })
            } */}

        </StyledListContainer>

    );
};


const StyledListContainer = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    padding: 20px;
`;

const StyledListItem = styled.li`
    width: 30%;
    padding: 20px 15px;
    margin: 10px;
    text-align: center;
    min-width: 180px;
    list-style: none;
    border: 1px solid #cfd8dc;
    background-color: #fff;
    font-weight: normal;
    font-size: 24px;
    box-shadow: 4px 4px 16px #fff9c4;
    border-radius: 8px;

`;

export default List;