import "./EmployeeCard.css";
import { DataContext } from "./ContextProvider";
import { useState, useContext } from "react";
import EditModal from "./EditModal";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
//import CodeIcon from '@mui/icons-material/Code';



const EmployeeCard = ({ emp }) => {

    const { data, setData } = useContext(DataContext);
    const [show, setShow] = useState(false);

    //Function to validate if the changes can be made or not.

    const validateChange = (data,team,position) => {
        const teamMem = data.filter(item => item.team === team && item.position === position);
        if(teamMem.length === 1) {
            alert(`Team should have atleast one ${position}`);
            return false;
        }
        return true;
    }

    // const handleMove = (e,team,position) => {

    // }

    //Function to validate delete function.

    const handleDelete = (e,team,position) => {

        if(!validateChange(data,team,position)) return;

        const id = parseInt(e.target.id);
        const teamMem = data.filter(item => item.team === team && item.position === position);
        if(teamMem.length === 1) {
            alert(`Team should have atleast one ${position}`);
            return;
        }
        const filter = data.filter(item => item.id !== id);
        setData(filter);
        localStorage.setItem("DATA", JSON.stringify(filter));
    }


    //Function to handle edit.
    
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
        <div className="employeeCard" key={data.id}>
            {data.teamName && <div className="team">{data.teamName}</div>}
            <div className="card" >
                <div>{emp.name}</div>
                <div>{emp.position}</div>
                
                    {emp.position.includes("Team") &&
                    <div className="interaction">
                         <div id={emp.id} onClick={() => setShow(true)}><EditIcon /></div>
                    
                        <div id={emp.id} onClick={(e) => handleDelete(e,emp.team,emp.position)}>
                          <DeleteOutlineIcon id={emp.id} size="small" />
                        </div>
                    
                        <EditModal empData={emp} show={show} handleClose={() => setShow(false)} 
                            handleEdit={handleEdit} />

                        {/* <div id={emp.id} onClick={(e) => handleMove(e,emp.team,emp.position)}>Move</div> */}
                    </div>
                   }
            
            </div>
        </div>
    )

}

export default EmployeeCard;