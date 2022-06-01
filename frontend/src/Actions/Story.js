import axios from "axios";

export const createNewStory = ( image) => async (dispatch) => {
    try {
        dispatch({
            type: "newStoryRequest",
        });
        const { data } = await axios.post(`/api/v1/story/upload`,{
            image
        },{
            headers: {
                "Content-type" : "application/json",
            }
        }
            )
            console.log(data)
        dispatch({
            type: "newStorySuccess",
            payload: data.message,
        })

    
    } catch (error) {
        console.log(error);
        dispatch({
            type: "newStoryFailure ",
            
            // payload: error.response
            payload: error.response.data.message,
        })

    }
}

