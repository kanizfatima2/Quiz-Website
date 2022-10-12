import React from 'react'

const About = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">

        <div className="mt-3">
          <h2 className="text-2xl font-bold hover:underline">What are the main purpose of React Router?</h2>
          <p className="mt-2">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
        </div>
      </div>
    </div>
  )
}

export default About
