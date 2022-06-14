import React, { useState, useEffect } from 'react'
import "./AddStory.css"
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useDispatch, useSelector } from "react-redux"
import { useAlert } from 'react-alert';
import { createNewStory } from "../../../../Actions/Story"
import { loadUser } from '../../../../Actions/User';
import CropImage from '../../StoryCropper/CropImage';
function AddStory() {

  const [image, setImage] = useState(null);
  const dispatch = useDispatch()
  const alert = useAlert()
  const { error, message } = useSelector((state) => state.like)
  const [showCropper, setShowCropper] = useState(false);
  const [cropImage, setCropImage] = useState(false);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (image !== null) {
      dispatch(createNewStory(image))
      dispatch(loadUser());
    }
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" })
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearErrors" })
    }
  }, [dispatch, error, message, image, alert])

  return (
    <div className=' add-story-box   me-3 p-0 '>

      <form >
        <input type="file" accept='image/*' className="crop_image d-none" name="crop_image" id="upload_image" onChange={(e) => {
          setCropImage(e.target.files[0]);
          setShowCropper(true);
        }} />
        <div style={{ backgroundImage: `url(${user.avatar.url})` }} className='add-story-img m-0 p-0 sh col-12 mb-auto' >
        </div>
        <div className=' p-3 d-flex justify-content-center plus-Button-add-story' >

          <label htmlFor="upload_image" ><span className="profilepic__icon"><AddCircleOutlineRoundedIcon
            sx={{ fontSize: 50 }}
            className='bg-white rounded-circle p-2' /></span></label>
          {showCropper && (
            <div className='d-flex justify-content-center'>
              <CropImage
                src={cropImage}
                imageCallback={(image) => {
                  setImage(image);
                  setShowCropper(false);
                }}
                closeHander={() => {
                  setShowCropper(false);
                }}
              />
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default AddStory