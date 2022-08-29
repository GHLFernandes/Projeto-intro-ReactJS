import Banner from './components/Banner';
import Form from './components/Form';

const banner = 'imagens/banner.png';

function App() {


  return (
    <div className="App">
        <Banner banner={banner}/>
        <Form/>
    </div>
  );
}

export default App;
