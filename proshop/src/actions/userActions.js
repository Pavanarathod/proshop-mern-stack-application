import { userActions } from "../features/userSlice";
import axios from "axios";
import { registerAction } from "../features/registerSlice";
import { prfileActions } from "../features/profileSlice";
import { updateActions } from "../features/updateProfileSlice";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(userActions.setLoading());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );
    dispatch(userActions.login(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(
      userActions.setError({
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    );
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(userActions.logout());
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(registerAction.setLoading());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch(registerAction.registerUser(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(
      registerAction.setError({
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    );
  }
};

export const userProfile = (id) => async (dispatch, getState) => {
  try {
    dispatch(prfileActions.setLoading());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch(prfileActions.setUserProfile(data));
  } catch (error) {
    dispatch(
      prfileActions.setError({
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    );
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch(updateActions.setLoading());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch(updateActions.setUserProfile(data));
  } catch (error) {
    dispatch(
      updateActions.setError({
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    );
  }
};
