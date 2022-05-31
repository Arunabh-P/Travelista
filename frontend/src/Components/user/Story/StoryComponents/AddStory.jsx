import React from 'react'
import "./AddStory.css"
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useSelector } from "react-redux"
function AddStory() {
    const { user, loading: userLoading } = useSelector((state) => state.user);

    return (
        <div className=' add-story-box   me-3 p-0'>
            <div style={{ backgroundImage: `url(${user.avatar.url})` }} className='add-story-img m-0 p-0 sh col-12 mb-auto' >
            </div>
            <div className=' p-3 d-flex justify-content-center plus-Button-add-story' ><AddCircleOutlineRoundedIcon
                sx={{ fontSize: 50 }}
                className='bg-white rounded-circle p-2' /></div>
        </div>
    )
}

export default AddStory