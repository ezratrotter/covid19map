import React from 'react';

const spinStyle = {
   height: "100vh",
   display: "flex",
   justifyContent: "center",
   alignItems: "center"
}


const Loading = () => {
   return (
      <div style={spinStyle}>
         <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
         </div>
      </div> 
   
       );
}
 
export default Loading; 