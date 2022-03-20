import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Autocomplete, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import OutlinedInput from '@mui/material/OutlinedInput';
import './Filters.scss'
const Filters = ({ value, setValue }) => {
    const data = useSelector(state => state.summaryData);
    const list = Object.keys(data).length && [...new Set(data.Countries.map(q => q.Country))];
    const handleInputChange = (value) => {
        if (value !== null)
            setValue(value)
        else
            setValue("Global")
    }
    return (
        <div className='Filter'>
            <div className='Search'>
                {Object.keys(data).length &&
                    <Autocomplete
                        className="inputRounded"
                        id="country-select-demo"
                        options={list}
                        getOptionLabel={(option) => option}
                        defaultValue="Global"
                        onChange={(e, value) => handleInputChange(value)}
                        renderInput={(params) => (
                            <TextField {...params}
                                borderRadius={16}
                                variant="outlined"
                                label="Search"
                                placeholder="Search Country..."
                            />
                        )}
                    />
                }
            </div>
            <div className='ValueName'>
                <h1>{value}</h1>
            </div>
        </div>
    )
}

export default Filters