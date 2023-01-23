import React from "react";
import { Card, AppBar, Toolbar, Typography, Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const FormOutput = ({ values }) => {
    const { name, gender, email, mobile, occupation, age, state, city } = values;

    return (
        <Container>
            <AppBar>
                <Toolbar>
                    <MenuIcon></MenuIcon>
                    <Typography><strong>User Details</strong></Typography>
                </Toolbar>
            </AppBar>
            <Card style={{ marginTop: 100, textAlign: "center", marginLeft: 200, marginRight: 200 }}>
                <div style={{ marginLeft: 90, textAlign: "start" }}>
                    <p><strong>Name :</strong> {name}{" "}</p>
                    <p> <strong>Gender :</strong> {gender}{" "}</p>
                    <p><strong>email :</strong> {email}{" "}</p>
                    <p><strong>Mobile :</strong> {mobile}{" "} </p>
                    <p><strong>Occupation :</strong> {occupation}{" "} </p>
                    <p><strong>Age :</strong> {age}{" "}</p>
                    <p><strong>State :</strong> {state}{" "}</p>
                    <p><strong>City :</strong> {city}{" "}</p>
                </div>
            </Card>
        </Container>
    )
}

export default FormOutput;