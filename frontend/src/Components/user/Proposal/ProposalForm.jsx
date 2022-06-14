import React, { useEffect, useState } from 'react';
import "./Proposal.css"
import TextField from '@mui/material/TextField';
import { loadUser } from "../../../Actions/User"
import { useDispatch, useSelector } from "react-redux"
import { useAlert } from "react-alert"
import { postBuddyRequest, postHostRequest } from '../../../Actions/Post';
import { useParams } from 'react-router-dom';
import thinking from "../../../../src/Images/thinking.png"
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
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
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


function ProposalForm() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [number, setNumber] = useState("");
    const [description, setDescription] = useState("");
    const [service, setService] = useState("");

    const params = useParams()

    const dispatch = useDispatch()
    const alert = useAlert();


    const { loading, error, message } = useSelector((state) => state.like)

    const buddySubmitHandler = async (e) => {
        e.preventDefault()
        await dispatch(postBuddyRequest({ id: params.id, name, place, number, description }))
        dispatch(loadUser());
    }

    const hostSubmitHandler = async (e) => {
        e.preventDefault()
        await dispatch(postHostRequest({ id: params.id, name, place, number, description, service }))
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

    return (
        <>

            <div className='update-password' >
                <div className="container serch-container mb-4 ">
                    <div className="row update-row p-4 rounded mt-4">
                        <div className="col-lg-6 update-img p-5">
                            <img className="proposal-img" src={thinking} alt="" />
                        </div>
                        <div className="col-lg-6 px-5">
                            <Box sx={{ bgcolor: 'background.paper' }}>
                                <AppBar position="static" >
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        indicatorColor="secondary"
                                        textColor="inherit"
                                        variant="fullWidth"
                                        aria-label="full width tabs example"
                                    >
                                        <Tab label="Buddy request" {...a11yProps(0)} />
                                        <Tab label="Host request" {...a11yProps(1)} />
                                    </Tabs>
                                </AppBar>
                                <SwipeableViews
                                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={value}
                                    onChangeIndex={handleChangeIndex}
                                >
                                    <TabPanel value={value} index={0} dir={theme.direction}  >
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
                                                        className=' '
                                                        value={description}
                                                        onChange={(e) => setDescription(e.target.value)}
                                                    />
                                                    <button disabled={loading} className='proposal-dataform-button' type='submit'>Submit</button>
                                                </div>
                                            </form>
                                        </div>

                                    </TabPanel>
                                    <TabPanel value={value} index={1} dir={theme.direction}>

                                        <div className="buddy-form-container">
                                            <form onSubmit={hostSubmitHandler}>
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


                                                    <button className='proposal-dataform-button' type='submit'>Submit</button>

                                                </div>
                                            </form>
                                        </div>

                                    </TabPanel>
                                </SwipeableViews>
                            </Box>
                        </div>



                    </div>

                </div >

            </div >

        </>
    )
}

export default ProposalForm