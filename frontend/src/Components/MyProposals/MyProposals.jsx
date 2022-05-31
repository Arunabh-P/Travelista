
import React, { useEffect, useState } from 'react';
import { Avatar } from '@mantine/core';
import { Container } from "react-bootstrap"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}



export default function MyProposals() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <div className="fullBodyProposal">
    <Container>
        <div className='proposal  '>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 600, }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', width: "25%" }}
                >
                    <Tab label="Buddy Request" {...a11yProps(0)} />
                    <Tab label="Host Request" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}
                    sx={{ width: "75%" }}
                >
                    <div className="buddy-form-container">
                        
                    </div>

                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="buddy-form-container">
                        
                    </div>
                </TabPanel>
            </Box>
        </div>
    </Container>
</div >
  )
}








