import { TextField, MenuItem } from "@mui/material";
import { useState } from "react";
import "./FilterEmployee.css"

const filterDetails = ["name", "email", "phoneNumber"];

const FilterEmployee = ({ filterEmployeeData,filterData,setFilterData}) => {

    const [timerId,setTimerId] = useState();

    const debounceSearch = (e) => {
        let value = e.target.value;
        
        if(timerId) {
            clearTimeout(timerId);
        }

        const id = setTimeout(() => filterEmployeeData(filterData.type,value),500);
        setTimerId(id);
        setFilterData(() => ({...filterData,value: value}));
    }

    return (
        <div className="filter">
            <div className="filterby-text">Filter By</div>
            <div className="filter-select">
            <TextField
                select
                margin="dense"
                id="filterType"
                type="text"
                value={filterData.type}
                variant="outlined"
                onChange={(e) => setFilterData({ ...filterData, type: e.target.value })}
            >
                {filterDetails.map((item, index) => {
                    return (
                        <MenuItem key={index} value={item}>
                            {item}
                        </MenuItem>
                    )
                })}
            </TextField>
            </div>
            <div className="search"></div>
            <div>
            <TextField
                label="Search"
                id="search"
                type="text"
                variant="outlined"
                value={filterData.value}
                onChange={(e) => debounceSearch(e)}
            />
            </div>
        </div>
    )
}

export default FilterEmployee;