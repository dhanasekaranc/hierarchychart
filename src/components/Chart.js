import { useContext } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeGrid from "./EmployeeGrid";
import "./Chart.css";
import { DataContext } from "./ContextProvider";


const Chart = () => {

    const { data } = useContext(DataContext);


    return (

        <div>
            <div>
                <div className="cards">
                    <EmployeeCard emp={data.filter(item => item.position === "CEO")[0]} key="ceo"/>
                </div>
                <EmployeeGrid data={data.filter(item => item.parent === "CEO")} empData={data}/>
            </div>
        </div>
    )
}

export default Chart;