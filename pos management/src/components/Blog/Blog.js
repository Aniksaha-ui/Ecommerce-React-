import React from "react";

const Blog = () => {
  return (
    <>
      <div class="card bg-teal-300 mt-4 mx-5">
        <div class="card-body text-center">
          <p class="text-3xl">
            if you have const [products, setProducts] = useState([]). Why you do
            not set products = [...] instead, you use the setProducts
          </p>
          <p className="text-2xl">
            Actually the setProduct is a function.It say to react that your
            state value is now this.State may change different purpose.So,every
            time react need to learn the state value for re-rendering.If we use
            speard operator it change the state value but not re-render again.
          </p>
        </div>
      </div>
      <div class="card bg-teal-300 mt-4 mx-5">
        <div class="card-body text-center">
          <p class="text-3xl">
            How will you improve the performance of a React Application?
          </p>
          <p class="text-2xl">
            Make component reuseable,try to avoid not needed props.using
            immutable data structure,multiple chunk list,manage optimize
            dependency can improve react application.
          </p>
        </div>
      </div>
      <div class="card bg-teal-300 mt-4 mx-5">
        <div class="card-body text-center">
          <p className="text-3xl">
            What are the different ways to manage a state in a React
            application?
          </p>
          <p class="text-2xl">
            There are many system to manage state.Firstly,we can manage state by
            props drilling.Another popular system is context api.For using
            context api,we need not to install any package.Another popular
            system is to use redux.It is very popular for state management.we
            need to install react-redux.
          </p>
        </div>
      </div>
      <div class="card bg-teal-300 mt-4 mx-5">
        <div class="card-body text-center">
          <p class="text-3xl">
            What is a unit test? Why should write unit tests?
          </p>
          <p class="text-2xl">
            To ensure that a part of application is working properly or not.It
            is very important for developing a software. If we don't write unit
            testing then that part may face problem that we don't recognize.So
            we have to write this unit testing.
          </p>
        </div>
      </div>
      <div class="card bg-teal-300 mt-4 mx-5 mb-20">
        <div class="card-body text-center">
          <p class="text-3xl">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </p>
          <p class="text-2xl">
            solution:
            <br /> const searchResult =
            products.find(product=>product.name==='apple') ;{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
