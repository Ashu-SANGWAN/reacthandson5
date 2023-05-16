import React from "react";

const HigherOrderCompo = (props) => {
    return (
        <>
            <h1 style={{color:'indigo',textAlign:'center'}}>Higher Order Component</h1>
            <hr/><br/><br/>
            <div style={{display:'flex', justifyContent:'center'}}>
                <div style={{backgroundColor:'rgb(63 70 221)', border:'1px solid white', borderRadius:'20px', width:'300px', height:'250px', margin:'15px'}}>
                    <props.data />
                </div>
                <div style={{backgroundColor:'#fd5173', border:'1px solid white', borderRadius:'20px', width:'300px', height:'250px', margin:'15px'}}>
                    <props.data />
                </div>
            </div>
        </>
    );
};

export default HigherOrderCompo;