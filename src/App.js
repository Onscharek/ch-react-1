import './App.css';
import Name from './cop/Name';
import Price from './cop/Price';
import Thenav from './cop/Thenav';
import Desc from './cop/Desc';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const firstName =""


function App() {
  return (
    <div className="App">
         {/* the nav */}
    <Thenav/>
    
    
   
    
    <Card  className='carr' style={{ width: '40rem'}}>
      <Card.Img variant="top" src=" https://images.pexels.com/photos/22302785/pexels-photo-22302785/free-photo-of-bighorn-sheep-in-desert.jpeg" />
      <Card.Body>
        <Card.Title> <Name/> </Card.Title>
        <Card.Text>
        <Desc/>
        </Card.Text>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>


    <h1>Hello, {firstName? firstName : 'there'}!</h1>
    {firstName && <img src="https://5.imimg.com/data5/ANDROID/Default/2021/12/VZ/PG/BP/107077226/product.jpg" alt="User" />}
    






    </div>
  );
}

export default App;
