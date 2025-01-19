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

const PetCard = ({ pet }: { pet: PetProps }) => {
  const { name, image, breed, age, type, location, size, num_users } = pet;
  return (
    <>
      <div className='max-w-sm rounded overflow-hidden shadow-lg m-3'>
        <div className='w-full h-48 flex justify-center items-center '>
          <img
            src={image ? image : 'https://via.placeholder.com/300'}
            className='w-64 h-48 object-contain'
            alt={`${name} the ${breed} ${type}`}
          />
        </div>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{name}</div>
          <p className='text-gray-700 text-base'>
            {age} year old {breed} from {location}.{' '}
            {type === 'dog' ? <span> Size: {size}</span> : null}
          </p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            Add to favorites
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            This pet has {num_users} favorites
          </span>
        </div>
      </div>
    </>
  );
};

export default PetCard;
