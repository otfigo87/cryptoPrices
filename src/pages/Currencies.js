import { Link } from "react-router-dom";

const Currencies = () => {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (
    <div className="currencies">
      {currencies.map((currency) => {
        const { name, symbol } = currency;
        return (
          <Link to={`/price/${symbol}`} key={symbol} className="currencies-list">
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Currencies;
