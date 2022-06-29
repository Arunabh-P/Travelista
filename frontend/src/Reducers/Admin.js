import { createReducer } from "@reduxjs/toolkit"

const adminInitialState = {
    protectAdmin: false,
    
}
export const adminReducer = createReducer(adminInitialState, {
    AdminLoginRequest: (state) => {
        state.loading = true;
    },
    AdminLoginSuccess: (state, action) => {
        state.loading = false;
        state.admin = action.payload;
        state.protectAdmin = true;
    },
    AdminLoginFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.protectAdmin = false;

    },

    LoadAdminRequest: (state) => {
        state.loading = true;
    },
    LoadAdminSuccess: (state, action) => {
        state.loading = false;
        state.admin = action.payload;
        state.protectAdmin = true;

    },
    LoadAdminFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.protectAdmin = false;
    },

    LogoutAdminRequest: (state) => {
        state.loading = true;
    },
    LogoutAdminSuccess: (state) => {
        state.loading = false;
        state.admin = null;
        state.protectAdmin = false;

    },
    LogoutAdminFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.protectAdmin = true;
    },

    clearErrors: (state) => {
        state.error = null;
    }
})

export const adminUsersReducer = createReducer(adminInitialState, {
    adminUsersRequest: (state) => {
        state.loading = true;
    },
    adminUsersSuccess: (state, action) => {
        state.loading = false;
        state.adminAllUsers = action.payload;
    },
    adminUsersFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    }
})


export const blockUser = createReducer(adminInitialState, {
    blockUserRequest: (state) => {
        state.loading = true;
    },
    blockUserSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.protectAdmin = true;
    },
    blockUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    }
})

