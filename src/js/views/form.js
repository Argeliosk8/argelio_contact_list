import { useContext, useEffect, useState } from "react";
import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function Form(){
    const [name, setName] = useState('hola')
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const {store, actions} = useContext(Context)

    const handleClick = ()=>{
        const contact = {
            "full_name": name,
            "email": email,
            "agenda_slug": 'argelio',
            "address": address,
            "phone": phone
        }

        actions.addContact(contact)
    }

    return (
        <div className="container-fluid">
            <form>
                <div class="mb-3">
                    <label for="inputName" class="form-label">Full Name</label>
                    <input onChange = {(e)=>{setName(e.target.value)}}type="text" class="form-control" id="inputName" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input onChange = {(e)=>{setEmail(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="inputPhone" class="form-label">Phone</label>
                    <input onChange = {(e)=>{setPhone(e.target.value)}} type="text" class="form-control" id="inputPhone"/>
                </div>
                <div class="mb-3">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input onChange={(e)=>{setAddress(e.target.value)}} type="text" class="form-control" id="inputAddress"/>
                </div>
                <div className="container-fluid">
                     <button onClick = {handleClick} type="submit" class="btn btn-primary">Save</button>
                </div>
           </form>
        </div>
    )
}