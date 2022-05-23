import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRows from './EditRows';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import { Button, Tooltip } from '@mui/material';

const Table = ({ list, delFrontMem, delBackMem,saveAfterEdit, saveAfterEditBack, moveFrontBack, moveBackFront, delHrMem, moveHr}) => {
    const [query, setQuery] = useState('')
    const [editMemId, setEditMemId] = useState(null)
    const [editFormData, setEditFormData] = useState({
        id: '',
        name: '',
        phone: '',
        email:''
    })
    const [data, setData] = useState(list)
    
    useEffect(()=>{
     setData(list)
    },[list])

    const deleteBtn = (elem) => {
        if (delFrontMem) {
            delFrontMem(elem)
        }
        else if (delBackMem) {
            delBackMem(elem)
        }
        else if(delHrMem)delHrMem(elem)
    }

    const editBtn = (e, elem) => {
        e.preventDefault()
        console.log("wdit")
        setEditMemId(elem.id)

        const formValue = {
            id: elem.id,
            name: elem.name,
            phone: elem.phone,
            email: elem.email
        }

        setEditFormData(formValue)
    }

    const handleEditFormChange = (e) => {
        e.preventDefault()
        const fieldName = e.target.getAttribute("name")
        const fieldValue = e.target.value
        const newFormData = {...editFormData}
        newFormData[fieldName] = fieldValue
        setEditFormData(newFormData)
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault()

        const editedContact = {
        id: editFormData.id,
        name: editFormData.name,
        phone: editFormData.phone,
        email: editFormData.email
        }

        const newList = [...data]

        let index = data.findIndex((elem) => elem.id === editMemId)
        newList[index] = editedContact
        setData(newList)
        setEditMemId(null)
        if(saveAfterEdit)saveAfterEdit(newList)
        else if(saveAfterEditBack)saveAfterEditBack(newList)
    }

    const cancelBtn = () => {
        setEditMemId(null)
    }

    const moveDownBtn = (elem) =>{
        if(moveFrontBack)moveFrontBack(elem)
        else if(moveBackFront)moveBackFront(elem)
        else if(moveHr)moveHr()
    }

    return (
        <>
            <input style={{ width: '80%', border: 'none', outline: 'none', borderRadius: '50px', padding: '4px' }} type="text"
                placeholder='Search the employee using name, phone number or email...' value={query} onChange={(e) => setQuery(e.target.value)} />

            <div style={{ width: '80%' }}>
                <form onSubmit={handleEditFormSubmit}>
                    <table className="table" style={{ color: 'azure' }}>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email ID</th>
                                <th scope="col" >Actions</th>
                            </tr>
                        </thead>
                        {
                            data.filter((value) => {
                                if (query === '') {
                                    return value
                                }
                                else if (value.name.toLowerCase().includes(query.toLowerCase()) || value.phone.toLowerCase().includes(query.toLowerCase()) || value.email.toLowerCase().includes(query.toLowerCase())) {
                                    return value
                                }
                            })
                                .map((elem, idx) => (
                                    <tbody key={idx}>
                                        {
                                            editMemId === elem.id ? (<EditRows editFormData={editFormData} 
                                                handleEditFormChange={handleEditFormChange}
                                                 cancelBtn={cancelBtn}/>) :
                                                <tr >
                                                    <th scope="row">{elem.id}</th>
                                                    <td>{elem.name}</td>
                                                    <td>{elem.phone}</td>
                                                    <td>{elem.email}</td>
                                                    <td style={{display:'flex'}}>
                                                        <Tooltip title='Edit' arrow><Button style={{color:'azure'}}><EditIcon onClick={(e) => editBtn(e,elem)}  /></Button></Tooltip>
                                                        <Tooltip title='Delete' arrow><Button style={{color:'azure'}}> <DeleteIcon onClick={() => deleteBtn(elem)} /></Button></Tooltip>
                                                        <Tooltip title='Move Member' arrow><Button style={{color:'azure'}}><MoveDownIcon onClick = {() => moveDownBtn(elem)}/></Button></Tooltip>
                                                        </td>
                                                </tr>
                                        }
                                    </tbody>
                                ))
                        }
                    </table>
                </form>
            </div>
        </>
    )
}

export default Table