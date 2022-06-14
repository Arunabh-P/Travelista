import React from 'react'
import { Avatar, Button, Typography, Dialog } from "@mui/material";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import PhoneIphoneSharpIcon from '@mui/icons-material/PhoneIphoneSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import HomeRepairServiceSharpIcon from '@mui/icons-material/HomeRepairServiceSharp';
import ShortTextSharpIcon from '@mui/icons-material/ShortTextSharp';
function Request({name,number,place,service,description}) {
  return (
    <>
            <div className="row d-flex ">
                <div className="col-8">
            <Typography><AccountCircleSharpIcon/>{name}</Typography>
            <Typography><PhoneIphoneSharpIcon/>{number}</Typography>
            <Typography><LocationOnSharpIcon/>{place}</Typography>
            <Typography><HomeRepairServiceSharpIcon/>{service}</Typography>
            <Typography><ShortTextSharpIcon/>{description}</Typography>


                </div>
            </div>
            </>
  )
}

export default Request