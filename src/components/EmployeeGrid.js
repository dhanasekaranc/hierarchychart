import EmployeeCard from "./EmployeeCard";
import "./EmployeeGrid.css";
import { useState } from "react";

const EmployeeGrid = ({ data, empData }) => {
    //console.log(items);

    const [showTeams, setShowTeams] = useState(false);
    const [showTeamMembers, setShowTeamMembers] = useState(false);

    return (
        // <div className="cards">
        //     {items && items.map(item => {
        //         return (
        //             <div >
        //                 <EmployeeCard data={item} show={showTeams} setShow={setShowTeams} key={item.id} />
        //                 <div className="teams">
        //                     {showTeams && item.children.map(item => {
        //                         return (
        //                             <div>
        //                                 <EmployeeCard data={item} show={showTeamMembers} setShow={setShowTeamMembers} key={item.id} />
        //                                 <div>
        //                                 {item.children.map(item =>
        //                                     <EmployeeCard data={item} key={item.id} />
        //                                 )}
        //                                 </div>
        //                             </div>
        //                         )
        //                     }

        //                     )}
        //                 </div>
        //             </div>
        //         )
        //     }

        //     )}


        // </div>
        <div className="head">
            {data.map(item => {
                return (
                    <div>
                        <div>
                            <EmployeeCard emp={item} key={item.id}/>
                        </div>
                        <div className="teams">
                            {item.children && item.children.map(team => {
                                return (
                                    <div>
                                        <div className="teamMember">{team}</div>
                                        {empData.filter(mem => (mem.team === team && mem.position === "Team Lead")).map(mem => {
                                            return (
                                                <EmployeeCard emp={mem} key={mem.id}/>
                                            )
                                        })}
                                        {empData.filter(mem => (mem.team === team && mem.position === "Team Member")).map(mem => {
                                            return (
                                                <EmployeeCard emp={mem} key={mem.id}/>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                )
            })}

        </div>
    )
}

export default EmployeeGrid;