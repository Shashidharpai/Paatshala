
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header_logo">
          <h1>Paatshala</h1>
        </div>
        <div className="header_side">
          <button className="header_side_button">Login</button>
        </div>
      </div>
      <div className="middle_1">
        <h1 style={{textAlign:"center",marginBottom:"10px"}}>What is Paatshala?</h1>
        <h2 style={{marginBottom:"10px"}}>Virtual School or College where.</h2>
          <div className="middle_1_row">
          <div className="middle_1_row_1">
        <h2>Teachers Can</h2>
        
        <h3 className="middle_1_row_list">· Conduct classes</h3>
        <h3 className="middle_1_row_list">· Give assignments</h3>
        <h3 className="middle_1_row_list">· Chat with students and collegues</h3>
       
        </div>
        <div className="middle_1_row_2">
        <h2>Students Can</h2>
        <h3 className="middle_1_row_list">· Attend classes</h3>
        <h3 className="middle_1_row_list">· View and submit assignments</h3>
        <h3 className="middle_1_row_list">· Chat with mates and teachers</h3>
        
        </div>
        </div>
       </div>
       <div className="middle_2">
         <h1> Why Paatshala?</h1>
       </div>
      <div className="footer">
        <h1>This is footer</h1>
      </div>
    </div>
  );
}

export default App;
