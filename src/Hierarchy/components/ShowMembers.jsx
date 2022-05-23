import { Button } from '@mui/material';
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import Table from './Table';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowMembers = ({title,list,addMember,delMember,editedData,moveMember}) => {
    const [isAdding, setIsAdding] = useState(false)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    

    const submitForm = (e) => {
        e.preventDefault()
        if (id === '' || name === '' || phone === '' || email === ''  ) {
            toast.warn("Enter all the data")
        }
       
        else {
            let data = {
                id, name, phone, email
            }
            dispatch(addMember(data))
            setId('')
            setName('')
            setPhone('')
            setEmail('')
            setIsAdding(false)
            toast.success("Member addded")
        }
    }

    const formCancelBtn = () => {
        setId('')
        setName('')
        setPhone('')
        setEmail('')
        setIsAdding(!isAdding)
    }

    const delFrontMem = (elem) => {
        dispatch(delMember(elem))
    }

    const saveAfterEdit = (list) => {
       dispatch(editedData(list))
    }

    const moveFrontBack = (elem) => {
        if(document.location.pathname === '/design' || document.location.pathname === '/hr'){
            moveMember()
        }
        else{
            dispatch(moveMember(elem))
            dispatch(delMember(elem))
        }
       
    }

    return (
        <div style={{ width: '100%' }}>
            <h2>{title}</h2>
            {
                isAdding ? <Button variant='contained' style={{ marginBottom: '5px', backgroundColor: '#201E37' }}
                    onClick={formCancelBtn}><CancelIcon /> CLOSE </Button>
                    : 
                     <Button variant='contained' style={{ marginBottom: '5px', backgroundColor: '#201E37' }}
                        onClick={() => setIsAdding(!isAdding)}><AddIcon /> ADD MEMBER </Button>    
            }
            <br />
           

            {
                isAdding &&
                <form style={{ width: '80%' }}>
                    <div className="mb-1">
                        <label className="form-label">ID</label>
                        <input type="id" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder='Enter the id' value={id} onChange={(e) => setId(e.target.value)} />
                    </div>
                    <div className="mb-1">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder='Enter the name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-1">
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder='Enter the phone number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="mb-1">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder='Enter the email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={submitForm}>Submit</button>
                </form>
            }

        {!isAdding && <Table list={list} delFrontMem={delFrontMem} saveAfterEdit={saveAfterEdit} moveFrontBack={moveFrontBack} />}
        <ToastContainer autoClose={1500} />
        </div>
    )
}

export default ShowMembers