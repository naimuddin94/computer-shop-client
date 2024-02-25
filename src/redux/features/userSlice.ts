import { auth } from "@/firebase/firebase.config";
import { ICreateUser } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const initialState = {
  name: "",
  email: "",
  photo: "",
  isLoading: false,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ email, password, name, photo }: ICreateUser) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    if (auth.currentUser !== null) {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    } else {
      throw new Error("Current user is null");
    }

    return {
      name: data.user.displayName,
      email: data.user.email,
      photo: data.user.photoURL,
    };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        (state.email = ""),
          (state.name = ""),
          (state.isLoading = true),
          (state.isError = false),
          (state.error = "");
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        if (payload.email && payload.name) {
          (state.email = payload.email),
            (state.name = payload.name),
            (state.isLoading = false),
            (state.isError = false),
            (state.error = "");
        }
      })
      .addCase(createUser.rejected, (state, action) => {
        if (action.error) {
          (state.email = ""),
            (state.name = ""),
            (state.isLoading = false),
            (state.isError = true),
            (state.error = action?.error?.message || "Something went wrong");
        }
      });
  },
});

export default userSlice.reducer;
