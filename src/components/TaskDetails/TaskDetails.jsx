import React from 'react';
import { useHistory, useParams } from "react-router-dom"; 

import Button from '../Button/Button';

import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsa, cumque eum veritatis, hic omnis dolores consequatur odit, dicta et quas explicabo a voluptatum architecto repellat ab optio. In, eveniet!</p>
            </div>
        </>
    );
};
 
export default TaskDetails;