import { useState } from 'react';
import { createRestaurant } from './services/fetch-Utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [located, setLocated] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

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
    </div>
  );
}
