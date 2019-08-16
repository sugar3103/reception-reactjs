import React from 'react';

export default function NumberPeopleSmall(props) {
    const array = []
    for (let i = 0; i < props.thutu; i++) {
        array.push(i)
    }
    // thêm cấu 3 chấm vào
    const addDot = () => {
        if (props.thutu === 9) {
            return <span>...</span>
        }
    }
    // thêm dấu + vào
    const addPlus =() =>{
        if(props.thutu === 9){
            return "+"
        }
    }

    return (
        <button className="col-md-4 people-small">
            <div className="people-small-img">
                {console.log(array)}
                {array.map((ele, index) => 
                    <img src="./assets/people.png" alt="people" key={index}/>
                )}
                {addDot()}
                <h1>{props.thutu}{addPlus()}</h1>
                
            </div>
        </button>
    )
}