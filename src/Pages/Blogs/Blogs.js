import React from "react";

const Blogs = () => {
  return (
    <div className="px-0 md:px-14 mt-6 grid grid-col-1 gap-8 md:grid-cols-2  lg:grid-cols-3">
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
            Why you do not set the state directly in React.
          </h2>
          <p>
            In React, every state update causes the component being updated to
            re-render. Because re-rendering is an expensive operation, making
            state updates synchronously can cause serious performance issues,
            for example, increasing load times or causing your application to
            crash. By batching state updates, React avoids unnecessary
            re-renders, boosting performance overall.
          </p>
          <div>
            <li>
              If you update it directly, calling the setState() afterward may
              just replace the update you made.
            </li>
            <li>When you directly update the state, it does not change this</li>
          </div>
          <p>So that, Why I do not set the state directly in React.</p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-1xl text-indigo-600">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h2>
          <p>
            In this situation, I use the filter method in an array of product.
            and I check the function by includes method
          </p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-1xl text-indigo-600">
            What is a unit test? Why should write unit tests?
          </h2>
          <h2 className="font-bold">What is a unit test?</h2>
          <p>
            A unit test verifies the behavior of a unit of software in the
            system. It verifies whether a small and isolated piece of the
            codebase called “unit” behaves as the developer intended. Unit tests
            verify the smallest parts or components of an application by
            comparing their actual behavior with the expected behavior in
            complete isolation. Here, “complete isolation” means that, during
            unit testing, devs do not connect the application with external
            dependencies such as databases, the filesystem, or HTTP services.
            This allows unit tests to be fast and stable since they won’t fail
            due to problems integrating with those external services.
          </p>
          <h2 className="font-bold">Why should write unit tests?</h2>
          <p>
            In the case of unit tests, it allows for the modification of code
            without affecting the functionality of other units or the software
            in its entirety. This makes the job easier for developers as the
            bugs are easy to locate at this stage, which saves time and money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
