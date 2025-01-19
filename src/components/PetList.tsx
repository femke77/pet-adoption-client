import PetCard from './/PetCard';
import { usePetQuery } from '../hooks/usePetQuery';
import type { Pet } from '../interfaces/Pet';

const PetList = () => {
  const { data: pets, isLoading, error } = usePetQuery();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className='flex flex-wrap justify-center'>
      {pets?.map((pet: Pet) => <PetCard key={pet.id} pet={pet} />)}
      {error && <p>Error fetching pets.</p>}
    </div>
  );
};

export default PetList;
