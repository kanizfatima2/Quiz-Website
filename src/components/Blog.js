import React from 'react'

const Blog = () => {
  return (
    <>
      <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl mt-5">Frequently Asked Questions</h2>

          <div className="space-y-4 mt-5">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none text-xl font-semibold focus-visible:ring-violet-400">What are the main purpose of React Router?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-100">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl font-semibold">How does Context API works?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-100"> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl font-semibold">What is the useRef hook?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-100"> The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object.</p>
            </details>
          </div>
        </div>
      </section>




    </>
  )
}

export default Blog
