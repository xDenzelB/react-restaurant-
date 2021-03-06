import { Link } from 'react-router-dom';

export default function Restaurant({ restaurant }) {
  return (
    <Link to={`/restaurants/${restaurant.id}`}>
      <div className='food'>
        <h1>{restaurant.name}</h1>
        <h2>A {restaurant.type} Restaurant located in {restaurant.located} with a price rating of {restaurant.price_rate} out of 5</h2>

      </div>
    </Link>
  );

}
  