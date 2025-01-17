import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink, useLocation } from 'react-router-dom';
import HeartPaw from '../assets/images/heart-paws.png';

const navigation = [
  { name: 'Login', to: '/login', current: false },
  { name: 'Meet the Pets', to: '/find', current: false },
  { name: 'About', to: '/about', current: false },
  { name: 'Contact', to: '/contact', current: false },
  { name: 'Donate', to: '/donate', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navigation() {
  const location = useLocation();
  return (
    <Disclosure as="nav" className="bg-gray-700">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-4 lg:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <NavLink to="/" className="flex flex-shrink-0 items-center">
                  <img
                    className="h-16 w-16"
                    src={HeartPaw}
                    alt="Pawsome Pets Logo - A heart with paw prints inside"
                  />
                </NavLink>
                <div className="hidden sm:ml-6 sm:flex flex-1 items-center">
                  <div className="flex space-x-4">
                    {navigation.slice(0, 4).map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          isActive
                            ? 'text-white text-sm px-3'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white text-sm px-3'
                        }
                        // className={classNames(
                        //   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        //   'rounded-md px-3 py-2 text-sm font-medium'
                        // )}
                        aria-current={location.pathname ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex">
                <NavLink
                  className="flex w-20 mx-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  to="/donate"
                >
                  Donate
                </NavLink>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden absolute z-40 bg-gray-800 w-full">
            <div className="space-y-1 px-2 pb-3 pt-2 ">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
