import React from 'react';

const Legend = ({legendItems}) => {
   legendItems.map(item=>console.log(item))
   return ( 
      <div style={{
         display: "flex",
         alignItems: "stretch"
      }}>
         {legendItems.map((item) => (
            <div style={{
               backgroundColor: item.color,
               flex: 1,
               display: "flex",
               alignItems: "center", //vertical 
               justifyContent: "center", //horizontal
               color: item.textColor,
               height: "10vh",
               fontWeight: "bolder",
               fontSize: "1.5em",
               
            }} key={item.title}>
               <span>{item.title}</span>
            </div>
         ))}
         
      </div>

    );
}
 
export default Legend;