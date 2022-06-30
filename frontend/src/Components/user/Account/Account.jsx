import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector }
  from "react-redux"
import { deleteMyProfile, getMyPosts, loadUser, logoutUser, updateCoverImage } from '../../../Actions/User';
import "./Account.css"
import MyPost from "../MyPost/MyPost";
import User from "../User/User"
import { Button, Dialog, Typography } from "@mui/material";
import { Container } from "react-bootstrap"
import cover from "../../../Images/cover.jpg"
import coverimg from "../../../Images/coverimg.png"
import { useAlert } from 'react-alert';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { FormControl } from "react-bootstrap";
import CropImage from "../../user/CoverPicCroper/CropImage"
import SaveIcon from '@mui/icons-material/Save';
import { Skeleton } from "@mui/material";
import Header from "../Header/CommonHeader"

const Swal = require('sweetalert2')

function Account({ width }) {

  const deleteProfileHandler = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMyProfile())
        dispatch(logoutUser())
      }
    })
  }

  const dispatch = useDispatch()
  const alert = useAlert()

  const { user, loading: userLoading } = useSelector((state) => state.user);
  const { loading: postLoading, error, posts } = useSelector((state) => state.myPosts);
  const {
    error: likeError,
    message,
    loading: deleteLoading,
  } = useSelector((state) => state.like);



  const [followersToggle, setFollowersToggle] = useState(false)
  const [followingToggle, setFollowingToggle] = useState(false)
  const [showCropper, setShowCropper] = useState(false);
  const [cropImage, setCropImage] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (likeError) {
      alert.error(likeError);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, message, likeError, dispatch]);


  const saveCoverImage = async (e) => {
    e.preventDefault()
    await dispatch(updateCoverImage(image))
    dispatch(loadUser())
  }

  return (
    <>
      <Header />


      <div className="fullBodyProfile">
        <Container>
          <div className='CoverPage  '>
            <div className=' bg-white my-2 rounded'>
              {userLoading &&

                <div>
                  <Skeleton
                    className='user-profile-page-top-section'
                    variant="rectangular"
                    sx={{ bgcolor: "#FFFFFF" }}
                    width={width}
                    height={"198px"}
                  />
                  <div className='latest-title' style={{ width }}>
                    <Skeleton height={"35px"} />
                    <Skeleton width={"80%"} height={"35px"} />
                  </div>
                  <div className='latest-cat mt-2 mb-4'><Skeleton width={"50%"} /></div>

                  <div className='latest-line'></div>
                </div>

              }
              {user.coverImage ? <div className="text-end" style={{ backgroundImage: `url(${image ? image : user.coverImage.url})`, height: "15rem", width: "100%", borderRadius: "5px 5px 0px 0px", backgroundSize: "cover", backgroundRepeat: "no-repeat", marginBottom: "-4.5rem" }}>
                <FormControl
                  className="crop_image d-none"
                  id="upload_image"
                  type="file"
                  name="crop_image"
                  onChange={(e) => {
                    setCropImage(e.target.files[0]);
                    setShowCropper(true);
                  }}
                  accept=".jpg,.jpeg,.png,"
                />
                <label for="upload_image">

                  {image ? <span class="profilepic__icon mt-5 mx-2 text-white" onClick={saveCoverImage}>
                    <SaveIcon />
                  </span> : <span class="profilepic__icon mt-5 mx-2 text-white" >
                    <AddAPhotoIcon />
                  </span>}

                </label>
                {showCropper && (
                  <div className=' d-flex justify-content-center'>
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
              </div> :
                <div className="text-end" style={{ backgroundImage: `url(${image ? image : coverimg})`, height: "15rem", width: "100%", borderRadius: "5px 5px 0px 0px", backgroundSize: "cover", backgroundRepeat: "no-repeat", marginBottom: "-4.5rem" }}>
                  <FormControl
                    className="crop_image d-none"
                    id="upload_image"
                    type="file"
                    name="crop_image"
                    onChange={(e) => {
                      setCropImage(e.target.files[0]);
                      setShowCropper(true);
                    }}
                    accept=".jpg,.jpeg,.png,"
                  />
                  <label for="upload_image">

                    {image ? <span class="icons-in-cover-pic mt-5 mx-2 text-white" onClick={saveCoverImage}>
                      <SaveIcon />
                    </span> : <span class="icons-in-cover-pic mt-5 mx-2 text-white" >
                      <AddAPhotoIcon />
                    </span>}

                  </label>
                  {showCropper && (
                    <div className=' d-flex justify-content-center'>
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
                </div>}
              <div className='coverTopSec'>
                <img radius="xl" src={user.avatar.url} className='CoverPage_avatar' alt="coverImage" style={{ width: "130px", height: "130px", borderRadius: "20%" }} />
              </div>
              <div className='d-md-flex justify-content-between texts-group-acc'>
                <div>
                  <h2 className='cover-profile-name'>{user.name}
                  </h2>
                  <h4 className='cover-profile-cat'>{user.bio}</h4>
                </div>
                <div>
                  <Typography onClick={() => setFollowersToggle(!followersToggle)} className="account-texts" > {user.followers.length} Followers</Typography>
                </div>
                <div>
                  <Typography onClick={() => setFollowingToggle(!followingToggle)} className="account-texts">{user.following.length} Following</Typography>
                </div>
                <div>
                  <Typography className="account-texts">{user.posts.length} Posts</Typography>
                </div>
                <Button
                  variant="text"
                  style={{ color: "red", margin: "2vmax" }}
                  onClick={deleteProfileHandler}
                  disabled={deleteLoading}
                >
                  Delete My Profile
                </Button>
                <Dialog className='DialogBoxMain' open={followersToggle} onClose={() => setFollowersToggle(!followersToggle)}>
                  <div className="DialogBoxAccount">
                    {
                      user && user.followers.length > 0 ? user.followers.map((follower) => ((
                        <User
                          key={follower._id}
                          userId={follower._id}
                          name={follower.name}
                          avatar={follower.avatar.url}
                        />
                      ))
                      ) : (
                        <Typography style={{ margin: "2vmax" }}> You have no followers</Typography>
                      )}
                  </div>
                </Dialog>
                <Dialog className='DialogBoxMain' open={followingToggle} onClose={() => setFollowingToggle(!followingToggle)}>
                  <div className="DialogBoxAccount">
                    {
                      user && user.following.length > 0 ? user.following.map((follow) => ((
                        <User
                          key={follow._id}
                          userId={follow._id}
                          name={follow.name}
                          avatar={follow.avatar.url}
                        />
                      ))
                      ) : (
                        <Typography style={{ margin: "2vmax" }}> You're not following anyone</Typography>
                      )}
                  </div>
                </Dialog>
              </div>
            </div>
            <div className='row'>
              {postLoading &&
                [...Array(5)].map(() => {

                  return (
                    <div className='col-12 col-md-6' >
                      <Skeleton
                        variant="rectangular"
                        sx={{ bgcolor: "#FFFFFF" }}
                        width={width}
                        height={"198px"}
                      />
                      <div className='latest-title' style={{ width }}>
                        <Skeleton height={"35px"} />
                        <Skeleton width={"80%"} height={"35px"} />
                      </div>
                      <div className='latest-cat mt-2 mb-4'><Skeleton width={"50%"} /></div>

                      <div className='latest-line'></div>
                    </div>
                  )

                })
              }
              {posts && posts.length > 0 ? (
                posts.map((post) => (
                  <div className='col-12 col-md-6' >
                    <MyPost
                      className="samplepost"
                      key={post._id}
                      host={post.host}
                      buddy={post.buddy}
                      postId={post._id}
                      caption={post.caption}
                      postImage={post.image.url}
                      likes={post.likes}
                      comments={post.comments}
                      ownerImage={post.owner.avatar.url}
                      ownerName={post.owner.name}
                      ownerId={post.owner._id}
                      width={'100%'}
                      isAccount={true}
                      isDelete={true}
                    />
                  </div>
                ))
              ) : (
                <div className="no-post-account bg-white col ">

                  <p className='text-center '>You have not made any post.</p>
                </div>
              )}
            </div>
            <div className="bg-white ">

              <p className='text-center p-2'>Copyright ©2022 travalista.online All Rights Reserved.</p>
            </div>
          </div>
        </Container>
      </div >
    </>
  )
}

export default Account