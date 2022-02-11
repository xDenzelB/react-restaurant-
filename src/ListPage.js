import { useState, useEffect } from 'react';
import { getRestaurant } from './services/fetch-Utils';
import Restaurant from './Restaurant';

export default function ListPage() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetch() {
      const fetchRestaurant = await getRestaurant();

      setRestaurants(fetchRestaurant);
    }

    fetch();
  }, []);
  return (
    <div className='list-rest'>
      {
        restaurants.map(restaurant => <Restaurant key={`${restaurant.id}`} restaurant={restaurant} />)
      }
    </div>
  );
}
