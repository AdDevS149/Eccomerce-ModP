// fetchBaseQuery compared with axios

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setCredentials, logOut } from '../../features/auth/authSlice';

// this is similiar to axios
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:4000',
  // allows to send back only the http only secure cookie
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// wrapping base token so that if fails or expires can get basically a refreshToken
const baseQueryWithReauth = async (args, api, extraOptions) => {
  // if runs above wiith no errors skip dow the result and return
  // other run the refresh token logic
  let result = await baseQuery(args, api, extraOptions);

  // send 403 if accessToken has expired
  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token');
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      // user should already be in state if already logged in
      const user = api.getState().auth.user;
      //store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      //retry the  original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  // use extended api slices to identity different features seperately
  endpoints: (builder) => ({}),
});