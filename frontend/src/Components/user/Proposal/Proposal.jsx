import React, { useEffect, useState } from 'react';
import { Avatar } from '@mantine/core';
import { Container } from "react-bootstrap"
import cover from "../../../Images/cover.jpg"
import "./Proposal.css"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import {loadUser} from "../../../Actions/User"

import { useDispatch, useSelector } from "react-redux"
import { useAlert } from "react-alert"
import { postBuddyRequest, postHostRequest } from '../../../Actions/Post';
import { useParams } from 'react-router-dom';

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




export default function Proposal() {
    const [value, setValue] = React.useState(0);
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [number, setNumber] = useState("");
    const [description, setDescription] = useState("");
    const [service, setService] = useState("");

    const params= useParams()

    const dispatch = useDispatch()
    const alert = useAlert();


    const { loading, error, message } = useSelector((state) => state.like)

    const buddySubmitHandler =async (e) => {
        e.preventDefault()
        await dispatch(postBuddyRequest({id:params.id ,name, place, number, description}))
        dispatch(loadUser());


    }

    const hostSubmitHandler =async (e) => {
        e.preventDefault()
        await dispatch(postHostRequest({id:params.id ,name, place, number, description, service}))
        dispatch(loadUser());


    }


    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch({ type: "clearErrors" })
        }

        if (message) {
            alert.success(message);
            dispatch({ type: "clearErrors" })
        }

    }, [dispatch, error, message, alert])
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
                                <form onSubmit={buddySubmitHandler}>
                                    <div className='buddy-form-div'>
                                        <TextField
                                            id="fullWidth"
                                            label="Name"
                                            className='mb-4'
                                            value={name}
                                            required
                                            onChange={(e) => setName(e.target.value)}
                                        />


                                        <TextField
                                            id="outlined-number"
                                            label="Contact Number"
                                            type="number"
                                            className='mb-4'
                                            value={number}
                                            required
                                            onChange={(e) => setNumber(e.target.value)}

                                        />
                                        <TextField
                                            id="fullWidth"
                                            label="Place"
                                            className='mb-4'
                                            value={place}
                                            required
                                            onChange={(e) => setPlace(e.target.value)}
                                        />




                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Description"
                                            multiline
                                            rows={4}
                                            className=' mt-4'
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}

                                        />


                                        <button disabled={loading} className='register-dataform-button' type='submit'>Submit</button>

                                    </div>
                                </form>
                            </div>

                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className="buddy-form-container">
                                <form  onSubmit={hostSubmitHandler}>
                                    <div className='buddy-form-div'>


                                        <TextField
                                            id="fullWidth"
                                            label="Name"
                                            className='mb-4'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <TextField
                                            id="outlined-number"
                                            label="Contact Number"
                                            type="number"
                                            className='mb-4'
                                            value={number}
                                            onChange={(e) => setNumber(e.target.value)}

                                        />
                                        <TextField
                                            id="fullWidth"
                                            label="Place"
                                            className='mb-4'
                                            value={place}
                                            onChange={(e) => setPlace(e.target.value)}
                                        />
                                        <TextField
                                            id="fullWidth"
                                            label="Service you are providing?"
                                            className='mb-4'
                                            value={service}
                                            onChange={(e) => setService(e.target.value)}
                                        />





                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Detail Description"
                                            multiline
                                            rows={4}
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}

                                        />


                                        <button className='register-dataform-button' type='submit'>Submit</button>

                                    </div>
                                </form>
                            </div>
                        </TabPanel>
                    </Box>
                </div>
            </Container>
        </div >
    );
}
