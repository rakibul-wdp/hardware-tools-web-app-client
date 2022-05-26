import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UpdateProfileModal = ({ profiles, refetch }) => {
  const [user] = useAuthState(auth);
  const handleOrder = (e) => {
    e.preventDefault();
    const profile = {
      email: user.email,
      education: e.target.education.value,
      location: e.target.location.value,
      phone: e.target.phone.value,
      linkedin: e.target.linkedin.value,
    };

    if (profiles[0] === undefined) {
      fetch(`http://localhost:5000/updateProfile`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(profile),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          toast('Profile Update successfully');
        });
    } else {
      fetch(`http://localhost:5000/updateProfile/${profiles[0]._id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(profile),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          toast('Profile Update successfully');
        });
    }
    e.target.reset();
  };
  return (
    <div>
      <input type='checkbox' id='profile-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <label htmlFor='profile-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h3 className='font-bold text-lg'>Update Your Profile</h3>
          <form onSubmit={handleOrder}>
            <label className='label'>
              <span className='label-text'>Education</span>
            </label>
            <input type='text' name='education' placeholder='Your Education' className='input w-full max-w-xs' />
            <label className='label'>
              <span className='label-text'>Location</span>
            </label>
            <input type='text' name='location' placeholder='Your Location' className='input w-full max-w-xs' />
            <label className='label'>
              <span className='label-text'>Phone Number</span>
            </label>
            <input type='text' name='phone' placeholder='Phone Number' className='input w-full max-w-xs' />
            <label className='label'>
              <span className='label-text'>LinkedIn Id</span>
            </label>
            <input type='text' name='linkedin' placeholder='Your LinkedIn Id' className='input w-full max-w-xs' />
            <input type='submit' value='Update Profile' className='btn btn-primary w-full max-w-xs' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
