import EmployeeCard from "./EmployeeCard";
import "./EmployeeGrid.css";
import Team from "./Team";
import "./Team.css"

const EmployeeGrid = ({ data, empData }) => {
    //console.log(items);

    return (
        <div className="head">
            {data.map(item => {
                return (
                    <div key={item.id}>
                        <div>
                            <EmployeeCard emp={item} key={item.id}/>
                        </div>
                        <Team teams={item} empData={empData}/>
                    </div>

                )
            })}

        </div>
    )
}

export default EmployeeGrid;