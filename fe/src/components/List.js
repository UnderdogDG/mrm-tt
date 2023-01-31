import { useContext } from "react";
import styled from "styled-components";
import { useTransition } from "react-spring";

import { AppContext } from '../components/context/MainContext';

function List(){

    const { state } = useContext(AppContext);

    const transitionElements = useTransition(state.listIp, item => item, {
        config:{ duration: 300 },
        from:{ paddingLeft: '105%', opacity: 0, height: '100px' },
        enter: { paddingLeft: '0%', opacity: 1 },
        leave:[
          { paddingLeft: '105%', opacity: 0 },
          { height: '0px' }
        ]
      });

    return(
        <StyledListContainer>
            {
                transitionElements.map(({ item, props, key })=>{
                    return(
                        (transitionElements.length > 0)
                        ? <StyledListItem key={key} >
                            {item}
                         </StyledListItem>
                        : null
                    )

                })
            }

        </StyledListContainer>

    );
};


const StyledListContainer = styled.ul`

`;

const StyledListItem = styled.li`
    list-style: none;

`;

export default List;