import adopt from '../assets/images/adopt.png';
import counsel from '../assets/images/counsel.png';
import checks from '../assets/images/checks.png';
import pets from '../assets/images/pets.png';
import home from '../assets/images/home.png';

const Adopt = () => {
  return (
    <div className='mx-auto  px-4 sm:px-8 lg:px-10'>
      <h2 className='font-cuteCat text-6xl md:text-7xl lg:text-8xl text-center font-bold mt-3 pt-2 mb-2'>
        Adoption Process
      </h2>
      <p className='mb-3 mt-6 text-lg'>
        Are you looking to welcome a new four-legged friend into your family? We
        have adoptable puppies, dogs, cats and kittens looking for forever
        homes. Our adoption process is quick and easy, and it's tailored to find
        a great fit for your family. You don't even have to specify a particular
        animal when beginning the process – we are here to help.
      </p>
      <p className='mb-3 mt-4 text-lg'>
        If you are interested in a specific animal, please be sure to list their
        names on your questionnaire. If you can’t find their name, don’t worry:
        simply write in the notes who you might be interested in. You can write
        multiple animals into a single application; no need to apply multiple
        times. Please note that submitting a questionnaire is the first step in
        our process and does not guarantee adoption of a particular dog or cat.
        Contact us if you have any questions.
      </p>

      {/* Section 1 */}
      <section className='flex flex-1 justify-around items-center my-10'>
        <div className='basis-1/4 slide-in slide-right'>
          <img
            src={adopt}
            height='200px'
            width='200px'
            alt='cartoon of hands typing on a laptop'
          />
        </div>
        <div className='basis-3/4 pl-4 slide-left slide'>
          <h2 className='font-cuteCat text-4xl md:text-5xl lg:text-6xl text-center font-bold mt-3 pt-2 mb-2'>
            Step 1
          </h2>
          <h3 className='font-cuteCat text-2xl md:text-3xl lg:text-4xl text-center font-bold mt-3 pt-2 mb-2'>
            Fill out the Adoption Questionnaire
          </h3>
          <p>
            Complete a Dog or Cat Adoption Questionnaire. If you are interested
            in applying for a specific animal on the website, please be sure to
            list their names on your questionnaire. If you cannot select an
            animal please still submit your questionnaire and write in the notes
            who you might be interested in. You only need to apply once and we
            will ensure it is directed to the right person. Please note that
            submitting an application is the first step in our process and does
            not guarantee adoption of a particular dog or cat. Contact us if you
            have any questions.
          </p>
          <button className='flex w-30 mx-auto mt-5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Adoption Questionnaire
          </button>
        </div>
      </section>

      {/* Section 2 */}

      <section className='flex flex-1 justify-around items-center my-10'>
        <div className='basis-3/4 slide-in slide-right'>
          <h2 className='font-cuteCat text-4xl md:text-5xl lg:text-6xl text-center font-bold mt-3 pt-2 mb-2'>
            Step 2
          </h2>
          <h3 className='font-cuteCat text-2xl md:text-3xl lg:text-4xl text-center font-bold mt-3 pt-2 mb-2'>
            Adoption Counseling
          </h3>
          <p>
            You will be contacted via email by a Volunteer Lucky Dog Animal
            Rescue Adoption Counselor. They will schedule an initial phone
            screening to further discuss your needs, preferences and lifestyle
            as you look for a new family member. Our goal is to ensure a good
            fit and guide you along your journey to pet adoption.
          </p>
        </div>
        <div className='basis-1/4 pl-4 slide-left slide'>
          <img
            src={counsel}
            height='200px'
            width='200px'
            alt='cartoon of hands typing on a laptop'
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className='flex flex-1 justify-around items-center my-10'>
        <div className='basis-1/4 slide-in slide-right'>
          <img
            src={checks}
            height='200px'
            width='200px'
            alt='cartoon of hands typing on a laptop'
          />
        </div>
        <div className='basis-3/4 pl-4 slide-left slide'>
          <h2 className='font-cuteCat text-4xl md:text-5xl lg:text-6xl text-center font-bold mt-3 pt-2 mb-2'>
            Step 3
          </h2>
          <h3 className='font-cuteCat text-2xl md:text-3xl lg:text-4xl text-center font-bold mt-3 pt-2 mb-2'>
            Checks
          </h3>
          <p>
            Your Adoption Counselor will also conduct any required checks,
            including a vet check to ensure your pets are up to date on medical
            needs. We will also complete a landlord check if you rent. This
            ensures your new family member will be a welcome addition to your
            home.
          </p>
        </div>
      </section>

      {/* Section 4 */}

      <section className='flex flex-1 justify-around items-center my-10'>
        <div className='basis-3/4 slide-in slide-right'>
          <h2 className='font-cuteCat text-4xl md:text-5xl lg:text-6xl text-center font-bold mt-3 pt-2 mb-2'>
            Step 4
          </h2>
          <h3 className='font-cuteCat text-2xl md:text-3xl lg:text-4xl text-center font-bold mt-3 pt-2 mb-2'>
            Find Your Family Member
          </h3>
          <p>
            Following steps 1-3, you will either be approved to adopt the dog or
            cat you are interested in or pre-approved and matched with some
            animals from which to choose. You can view the list of current
            animals online, attend one of our weekly Adoption Events to meet our
            pets, or you can work with your Adoption Counselor to set up a
            meeting at a convenient time. If we don’t have the breed or size you
            are looking for, we can work with our shelter partners to find one.
            If you are having trouble finding the right fit - ask your Counselor
            about Matchmaking. We have many puppies, dogs, cats and kittens
            looking for homes and our volunteers will help you find the best
            match.
          </p>
        </div>
        <div className='basis-1/4 pl-4 slide-left slide'>
          <img
            src={pets}
            height='200px'
            width='200px'
            alt='cartoon of hands typing on a laptop'
          />
        </div>
      </section>

      {/* Section 5 */}
      <section className='flex flex-1 justify-around items-center my-10 '>
        <div className='basis-1/4 slide-in slide-right'>
          <img
            src={home}
            height='200px'
            width='200px'
            alt='cartoon of hands typing on a laptop'
          />
        </div>
        <div className='basis-3/4 pl-4 slide-left slide mb-15'>
          <h2 className='font-cuteCat text-4xl md:text-5xl lg:text-6xl text-center font-bold mt-3 pt-2 mb-2'>
            Step 5
          </h2>
          <h3 className='font-cuteCat text-2xl md:text-3xl lg:text-4xl text-center font-bold mt-3 pt-2 mb-2'>
            Adopt
          </h3>
          <p>
            The last step is adopting your new furry family member. At the time
            of adoption the adoption fee is due. See below for a list of fees.
            We also require each animal to go home with a leash, ID tag,
            martingale collar and carrier for cats/kittens.
          </p>
        </div>
      </section>
    </div>
  );
};
export default Adopt;
