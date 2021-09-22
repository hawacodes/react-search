
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import SearchInput from './views/contents/SearchInput'
import customerDetails from './data/CustomerDetails';
import "../src/style/card.css";


function App() {
  return (
    <div>
      <Container className="py-3" >
        <SearchInput details={customerDetails} />
      </Container>
    </div>
  );
}

export default App;
