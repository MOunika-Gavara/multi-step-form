import React from "react";
import { Paper, TextField, Button, FormLabel, FormControlLabel, RadioGroup, Radio } from "@mui/material"
import { AppBar, Toolbar, Typography } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';



const FormUserDetails = ({ nextStep, handleFormData, values }) => {

    const submitHandler = (event) => {
        event.preventDefault();
        nextStep();
    }
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <MenuIcon></MenuIcon>
                    <Typography><strong>User Details</strong></Typography>
                </Toolbar>
            </AppBar>
            <div style={{ flex: 7, justifyItems: "center", alignItems: "center", paddingTop: "100px" }}>
                <Paper elevation={3} style={{ marginLeft: "400px", marginRight: "400px" }}>
                    <form onSubmit={submitHandler}>

                        <TextField
                            style={{ marginTop: "70px" }}
                            type="text"
                            label="Name"
                            value={values.name}
                            onChange={handleFormData("name")}>
                            Name
                        </TextField><br /><br />
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            style={{ marginLeft: "50px" }}
                            value={values.gender}
                            onChange={handleFormData("gender")}
                        >
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female" />
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male">
                            </FormControlLabel>
                            <FormControlLabel
                                value="others"
                                control={<Radio />}
                                label="Others">
                            </FormControlLabel>
                        </RadioGroup><br />
                        <TextField
                            type="email"
                            label="Email"
                            value={values.email}
                            onChange={handleFormData("email")}>
                            Email
                        </TextField><br /><br />
                        <TextField
                            type="number"
                            label="Mobile"
                            value={values.mobile}
                            onChange={handleFormData("mobile")}>
                            Mobile Number
                        </TextField><br /><br />


                        <Button
                            variant="contained"
                            color="primary" onClick={(e) => submitHandler(e)}>Next
                        </Button>
                    </form>
                </Paper><br />


            </div>
        </div >
    )
}

export default FormUserDetails;