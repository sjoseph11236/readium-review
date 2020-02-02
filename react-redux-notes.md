# React And Redux Review:

### What does react-router add to what we already know 
  - hooking in to URL and better non-ternary code
  - Provides a powerful way for view swapping combined with conditional logic

### How does BrowserRouter work if there is no hash 
  - serving up index.html, which requests bundle.js, which loads react-router, which hooks into URL, which determines if that path matches a view, which then renders the view

## Install React Router: 
  - Run this command: `npm install --save react-router-dom`

## What is React Router?
  - `react-router` is a library that establishes routes in our frontend application that render different components while also updating the URL as we traverse our  application.

## What is a route? 
  - A route is a combination of the URL and the component to be rendered at that URL. 

# The Router: 
  - For browser based projects the routers to use arr BrowserRuter and HashRouter
  - `<Browser router> `should be used when you have server that will handle dynamic requests. It knows how to respond to any possible URI. 
  - `<HashRouter>` should be used for a static website.