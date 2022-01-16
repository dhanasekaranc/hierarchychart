import Header from "./Header";
import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeGrid from "./EmployeeGrid";
import { orgData } from "../data.js";
import "./Chart.css";


const Chart = () => {
    let localData = localStorage.getItem("DATA");
    const [data, setData] = useState([]);

    function search(input, inputName)  {
        console.log(data);
    }
    

    useEffect(() => {
        
        //console.log(localData);
        if (localData) {
            localData = JSON.parse(localData);
            setData(localData);
        }
        else {
            localStorage.setItem("DATA", JSON.stringify(orgData));
            setData(JSON.parse(JSON.stringify(orgData)));
        }
    }, [])


    return (
        <div>
            <Header />
            <div>
                <div className="cards">
                    {data && data.map(item => {
                        return (
                            <EmployeeCard data={item} key={item.id} />
                        )
                    }
                    )}
                </div>
                {data.length && <EmployeeGrid items={data[0].children} />}
            </div>
        </div>
    )
}

export default Chart;