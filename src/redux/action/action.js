import * as api from '../../api';
import { GET_SUMMARY, GET_COUNTRY } from '../types';

export const getSummary = () => async (dispatch) => {
    try {
        const { data } = await api.getSummary()
        console.log("Data: ", data);
        dispatch({ type: GET_SUMMARY, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const getCountryData = (country) => async (dispatch) => {
    try {
        const { data } = await api.getCountry(country)
        console.log("Data: ", data);
        dispatch({ type: GET_COUNTRY, payload: data })
    } catch (error) {
        console.log(error);
    }
}