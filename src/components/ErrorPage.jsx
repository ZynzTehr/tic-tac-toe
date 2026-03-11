import React from 'react';
import { Link } from 'react-router-dom';

// Import our global stylesheet properties.
// In smaller projects, having one index.css handles utility classes fine, 
// though as it scales, module-level CSS is preferred.
import '../styles/index.css';

/**
 * ErrorPage Component
 * 
 * This is a classic "404 Not Found" catch-all component.
 * In React Router, you typically map an asterisk path (`path="*"`) to this component 
 * so that if a user navigates to a URL that doesn't exist (e.g., `/xyz123`), 
 * they gracefully fall back here instead of the app crashing or showing a white screen.
 * 
 * Note: This component is written as a Class Component (extending React.Component).
 * While modern React overwhelmingly favors Functional Components with Hooks, 
 * Class Components are still fully supported and widely seen in legacy or existing codebases.
 */
class ErrorPage extends React.Component {
  
  // The render() method is mandatory in React Class Components. 
  // It dictates what DOM elements actually get painted to the screen.
  render() {

    // Commented out: `const location = useLocation();`
    // You cannot use React Hooks (like `useLocation`, `useState`, `useEffect`) 
    // inside a Class Component. Hooks were specifically designed for Functional Components.
    // If you needed location data here, you would typically wrap this class in a Higher-Order Component (HOC),
    // or refactor this class into a functional component.

    return (
      // React Fragments `<> ... </>` allow us to return multiple sibling elements 
      // without adding unnecessary `<div>` wrappers to the actual DOM.
      <>
        {/* We rely heavily on Bootstrap utility classes here for quick layout (text-center, mt-5). */}
        <div className='text-center'>
          
          <h1 className='mt-5 display-1'> There is Nothing Here! </h1>
          <h1><b> Go Back! </b></h1>
          <p> We couldn't find that Page! </p>
          
          {/* 
            * A fun, user-friendly fallback image. 
            * Relative paths in `src` can sometimes break if the React Router path is deeply nested (e.g., `/foo/bar/baz`).
            * Usually, a root-relative path (`/images/puppy.jpeg`) or a public URL is safer for 404 pages.
            */}
          <img className='mt-5 rounded' src={`${process.env.PUBLIC_URL}/images/puppy.jpeg`} alt='winking puppy face' />
          
          <h1 className='mt-5'><b> Page not Found </b></h1>
          
          {/* 
            * The Call To Action (CTA).
            * We use React Router's `<Link>` to seamlessly push the user back to the Root route (`/`) 
            * without triggering a hard browser refresh.
            */}
          <button className='btn btn-outline-info'>
            <Link to='/' className='text-muted text-decoration-none'>
              Try Again
            </Link>
          </button>
        </div>
      </>
    );
  }
}

export default ErrorPage;