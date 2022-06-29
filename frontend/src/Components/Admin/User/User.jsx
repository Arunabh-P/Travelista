import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Typography } from "@mui/material"
import "./all-users-list.css"
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import { getAllUsers } from '../../../Actions/Admin';

function User({ userId, name, avatar,isBlock,refresh,setRefresh }) {
   
    const dispatch = useDispatch()
    const {
        error: followError,
        message,
        loading: followLoading,
    } = useSelector((state) => state.blockUser);

    useEffect(()=>{

    },[isBlock])
  
    const  handleBlock =async(e)=>{
e.preventDefault()
        const { data } = await axios.put(`/api/v1/admin/blockUser/${userId}`);

        if(data){
            console.log("hai block");
            setRefresh(!refresh)
        }

    }
    const  handleUnBlock =async(e)=>{
        e.preventDefault()
                const { data } = await axios.put(`/api/v1/admin/unblockUser/${userId}`);
        
                if(data){
                    console.log("hai");
                    setRefresh(!refresh)
                }
        
            }


    return (
        <div className='bg-white mt-2 mb-3 admin-users'>

        
            <div className="row d-flex  ">
                <div className="col-12 users-home-list">
                    
                        <img src={avatar} alt={name} />
                        <p>{name}</p>

                        
                        {isBlock ?  <button type="button" class="flex-end btn btn-danger block-button" onClick={handleUnBlock}>UNBLOCK</button> :  <button type="button" class="flex-end btn btn-success block-button" onClick={handleBlock}>BLOCK</button>}
                       
                </div>
               
               
            </div>
            </div>
    )
}

export default User