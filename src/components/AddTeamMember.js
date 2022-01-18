
import { useState, useContext } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import { DataContext } from "./ContextProvider";

//Initial state for new Team Member
const initState = {
    name: "",
    email: "",
    phoneNumber: "",
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    position: "",
    parent: "",
    team: ""
}

const heads = ["Head of HR", "Head of Engineering", "Head of Design"];

const AddTeamMember = ({ open, handleClose, addTeamMember }) => {

    const [teamData, setTeamData] = useState(initState);
    const {data} = useContext(DataContext);

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Team Member</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add Team Member Details
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Name"
                        type="name"
                        fullWidth
                        value={teamData.name}
                        variant="standard"
                        onChange={(e) => setTeamData({ ...teamData, name: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={teamData.email}
                        variant="standard"
                        onChange={(e) => setTeamData({ ...teamData, email: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        id="phoneNumber"
                        label="Phone Number"
                        type="text"
                        fullWidth
                        value={teamData.phoneNumber}
                        variant="standard"
                        onChange={(e) => setTeamData({ ...teamData, phoneNumber: e.target.value })}
                    />
                    <TextField
                        select
                        margin="dense"
                        id="position"
                        label="Position"
                        type="text"
                        fullWidth
                        value={teamData.position}
                        variant="standard"
                        onChange={(e) => setTeamData({ ...teamData, position: e.target.value })}
                    >
                        <MenuItem key="lead" value={`Team Lead`}>
                            {"Team Lead"}
                        </MenuItem>
                        <MenuItem key="member" value={`Team Member`}>
                            {"Team Member"}
                        </MenuItem>
                    </TextField>
                    <TextField
                        select
                        margin="dense"
                        id="parent"
                        label="Parent Team"
                        type="text"
                        fullWidth
                        value={teamData.parent}
                        variant="standard"
                        onChange={(e) => setTeamData({ ...teamData, parent: e.target.value })}
                    >
                        {heads.map((item,index) => {
                            return (
                                <MenuItem key={index} value={item}>
                            {item}
                        </MenuItem>
                            )
                        })}
                    </TextField>
                    {teamData.parent && 
                    <TextField
                    select
                    margin="dense"
                    id="team"
                    label="Team"
                    type="text"
                    fullWidth
                    value={teamData.team}
                    variant="standard"
                    onChange={(e) => setTeamData({ ...teamData, team: e.target.value })}
                >
                    {data.find(item => item.position === teamData.parent).children.map((item,index) => {
                        return (
                            <MenuItem key={index} value={item}>
                        {item}
                    </MenuItem>
                        )
                    })}
                </TextField>}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => addTeamMember(teamData,setTeamData,initState)}>Save</Button>
                </DialogActions>
            </Dialog></>
    )

}

export default AddTeamMember;