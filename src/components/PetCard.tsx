import { useSaveFavorites } from '../hooks/useSaveFavorites';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { Link } from 'react-router-dom';

interface PetProps {
  id: number;
  name: string;
  image: string;
  breed: string;
  age: number;
  type: string;
  location: string;
  size: string;
  gender: string;
  num_users: number;
}

const SIZE_MAPPINGS = {
  S: 'small',
  M: 'medium',
  L: 'large',
  XL: 'extra large',
} as const;

const PetCard = ({ pet }: { pet: PetProps }) => {
  const loggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const { saveFavorite, isPending } = useSaveFavorites();
  const { id, name, image, breed, age, type, location, size, num_users } = pet;
  const sizeName =
    type === 'dog' ? SIZE_MAPPINGS[size as keyof typeof SIZE_MAPPINGS] : '';

  const handleFavorite = (id: number) => {
    console.log('test', id);
    saveFavorite(id);
    console.log(isPending);
  };

  return (
    <>
      <div className='max-w-sm rounded overflow-hidden shadow-lg m-3'>
        <div className='w-full h-48 flex justify-center items-center '>
          <img
            src={image ? image : 'https://via.placeholder.com/300'}
            className='w-64 h-48 object-contain'
            alt={`${name} the ${breed} ${type}`}
            loading='lazy'
          />
        </div>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{name}</div>
          <p className='text-gray-700 text-base'>
            {age} year old {breed} from {location}.{' '}
            {type === 'dog' ? <span> Dog's size is {sizeName}.</span> : null}
          </p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          {loggedIn ? (
            <span
              role='button'
              onClick={() => handleFavorite(id)}
              className='inline-block bg-pink-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
            >
              Add to favorites
              <i
                className='fa-solid fa-heart fa-2xl'
                style={{ color: 'red' }}
              ></i>
              <i className='far fa-heart fa-2xl'></i>
            </span>
          ) : (
            <Link to='/login'>Login to add favorite.</Link>
          )}
          <span className='inline-block bg-pink-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            This pet has {num_users} favorites
          </span>
        </div>
      </div>
    </>
  );
};

export default PetCard;
