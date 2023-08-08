import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import ShowAlert from '../../utils/ShowAlert';
import {date} from 'yup';

// actions here
export const userRegister = createAsyncThunk('userRegister', async data => {
  try {
    let res = await auth().createUserWithEmailAndPassword(
      data.email,
      data.password,
    );
    return res;
  } catch (error) {
    ShowAlert('error', error.message.split(']')[1]);
  }
});

export const userLogin = createAsyncThunk('userLogin', async data => {
  try {
    let res = await auth().signInWithEmailAndPassword(
      data.email,
      data.password,
    );
    return res;
  } catch (error) {
    console.log('error', error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    userData: [],
  },

  extraReducers: builder => {
    builder.addCase(userRegister.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      if (action.payload.user.uid) {
        state.userData = action.payload.user;
      }
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.isLoading = false;
      ShowAlert('error', action.error.message);
    });
    builder.addCase(userLogin.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload.user.uid, 'actino hre');
      if (action.payload.user.uid) {
        state.userData = action.payload.user;
      }
    });
    builder.addCase(userLogin.rejected, state => {
      state.isLoading = false;
      ShowAlert('error', action.error.message);
    });
  },
});

export default authSlice.reducer;
