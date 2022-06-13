import { apiSlice } from "../../app/api/apiSlice";

// extended slice instead of putting in builder of api/api/Slice
///////// coupled with Auth
// injectendpoints from api/api/Slice (extended)
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials }
            })
        }),
    })
})

export const {
    useLoginMutation
} = authApiSlice