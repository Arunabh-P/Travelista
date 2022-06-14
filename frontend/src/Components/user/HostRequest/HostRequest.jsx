import React from 'react'
import { Typography } from "@mui/material";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import PhoneIphoneSharpIcon from '@mui/icons-material/PhoneIphoneSharp';
import HomeRepairServiceSharpIcon from '@mui/icons-material/HomeRepairServiceSharp';
import ShortTextSharpIcon from '@mui/icons-material/ShortTextSharp';
function HostRequest({ name, number, service, description }) {
  return (
    <>
      <div className="row d-flex ">
        <div className="col-8">
          <Typography><AccountCircleSharpIcon />&nbsp; {name}</Typography>
          <Typography><PhoneIphoneSharpIcon />&nbsp; {number}</Typography>
          <Typography><HomeRepairServiceSharpIcon />&nbsp; {service}</Typography>
          <Typography><ShortTextSharpIcon />&nbsp; {description}</Typography>
        </div>
      </div>
    </>
  )
}

export default HostRequest