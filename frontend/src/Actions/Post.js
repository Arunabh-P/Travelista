import axios from "axios";

export const likePost = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "likeRequest",
        });
        const { data } = await axios.get(`/api/v1/post/${id}`);
        dispatch({
            type: "likeSuccess",
            payload: data.message,
        })

    } catch (error) {
        dispatch({
            type: "likeFailure",
            payload: error.response.data.message,
        })

    }
}

export const addCommentOnPost = (id, comment) => async (dispatch) => {
    try {
        dispatch({
            type: "addCommentRequest",
        });
        const { data } = await axios.put(`/api/v1/post/comment/${id}`,
            {
                comment,
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        dispatch({
            type: "addCommentSuccess",
            payload: data.message,
        })

    } catch (error) {
        dispatch({
            type: "addCommentFailure ",
            payload: error.response.data.message,
        })

    }
}

export const deleteCommentOnPost = (id, commentId) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteCommentRequest",
        });
        const { data } = await axios.delete(`/api/v1/post/comment/${id}`,{
            data:{commentId},
        }
            )
        dispatch({
            type: "deleteCommentSuccess",
            payload: data.message,
        })

    } catch (error) {
        dispatch({
            type: "deleteCommentFailure ",
            payload: error.response.data.message,
        })

    }
}

export const createNewPost = (caption, image, tripDate) => async (dispatch) => {
    try {
        dispatch({
            type: "newPostRequest",
        });
        const { data } = await axios.post(`/api/v1/post/upload`,{
            caption,
            image,
            tripDate,
        },{
            headers: {
                "Content-type" : "application/json",
            }
        }
            )
        dispatch({
            type: "newPostSuccess",
            payload: data.message,
        })

    } catch (error) {
        dispatch({
            type: "newPostFailure ",
            payload: error.response.data.message,
        })

    }
}


export const updatePost = (caption, id) => async (dispatch) => {
    try {
        dispatch({
            type: "updateCaptionRequest",
        });
        const { data } = await axios.put(`/api/v1/post/${id}`,{
            caption,
        },{
            headers: {
                "Content-type" : "application/json",
            }
        }
            )
        dispatch({
            type: "updateCaptionSuccess",
            payload: data.message,
        })

    } catch (error) {
        dispatch({
            type: "updateCaptionFailure ",
            payload: error.response.data.message,
        })

    }
}


export const deletePost = ( id) => async (dispatch) => {
    try {
        dispatch({
            type: "deletePostRequest",
        });
        const { data } = await axios.delete(`/api/v1/post/${id}`)
        dispatch({
            type: "deletePostSuccess",
            payload: data.message,
        })

    } catch (error) {
        dispatch({
            type: "deletePostFailure ",
            payload: error.response.data.message,
        })

    }
}


export const postHostRequest = ({id, name,place,number,description,service}) => async (dispatch) => {
    try {
        dispatch({
            type: "hostRequest"
        })

        const { data } = await axios.post(
            `/api/v1/host/request/${id}`,
            {  name,place,number,description, service },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })

        dispatch({
            type: "hostSuccess",
            payload: data.message,
        })

    } catch (error) {
        dispatch({
            type: "hostFailure",
            payload: error.response.data.message,
        })
    }
};

export const postBuddyRequest  = ({id, name,place,number,description}) => async (dispatch) => {
    try {
        dispatch({
            type: "buddyRequest"
        })

        const { data } = await axios.post(
            `/api/v1/buddy/request/${id}`,
            {  name,place,number,description },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })

        dispatch({
            type: "buddySuccess",
            payload: data.message,
        })

    } catch (error) {
        dispatch({
            type: "buddyFailure",
            payload: error.response.data.message,
        })
    }
};