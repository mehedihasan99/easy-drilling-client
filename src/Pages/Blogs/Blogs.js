import React from "react";

const Blogs = () => {
  return (
    <div className="px-14 mt-6 grid grid-col-1 gap-8 md:grid-cols-2  lg:grid-cols-3">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-1xl text-indigo-600">
            How will you improve the performance of a React Application?
          </h2>
          <p>
            For many applications, using React will lead to a fast user
            interface without doing much work to specifically optimize for
            performance. Nevertheless, there are several ways you can speed up
            your React application.
          </p>
          <div>
            <li>Use the Production Build</li>
            <li>Create React App</li>
            <li>Single-File Builds</li>
            <li>Brunch</li>
            <li>Single-File Builds</li>
            <li>Browserify</li>
            <li>Rollup</li>
            <li>webpack</li>
            <li>Profiling Components with the DevTools Profiler</li>
            <li>Virtualize Long Lists</li>
            <li>Avoid Reconciliation</li>
            <li>shouldComponentUpdate In Action</li>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-1xl text-indigo-600">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            React components have a built-in state object. The state is
            encapsulated data where you store assets that are persistent between
            component renderings. The state is just a fancy term for a
            JavaScript data structure. If a user changes state by interacting
            with your application, the UI may look completely different
            afterwards, because it's represented by this new state rather than
            the old state.
          </p>
          <div>
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-1xl text-indigo-600">
            How does prototypical inheritance work?
          </h2>
          <p>
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using __proto__.
          </p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-1xl text-indigo-600">
            How does prototypical inheritance work?
          </h2>
          <p>
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using __proto__.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
