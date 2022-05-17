import React, { useEffect } from "react";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    // fetching the data from api
    fetch("http://localhost:3001/api/v1/movies")
      .then((res) => res.json())
      .then((data) => setData(data)).catch(err=>console.error(err));
  }, []);
  return (
    <div className="card-container">
      {data.map(({ name, rating, date }, index) => {
        {
          /* index is not count as best practice  */
        }
        return <Card key={index} name={name} rating={rating} date={date} />;
      })}
    </div>
  );
};

export default Home;
