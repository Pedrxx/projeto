import React, { useState } from "react";
import './Login.css';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { InputText } from 'primereact/inputtext';



function Login() {

    return (
        <>
            <div className="container">
                <div className="flex flex-column gap-2">
                    <label htmlFor="username">Username</label> <br></br>
                    <InputText id="username" aria-describedby="username-help" /> <br></br>
                    <small id="username-help">
                        Enter your username to log in.
                    </small>
                </div>
                <br></br>
                <Button label="Submit" icon="pi pi-check" />
            </div>

        </>
    );
}

export default Login;