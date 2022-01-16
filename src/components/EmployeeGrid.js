import EmployeeCard from "./EmployeeCard";
import "./EmployeeGrid.css";
import { useState } from "react";

const EmployeeGrid = ({ items }) => {
    //console.log(items);

    const [showTeams,setShowTeams] = useState(false);
    const [showTeamMembers,setShowTeamMembers] = useState(false);

    return (
        <div className="cards">
            {items && items.map(item => {
                return (
                    <div >
                        <EmployeeCard data={item} show={showTeams} setShow={setShowTeams} key={item.id} />
                        <div className="teams">
                            {showTeams && item.children.map(item => {
                                return (
                                    <div>
                                        <EmployeeCard data={item} show={showTeamMembers} setShow={setShowTeamMembers} key={item.id} />
                                        <div className="teams">
                                        {showTeamMembers && item.children.map(item =>
                                            <EmployeeCard data={item} key={item.id} />
                                        )}
                                        </div>
                                    </div>
                                )
                            }

                            )}
                        </div>
                    </div>
                )
            }

            )}


        </div>
    )
}

export default EmployeeGrid;