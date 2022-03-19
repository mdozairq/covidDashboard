import { GET_COUNTRY, GET_SUMMARY } from "../types";

const initialState = {
    summaryData:{},
    countryData:[]
};

const Reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_SUMMARY:
            return{
                ...state,
                summaryData: payload,
            }
            case GET_COUNTRY:
                return{
                    ...state,
                    countryData: payload,
                }    

        default:
            return initialState;
    }
}

export default Reducer;