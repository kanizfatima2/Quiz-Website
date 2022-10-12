import React from 'react'

const Blog = () => {
  return (
    <>


      <div className="bg-gray-800 text-gray-100 mt-5">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900">

          <div className="mt-3">
            <h2 className="text-2xl font-bold hover:underline">What are the main purpose of React Router?</h2>
            <p className="mt-2">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>

          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-gray-100 mt-5">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900">

          <div className="mt-3">
            <h2 className="text-2xl font-bold hover:underline">How does Context API works?</h2>
            <p className="mt-2">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-gray-100 mt-5">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900">

          <div className="mt-3">
            <h2 className="text-2xl font-bold hover:underline">What is the useRef hook?</h2>
            <p className="mt-2">The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object.</p>
          </div>
        </div>
      </div>


    </>
  )
}

export default Blog
