
import Header from './components/Header'
import AppContainer from './App.styles'

function App() {
  return (
    <AppContainer>
    <Header/>
    <div className="container">
      <div className="container__left">
        <h1 className='app__text'> <span className='learn'>Learn</span> your class <span className='schedule'>schedule</span></h1>
        <p className='app__paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni tempore facilis eos fuga cumque nam error debitis reiciendis ipsa suscipit.</p>
      </div>
      <div className="container__right"></div>

    </div>
      
    </AppContainer>
    
  );
}

export default App;
