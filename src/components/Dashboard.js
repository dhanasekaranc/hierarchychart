import Chart from "./Chart";
import Header from "./Header";
import { useState,useContext } from "react";
import FilterEmployee from "./FilterEmployee";
import { DataContext } from "./ContextProvider";
import "./Dashboard.css";

const Dashboard = () => {

    const [filterData,setFilterData] = useState({type:"name",value:""});
    const [searchData,setSearchData] = useState([]);
    const {data} = useContext(DataContext);

    const filterEmployeeData = (type,value) => {
        if(value==="") {
            setSearchData([]);
            return;
        }
        const filtered = data.filter(item => item[type].toString().toLowerCase().includes(value.toLowerCase()));
        setSearchData(filtered);
        
    }
    return (
        <div>
            <Header />
            <FilterEmployee 
            filterEmployeeData={filterEmployeeData}
            filterData={filterData} 
            setFilterData={setFilterData}/>
            {filterData.value.length ? 
            searchData.length?
            <div className="search-data">
                {searchData.map(item => {
                return (
                    <div className="emp-details" key={item.id}>
                        <div className="name">Name:{" "}{item.name}</div>
                        <div className="position">Position:{" "}{item.position}</div>
                        <div>Team:{" "}{item.team}</div>
                        <div><a href={`mailto:${item.email}`} >{item.email}</a></div>
                        <div><a href={`tel:${item.phoneNumber}`} >{item.phoneNumber}</a></div>
                        
                    </div>
                )
            })}
            </div>
            :
            <div>No Employess Found</div>
            :<Chart />
            }
        </div>
    )
}

export default Dashboard;