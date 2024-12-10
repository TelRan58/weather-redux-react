import {createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {},
    reducers: {
        putWeatherInfo: (_state, action) => {
            return action.payload;
        }
    }
})

export const {putWeatherInfo} = weatherSlice.actions
export default weatherSlice.reducer