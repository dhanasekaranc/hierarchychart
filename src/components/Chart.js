import { useContext } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeGrid from "./EmployeeGrid";
import "./Chart.css";
import { DataContext } from "./ContextProvider";

export const searchEmployee = (value, property, empData) => {
    let emp = [];
    console.log(value, property, empData);
    const search = (currData) => {
        //console.log(currData);
        currData.forEach(item => {
            console.log(item, property, value);
            if ("abd" === value) {
                emp.push(item);
            }
            if (item.children) {
                //console.log(item.position)
                search(item.children);
            }
        })
    }
    search(empData);
    return emp;
}



const Chart = () => {

    const { data } = useContext(DataContext);

    // console.log(searchEmployee("name","abd",data));

    return (

        <div>
            {/* <div>
                    <div className="cards">
                        {data.length && data.map(item => {
                            return (
                                <EmployeeCard data={item} key={item.id} />
                            )
                        }
                        )}
                    </div>
                    {data.length && <EmployeeGrid items={data[0].children} />}
                </div> */}
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