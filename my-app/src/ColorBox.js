import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <AddColor />
    </div>
  );
}


export function AddColor() {
    // const color = "red"
    const [color, setColor] = useState("orange");
    const styles = {
      background: color,
      fontSize: "30px"
    };
    const colorList =["orange","red"];
    return (
      <div>
          <div className="add-color">
        <input
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          placeholder="Enter a Color"
        />
        <button className="btnlarge"> Add color </button>
        </div>
        {colorList.map(clr => <ColorBox />)}
  
        <ColorBox />
      
      </div>
        );
    }


    
  
  function ColorBox() {
    const styles = {
      backgroundColor: "pink",
      height: "50px",
      width: "250px",
      marginTop: "10px"
    };
  
    return <div style={styles}> </div>;
  }