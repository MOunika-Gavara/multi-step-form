import React from "react";
import { AppBar, Toolbar, Typography, Paper, TextField, Select, MenuItem, Button, InputLabel, FormControl } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


const FormPersonalDetails = ({ nextStep, handleFormData, prevStep }) => {

    const submitHandler = (event) => {
        event.preventDefault();
        nextStep();
    }
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <MenuIcon></MenuIcon>
                    <Typography><strong>Personal Details</strong></Typography>
                </Toolbar>
            </AppBar>
            <form onSubmit={submitHandler}>
                <div style={{ flex: 7, justifyItems: "center", alignItems: "center", paddingTop: "150px" }}>
                    <Paper elevation={3} style={{ marginLeft: "400px", marginRight: "400px" }}>
                        <TextField
                            type="text"
                            label="occupation"
                            onChange={handleFormData("occupation")}>
                        </TextField><br /><br />
                        <TextField
                            type="number"
                            label="age"
                            onChange={handleFormData("age")}>
                        </TextField><br /><br />
                        <FormControl sx={{ width: 240 }}>
                            <InputLabel>State</InputLabel>
                            <Select
                                label="State"
                                onChange={handleFormData("state")}>
                                <MenuItem value="AndhraPradesh" >AndhraPradesh</MenuItem>
                                <MenuItem value="Telangana">Telangana</MenuItem>
                                <MenuItem value="TamilNadu">TamilNadu</MenuItem>
                                <MenuItem value="Kerala">Kerala</MenuItem>
                                <MenuItem value="Karnataka">Karnataka</MenuItem>
                            </Select>
                        </FormControl><br /><br />
                        <TextField
                            type="text"
                            label="city"
                            onChange={handleFormData("city")}>
                        </TextField><br /><br /><br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <Button variant="contained" onClick={prevStep}>
                                Previous
                            </Button>

                            <Button variant="contained" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Paper>
                </div>
            </form>
        </div>
    )
}

export default FormPersonalDetails;