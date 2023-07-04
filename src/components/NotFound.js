import React from 'react'
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 text-center">
        <h1 class="mt-5">404 Not Found</h1>
        <p class="lead">The page you are looking for does not exist.</p>
        
            <Link to="/" className="nav-link" class="btn btn-primary">Go to home</Link>
      
      </div>
    </div>
  </div>
  )
}
