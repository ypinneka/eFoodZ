import React, { useState } from 'react';
import { Box, Text } from 'grommet';
import styled from 'styled-components';

const Header = styled.div`
`;

const DesktopNav = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgb(36 36 36 / 15%);
    min-height: 60px;
`;

const HomePageBanner = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 650px;
    background-image: url(https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_650,q_auto,w_1024/hellofresh_website/us/cms/homepage/bannersUS/Home_Page_-_Top_Banner_-_Tablet_v3.jpg);
`;

export const Main = () => {

    const [dynamicHeaderText, setDynamicHeaderText] = useState('Time');

    setTimeout(() => {
        if(dynamicHeaderText === 'Time') setDynamicHeaderText('Money');
        else if(dynamicHeaderText === 'Money') setDynamicHeaderText('Stress');
        else if(dynamicHeaderText === 'Stress') setDynamicHeaderText('Time');
    }, 1000);
    
    return (
        <Box>
            <Header>
                <DesktopNav>
                    Header
                </DesktopNav>
            </Header>
            <HomePageBanner>
                <Box align="center" justify="center" fill>
                    <Text style={{fontSize: '40px', lineHeight: '46px'}}>We save you serious</Text>
                    <Text margin={{vertical:'small'}} style={{fontSize: '50px', lineHeight: '44px', fontStyle:'italic',
                     borderBottom: '2px solid black', transition: 'width 500ms ease-in-out'}}>
                         {dynamicHeaderText}
                    </Text>
                </Box>
            </HomePageBanner>
        </Box>
    );
}