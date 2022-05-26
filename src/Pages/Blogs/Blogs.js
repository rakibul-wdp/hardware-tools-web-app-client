import React from 'react';

const Blogs = () => {
  return (
    <div className='w-2/3 mx-auto'>
      <div className='p-10 pt-0 mt-16 mb-10' style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}>
        <h2 className='text-3xl font-bold italic mb-5'>
          1. How will you improve the performance of a React Application...???
        </h2>
        <div className='text-lg'>
          <p>
            Performance is the most important thing of a application. Because it provide better experience of user. Here
            is some guideline or techniques and tips & tricks for optimize performance a react application.
          </p>
          <ul className='list-disc list-inside'>
            <li>
              <span className='font-bold'>Using immutable data structures</span>
              <p>
                It's an opinionated way of writing code thats means how to think about application data flow. It's have
                many benefits like zero side-effects, prevent temporal coupling, easier to track changes.
              </p>
            </li>
            <li>
              <span className='font-bold'>Function/Stateless components and react pureComponent</span>
              <p>
                Function components prevent constructing class instances while reducing the overall bundle size as it
                minifies better than classes. Component state or props is an immutable object and make sure all child
                components of pure component should also be a functional component.
              </p>
            </li>
            <li>
              <span className='font-bold'>Dependency optimization</span>
              <p>
                When you considering optimizing the application bundle size, it's worth checking how many code utilizing
                from dependencies. An example is loadash. If you use 20 of the 100 plus methods then you can use lodash
                webpack plugin to remove unused functions.
              </p>
            </li>
            <li>
              <span className='font-bold'>Keeping component state local where necessary</span>
              <p>
                We know that state update parent component for re-renders the parent and it's child components. Make
                sure re-rendering a component only when necessary.
              </p>
            </li>
            <li className='font-bold'>Crate multiple chunk files</li>
            <li className='font-bold'>Use react fragments to avoid additional html element wrappers</li>
            <li className='font-bold'>Avoid reconciliation</li>
          </ul>
        </div>
      </div>
      <div className='p-10 pt-0 mb-10' style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}>
        <h2 className='text-3xl font-bold italic mb-5'>
          2. What are the different ways to manage a state in a React application...???
        </h2>
        <div className='text-lg'>
          <p>There are four main types of state you need to properly manage in react application.</p>
          <ul className='list-disc list-inside'>
            <li>
              <span className='text-md font-bold'>Local state: </span>Local state is most often managed in react using
              useState hook. Actually it is a data that we manage in one or another component. 'useState, useCallback,
              useReducer, dispatch'
            </li>
            <li>
              <span className='font-bold'>Global state: </span>With example global state is authenticated user state. If
              a user is logged int our app, it necessary to change their data throughout our application. It use when we
              want to get and update data in our app. 'useReducer, useContext'
            </li>
            <li>
              <span className='font-bold'>Server state: </span>Kind of data that comes from external server that
              integrated with our ui state. It managed when we fetch or update data from an external server. 'useState,
              useEffect, useSWR'
            </li>
            <li>
              <span className='font-bold'>URL state: </span>Existing data on our urls, including pathname and query
              parameter. 'useHistory, useLocation, useParams, useRouter'
            </li>
          </ul>
        </div>
      </div>
      <div className='p-10 pt-0 mb-10' style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}>
        <h2 className='text-3xl font-bold italic mb-5'>3. How does prototypical inheritance work...???</h2>
        <p className='text-lg'>
          Javascript objects inherited properties from other object that call prototypal inheritance. Object has methods
          and properties contain internal and hidden property known as prototype. Actually everything in javascript is
          an object. Object can point to another object and inherit all its properties. Main purpose is to allow
          multiple instances of an object to share common properties, hence and singleton pattern.
        </p>
      </div>
      <div className='p-10 pt-0 mb-10' style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}>
        <h2 className='text-3xl font-bold italic mb-5'>4. Why you do not set the state directly in React</h2>
        <p className='text-lg'>
          By updating state directly it just replace the update I made. When we directly update state, it does not
          change this.state immediately. It creates a pending state transition and also accessing after calling this
          method will only return present value. Thats why we will lose control state across all components. React track
          all its virtual dom. When a change happens, all the components are rendered and this new virtual dom is then
          compared with the odl virtual dom. Only the differences found are then reflected in the original dom. As a
          result the statement that if we mutate the state directly, it will change the reference of the state in the
          previous virtual dom. So, react not able to see that change of the state and won't be reflected in the
          original dom until we reload. If we directly set state we will not use it more time.
        </p>
      </div>
      <div className='p-10 pt-0 mb-10' style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}>
        <h2 className='text-3xl font-bold italic mb-5'>
          5. How will you implement a search to find products by name...???
        </h2>
        <p className='text-lg'>
          Most of the time we have a api and this api maximum time array. In this api have many object, also in object
          have like product or any other information like name, price, description etc. Second things we have another
          api for search by name. In this api name section is dynamic because user search products different name. Then
          we implement functionality like filter, find, includes and indexOf. By this four method we implement search
          method. If the search name and products name that have our array in object is matched, then it show result. If
          you want to check if an array contains a particular value then you should use includes method.
        </p>
      </div>
      <div className='p-10 pt-0 mb-10' style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}>
        <h2 className='text-3xl font-bold italic mb-5'>6. What is a unit test? Why should write unit tests...???</h2>
        <div className='text-lg'>
          <p className='mb-5'>
            Unit test is a method where Javascript test code is written for a web page or web application module. It is
            basically software testing where individual units or components of a software are tested. It only test
            single part of our implementation. They're like a method that return a link in a specific language.
          </p>
          <p>
            Unit tests help to find and fix bugs quickly and easily. It contribute to higher code quality and better
            application architecture and also it act as documentation. Unit text will help you discover issues much
            sooner and gain confidence. Also it help to fix bugs early in the development cycle and save costs. A good
            unit tests serve as project documentation thats I talk previously. Thant why we should write unit tests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
