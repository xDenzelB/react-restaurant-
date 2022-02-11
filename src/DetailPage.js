import { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { getRestaurantById } from './services/fetch-Utils';
import './App.css';

export default function DetailPage() {
  const [restaurant, setRestaurant] = useState({});
  const match = useRouteMatch();
  const history = useHistory();

  function redirectUpdate() {
    history.push(`/update/${match.params.id}`);
  }
  useEffect(() => {
    async function fetch() {
      const restaurants = await getRestaurantById(match.params.id);

      setRestaurant(restaurants);

    }

    fetch();
  }, [match.params.id]);
  return (
    <div className='details'>
      <h1>{restaurant.name}</h1>
      <h2>A {restaurant.type} Restaurant located in {restaurant.located} with a price rating of {restaurant.price_rate} out of 5</h2>
      <p>
        {restaurant.description}
      </p>
      <button onClick={redirectUpdate}>Update Restaurant</button>
    </div>
  );
}
