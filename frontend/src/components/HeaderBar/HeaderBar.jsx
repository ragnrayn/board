import React from 'react';
import './HeaderBar.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function HeaderBar() {
    return (
        <div className='header-bar'>
            <div className="navbar">
                <div className="search-bar">
                    <TextField id="outlined-basic" label="Search" variant="outlined" />
                </div>
                <div className="add-to-board">
                    <Button variant="contained">Add</Button>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar;