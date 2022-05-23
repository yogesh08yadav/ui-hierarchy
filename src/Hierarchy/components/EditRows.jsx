import { Button, Tooltip } from '@mui/material'
import React from 'react'
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const EditRows = ({ editFormData, handleEditFormChange, cancelBtn }) => {
  return (
    <tr >
      <td> <input type="text" name='id' required='required' placeholder='Enter the id...' value={editFormData.id} onChange={handleEditFormChange} />  </td>
      <td><input type="text" name='name' placeholder='Enter the name...' value={editFormData.name} onChange={handleEditFormChange} /></td>
      <td><input type="text" name='number' placeholder='Enter phone number...' value={editFormData.phone} onChange={handleEditFormChange} /></td>
      <td><input type="email" name='email' placeholder='Enter the email...' value={editFormData.email} onChange={handleEditFormChange} /></td>
      <td style={{ display: 'flex', alignItem: 'center' }}>
        <Tooltip title='Save' arrow><Button type='submit' style={{ color: 'azure', }}><SaveIcon /></Button></Tooltip>

        <Tooltip title='Cancel' arrow><Button style={{ color: 'azure' }} onClick={cancelBtn}> <CancelIcon /> </Button></Tooltip>
      </td>
    </tr>
  )
}

export default EditRows