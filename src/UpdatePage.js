import { useState, useEffect } from 'react';
import { getRestaurantById, updateRestaurant, deleteRestaurant } from './services/fetch-Utils';
import { useParams, useHistory } from 'react-router-dom';

export default function UpdatePage() {
//   const { id } = useParams();
//   const history = useHistory();
//   const [name, setName] = useState('');
//   const [located, setLocated] = useState('');
//   const [type, setType] = useState('');
//   const [price, setPrice] = useState(0);
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     async function fetch() {
//       const restaurant = await getRestaurantById(id);
//     }
//   });
  return (
    <div>UpdatePage</div>
  );
}
