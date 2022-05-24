import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTool = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = '9f76d2bc94221bf115c83562c44a744a';

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const tools = {
            name: data.name,
            img: img,
            description: data.description,
            price: data.price,
            minimumOrderQuantity: data.minimumOrderQuantity,
            availableQuantity: data.availableQuantity,
          };
          // send to database
          fetch('http://localhost:5000/tool', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(tools),
          })
            .then((res) => res.json())
            .then((data) => {
              toast('Tool added successfully');
            });
        }
      });
  };
  return (
    <div>
      <h2>Add Tool</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Tool Name</span>
          </label>
          <input
            type='text'
            placeholder='Tool Name'
            className='input input-bordered w-full max-w-xs'
            {...register('name', {
              required: {
                value: true,
                message: 'Name is Required',
              },
            })}
          />
          <label className='label'>
            {errors.name?.type === 'required' && (
              <span className='label-text-alt text-red-500'>{errors.name.message}</span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Price</span>
          </label>
          <input
            type='number'
            placeholder='Tool Price'
            className='input input-bordered w-full max-w-xs'
            {...register('price', {
              required: {
                value: true,
                message: 'Price is Required',
              },
            })}
          />
          <label className='label'>
            {errors.price?.type === 'required' && (
              <span className='label-text-alt text-red-500'>{errors.price.message}</span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Minimum Order Quantity</span>
          </label>
          <input
            type='number'
            placeholder='Minimum Order Quantity'
            className='input input-bordered w-full max-w-xs'
            {...register('minimumOrderQuantity', {
              required: {
                value: true,
                message: 'Minimum Order Quantity is Required',
              },
            })}
          />
          <label className='label'>
            {errors.minimumOrderQuantity?.type === 'required' && (
              <span className='label-text-alt text-red-500'>{errors.minimumOrderQuantity.message}</span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Available Quantity</span>
          </label>
          <input
            type='number'
            placeholder='Available Quantity'
            className='input input-bordered w-full max-w-xs'
            {...register('availableQuantity', {
              required: {
                value: true,
                message: 'Available Quantity is Required',
              },
            })}
          />
          <label className='label'>
            {errors.availableQuantity?.type === 'required' && (
              <span className='label-text-alt text-red-500'>{errors.availableQuantity.message}</span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Description</span>
          </label>
          <textarea
            type='text'
            placeholder='Description'
            className='input input-bordered w-full max-w-xs h-24'
            {...register('description', {
              required: {
                value: true,
                message: 'Description is Required',
              },
            })}
          />
          <label className='label'>
            {errors.description?.type === 'required' && (
              <span className='label-text-alt text-red-500'>{errors.description.message}</span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Photo</span>
          </label>
          <input
            type='file'
            className='input input-bordered w-full max-w-xs'
            {...register('image', {
              required: {
                value: true,
                message: 'Image is Required',
              },
            })}
          />
          <label className='label'>
            {errors.image?.type === 'required' && (
              <span className='label-text-alt text-red-500'>{errors.image.message}</span>
            )}
          </label>
        </div>

        <input className='btn w-full max-w-xs text-white' type='submit' value='Add Tool' />
      </form>
    </div>
  );
};

export default AddTool;
