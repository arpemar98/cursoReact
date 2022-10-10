import './App.css';

function App() {
  
  let Carta = ( props ) => { 
    
    let carta = (
      <div class="col-4 card" >
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">{props.children}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );

    return carta;

  };

  // let datos = Array;



  return (

    <div className='container'>

      <div className='row'>
        <Carta>UNO</Carta>
        <Carta>DOS</Carta>
        <Carta>TRES</Carta>
        <Carta>TRES</Carta>
        <Carta>TRES</Carta>

      </div>

    </div>

  );

}

export default App;
