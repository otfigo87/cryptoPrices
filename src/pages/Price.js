import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const Price = () => {

  const [coin, setCoin] = useState(null);
//accessing the params object and the get symbol param
  const params = useParams();
  const symbol = params.symbol;

  const apiKey = process.env.REACT_APP_API_KEY;
  
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

//function to fetch data from the API and setState
  const getCoin = async () => {
    try {
      const response = await axios.get(url);
      setCoin(response.data)
    } catch (error) {
      console.error(error)
    }
  }
//use the fetching data inside the useEffect(when component render)
  useEffect(() => {
    getCoin();
  }, []);

  //what to return if we have data in state (JSX)
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>${coin.rate}</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
  //what to return if no data in state
  const loading = () => <h1>Loading...</h1>
  

  return coin && coin.rate ? loaded() : loading();
  
}

export default Price