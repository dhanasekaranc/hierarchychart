import "./EmployeeCard.css";
// import { search } from "./Chart.js";

const EmployeeCard = ({ data,show,setShow }) => {

    const handleEdit = (e) => {
    //    const emp = search(id, "id");
    console.log(e.target.value);
    }

    //console.log(data);
    return (
        <div className="employeeCard" onClick={() => setShow(!show)}>
            {data.teamName && <div className="team">{data.teamName}</div>}
            <div className="card" >
                <div>{data.name}</div>
                <div>{data.position}</div>
                <div>
                    <button id= {data.id} onClick={(e) => handleEdit(e)}>Edit</button>
                </div>
            </div>
        </div>
    )

}

export default EmployeeCard;