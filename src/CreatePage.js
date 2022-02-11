import { useEffect, useState } from 'react';
import { createRestaurant, deleteRestaurant, getRestaurantById, updateRestaurant } from './services/fetch-Utils';
import { useHistory, useParams } from 'react-router-dom';


export default function CreatePage() {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState('');
  const [located, setLocated] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function fetch() {
      const restaurant = await getRestaurantById(id);
      setName(restaurant.name);
      setLocated(restaurant.located);
      setType(restaurant.type);
      setPrice(restaurant.price_rate);
      setDescription(restaurant.description);

    }

    fetch();
  }, [id]);

//   async function handleDelete() {
//     await deleteRestaurant(id);

//     history.push('/restaurants');
//   }

//   async function handleUpdate(e) {
//     e.preventDefault();

//     await updateRestaurant(id, {
//       name: name,
//       located: located,
//       type: type,
//       price_rate: price,
//       description: description
//     });
//   }
  
  async function handleSubmit(e) {
    e.preventDefault();

    await createRestaurant({
      name,
      located,
      type,
      price_rate: price,
      description
    });
    history.push('/restaurants');

  }

  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <h2>Add a New Restaurant</h2>
        <label>
            Name 
          <input value={name} onChange={e => setName(e.target.value)} required name='name' />
        </label>
        <label>
            Location 
          <input value={located} onChange={e => setLocated(e.target.value)} required name='located' />
        </label>
        <label>
            Type 
          <input value={type} onChange={e => setType(e.target.value)} required name='type' />
        </label>
        <label>
            Price Rating 
          <input value={price} onChange={e => setPrice(e.target.value)} required name='price_rate' />
        </label>
        <label>
            Description 
          <textarea value={description} onChange={e => setDescription(e.target.value)} required name='description' />
        </label>
        <button>Create Restaurant</button>
      </form>
      {/* <button onClick={handleUpdate}>Update Restaurant</button>
      <button onClick={handleDelete}>Delete Restaurant</button> */}
    </div>
  );
}
