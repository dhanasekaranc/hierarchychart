
import { useState } from "react";


import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const EditModal = ({show,empData,handleClose,handleEdit}) => {

    const [editData,setEditData] = useState({...empData});

    return (
        <>
      <Dialog open={show} onClose={handleClose}>
        <DialogTitle>Edit Employee Details</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Edit 
          </DialogContentText> */}
          <TextField
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            value={editData.name}
            variant="standard"
            onChange={(e) => setEditData({...editData, name: e.target.value})}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={editData.email}
            variant="standard"
            onChange={(e) => setEditData({...editData, email: e.target.value})}
          />
          <TextField
            margin="dense"
            id="phoneNumber"
            label="Phone Number"
            type="text"
            fullWidth
            value={editData.phoneNumber}
            variant="standard"
            onChange={(e) => setEditData({...editData, phoneNumber: parseInt(e.target.value)})}
          />
          {/* <TextField
                        select
                        margin="dense"
                        id="position"
                        label="Position"
                        type="text"
                        fullWidth
                        value={empData.position}
                        variant="standard"
                        onChange={(e) => setEditData({ ...empData, position: e.target.value })}
                    >
                        <MenuItem key="lead" value={`Team Lead`}>
                            {"Team Lead"}
                        </MenuItem>
                        <MenuItem key="member" value={`Team Member`}>
                            {"Team Member"}
                        </MenuItem>
                    </TextField>
          */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleEdit(editData)}>Save</Button>
        </DialogActions>
      </Dialog></>
    )

}

export default EditModal;