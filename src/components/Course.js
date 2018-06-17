import React from "react";


const Course = (props) => (

    <div key={props.course.id} className = "card" >
        <div className="card-body">
            <div className="card-title">
                <h2>{`${props.course.title} by ${props.course.author}`} </h2>
            </div>
            <p className="card-text">
                {props.course.description}
            </p> 
            <a href={props.course.url} className="card-link" target="_blank">Go to course ... </a>
        </div>
        
    </div>
    
);

export default Course