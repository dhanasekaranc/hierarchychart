import "./EmployeeCard.css";
// import { search } from "./Chart.js";
import { DataContext } from "./ContextProvider";
import { useEffect, useState, useContext } from "react";
import EditModal from "./EditModal";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
//import MoveUpIcon from '@mui/icons-material/MoveUp';
// import PersonRemoveIcon from '@mui/icons-material/PersonRemove';



const EmployeeCard = ({ emp }) => {

    const { data, setData } = useContext(DataContext);
    const [show, setShow] = useState(false);

    const handleDelete = (e,team,position) => {
        const id = parseInt(e.target.id);
        //const team = e.target.team;
        //console.log(team,position);
        const teamMem = data.filter(item => item.team === team && item.position === position);
        //console.log(teamMem);
        if(teamMem.length === 1) {
            alert(`Team should have atleast one ${position}`);
            return;
        }
        const filter = data.filter(item => item.id !== id);
        //console.log(filter);
        setData(filter);
        localStorage.setItem("DATA", JSON.stringify(filter));
    }

    const handleEdit = (editData) => {
        //console.log(editData);
        const filter = data.filter(item => item.id !== editData.id);
        const edit = [...filter, { ...editData }];
        setData(edit);
        localStorage.setItem("DATA", JSON.stringify(edit));
        //console.log(edit);
        setShow(false);

    }

    //console.log(data);
    return (
        <div className="employeeCard">
            {data.teamName && <div className="team">{data.teamName}</div>}
            <div className="card" >
                <div>{emp.name}</div>
                <div>{emp.position}</div>
                <div className="interaction">
                    {emp.position.includes("Team") && <div id={emp.id} onClick={() => setShow(true)}><EditIcon /></div>}
                    {emp.position.includes("Team") && 
                    <div id={emp.id} onClick={(e) => handleDelete(e,emp.team,emp.position)}>
                        <DeleteOutlineIcon id={emp.id} size="small" />
                    </div>
                    }
                    <EditModal empData={emp} show={show} handleClose={() => setShow(false)} handleEdit={handleEdit} />
                </div>
            </div>
        </div>
    )

}

export default EmployeeCard;