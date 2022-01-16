import "./EmployeeCard.css";
// import { search } from "./Chart.js";
import { DataContext } from "./ContextProvider";
import { useEffect, useState, useContext } from "react";
import EditModal from "./EditModal";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const EmployeeCard = ({ emp }) => {

    const { data,setData } = useContext(DataContext);
    const [show,setShow] = useState(false);

    const handleDelete = (e) => {
        const id = parseInt(e.target.id);
        const filter = data.filter(item => item.id !== id);
        console.log(filter);
        setData(filter);
    }

    const handleEdit = (editData) => {
       console.log(editData);
       const filter = data.filter(item => item.id !== editData.id);
       const edit = [...data,{...editData}];
       setData(edit);
       console.log(edit);
       setShow(false);

    }

    //console.log(data);
    return (
        <div className="employeeCard">
            {data.teamName && <div className="team">{data.teamName}</div>}
            <div className="card" >
                <div>{emp.name}</div>
                <div>{emp.position}</div>
                <div>
                    <button id={emp.id} onClick={(e) => handleDelete(e)}><DeleteOutlineIcon /></button>
                    <button id={emp.id} onClick={() => setShow(true)}>EDIT</button>
                    <EditModal empData={emp} show={show} handleClose={() => setShow(false)} handleEdit={handleEdit}/>
                </div>
            </div>
        </div>
    )

}

export default EmployeeCard;