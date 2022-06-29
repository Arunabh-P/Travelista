import axios from "axios"

export const loginAdmin = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "AdminLoginRequest"
        })

        const { data } = await axios.post(
            "/api/v1/admin/login",
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })

        dispatch({
            type: "AdminLoginSuccess",
            payload: data.admin,
        })

    } catch (error) {
        dispatch({
            type: "AdminLoginFailure",
            payload: error.response.data.message,
        })
    }
}
export const loadAdmin = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadAdminRequest"
        })
        const { data } = await axios.get("/api/v1/isAdmin")

        dispatch({
            type: "LoadAdminSuccess",
            payload: data.admin,
        })

    } catch (error) {
        dispatch({
            type: "LoadAdminFailure",
            payload: error.response.data.message,
        })
    }
}

export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({
            type: "adminUsersRequest",
        });
        const { data } = await axios.get("/api/v1/admin/users");
        dispatch({
            type: "adminUsersSuccess",
            payload: data.adminAllUsers,
        })

    } catch (error) {
        dispatch({
            type: "adminUsersFailure",
            payload: error.response.data.message,
        })

    }
}



  export const blockUser = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "blockUserRequest",
      });
      const { data } = await axios.put(`/api/v1/admin/blockUser/${id}`);
      dispatch({
        type: "blockUserSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "blockUserFailure",
        payload: error.response.data.message,
      });
    }
  };

  export const logoutAdmin = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "LogoutAdminRequest"
        })

        await axios.post("/api/v1/admin/logout");

        dispatch({
            type: "LogoutAdminSuccess",
        })

    } catch (error) {
        dispatch({
            type: "LogoutAdminFailure",
            payload: error.response.data.message,
        })
    }
};