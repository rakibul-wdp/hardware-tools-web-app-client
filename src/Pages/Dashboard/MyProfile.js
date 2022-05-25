import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UpdateProfileModal from './UpdateProfileModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const {
    data: profiles,
    isLoading,
    refetch,
  } = useQuery('profile', () =>
    fetch(`http://localhost:5000/profile?email=${user.email}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='w-11/12 mx-auto my-10 shadow-lg p-10'>
      <h2 className='text-center font-bold text-xl text-primary'>My Profile</h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-between'>
        <div>
          <p>Your Name</p>
          <p className='border outline-1 py-2 px-3 bg-gray-200'>{user.displayName}</p>
        </div>
        <div>
          <p>Your Email</p>
          <p className='border outline-1 py-2 px-3 bg-gray-200'>{user.email}</p>
        </div>
        <div>
          <p>Education</p>
          <p className='border outline-1 py-2 px-3 bg-gray-200'>{profiles[0]?.education}</p>
        </div>
        <div>
          <p>Location</p>
          <p className='border outline-1 py-2 px-3 bg-gray-200'>{profiles[0]?.location}</p>
        </div>
        <div>
          <p>Phone Number</p>
          <p className='border outline-1 py-2 px-3 bg-gray-200'>{profiles[0]?.phone}</p>
        </div>
        <div>
          <p>LinkedIn Id</p>
          <p className='border outline-1 py-2 px-3 bg-gray-200'>{profiles[0]?.linkedin}</p>
        </div>
      </div>
      <label htmlFor='profile-modal' className='btn btn-primary'>
        Update Profile
      </label>
      {<UpdateProfileModal profiles={profiles} refetch={refetch} />}
    </div>
  );
};

export default MyProfile;
