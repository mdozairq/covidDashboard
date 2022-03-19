import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import './Filters.scss'
const Filters = () => {
    return (
        <div className='Filter'>
            <div className='Search'>
            <input type="search" placeholder='Search by Country...'/>
            </div>
            <div>
            <FormControl
                sx={{ m: 1, minWidth: 180, minHeight: "2rem" }}
                style={{background:"#fff", borderRadius:"5px"}}
                >
                    <InputLabel id="demo-dialog-select-label1" >Country</InputLabel>
                    <Select
                        labelId="demo-dialog-select-label1"
                        id="demo-dialog-select"
                        // value={city}
                        // onChange={(e)=>{
                        //     setCity(e.target.value)
                        //     setOpen(false);
                        // }}
                        input={<OutlinedInput label="City" />}
                        style={{color:"#fff"}}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {/* {cities && cities.map((item, id) => <MenuItem key={id} value={item} >{item}</MenuItem>)} */}
                    </Select>
                </FormControl>
                <FormControl
                sx={{ m: 1, minWidth: 180, minHeight: "2rem" }}
                style={{background:"#fff", borderRadius:"5px"}}
                >
                    <InputLabel id="demo-dialog-select-label1" >Age</InputLabel>
                    <Select
                        labelId="demo-dialog-select-label1"
                        id="demo-dialog-select"
                        // value={city}
                        // onChange={(e)=>{
                        //     setCity(e.target.value)
                        //     setOpen(false);
                        // }}
                        input={<OutlinedInput label="City" />}
                        style={{color:"#fff"}}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {/* {cities && cities.map((item, id) => <MenuItem key={id} value={item} >{item}</MenuItem>)} */}
                    </Select>
                </FormControl>
                <FormControl
                sx={{ m: 1, minWidth: 180, minHeight: "2rem" }}
                style={{background:"#fff",borderRadius:"5px",}}
                >
                    <InputLabel id="demo-dialog-select-label1" >Date</InputLabel>
                    <Select
                        labelId="demo-dialog-select-label1"
                        id="demo-dialog-select"
                        // value={city}
                        // onChange={(e)=>{
                        //     setCity(e.target.value)
                        //     setOpen(false);
                        // }}
                        input={<OutlinedInput label="City" />}
                        style={{color:"#fff"}}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {/* {cities && cities.map((item, id) => <MenuItem key={id} value={item} >{item}</MenuItem>)} */}
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default Filters