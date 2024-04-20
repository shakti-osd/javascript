Webvitals : Web vitals are a set of metrics that measure the performance and user experience of a web page. They are designed to provide developers with a common set of metrics to focus on, in order to improve the overall user experience of their web pages. The three main web vitals are:

1. Largest Contentful Paint (LCP): measures the loading performance of a page, by recording the time it takes for the largest image or text block to load.

2. First Input Delay (FID): measures the interactivity of a page, by recording the time it takes for a page to become responsive to user input.

3. Cumulative Layout Shift (CLS): measures the stability of a page, by recording the amount of layout shift that occurs during the loading process.

To measure any of the supported metrics, you only need to pass a function into the reportWebVitals function in index.js:

reportWebVitals(console.log);

----------------------------------------------------------

  Web accessibility ? - Done
  
    
    
    
    
performance - Done
DRY/SOLID Principles
Design Pattern

shallow copy/deep copy
card deck question


different way to make API call in React
What is Shadow DOM and how is it different from Vitual DOM
ToDO task (ToDo, In Progress, Completed)
Compound Component Pattern
Service Worker
Tree Shaking/Babel/Prototype
Create a timer with start and pause functionality

Semantic elements
defer vs async
preconnect in css
promise.all/promise.race

git commands

setImmediate/clearImmediate – Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop.
process.nextTick – Both setImmediate and process.nextTick appear to be doing the same thing; however, you may prefer one over the other depending on your callback’s urgency. 

====================================================
               VS Code Extensions
====================================================
Auto Rename Tag
Bracket Pair Colorizer 2
ES7 React/Redux/GraphQL/React-Native Snippets
JavaScript (ES6) Code Snippets
Material Icon Theme
Prettier - Code Formatter

====================================================
                Deployment
====================================================
- Heroku.com
- Render.com
- Vercel.com




====================================================
                Counter Start/Pause
====================================================


import { useState, useEffect} from 'react'
const CounterComponent = () => {
  const [counter, setCounter] = useState(0)
  const [start, setStart] = useState(false)
  
  useEffect(() => {
    let timer
    if(start === true){
    timer = setInterval(()=>{
      setCounter(prevState => prevState + 1)
    },1000) 
      }else{
      clearInterval(timer)
      }
    return () => {
      clearInterval(timer)
    }
  },[start])
  
  const handleStartClick = () => {
    setStart(true)
  }
  const handlePauseClick = () => {
    setStart(false)
  }

  return (
    <>
      <button onClick={() => handleStartClick()}>Start</button>
      <button onClick={() => handlePauseClick()}>Pause</button>
      <p>Counter: {counter}</p>
    </>
  )
}
export default CounterComponent


/*

==================

*/
Common Modules
-------------------------
- Auth
- SMS Service
- Payment Integrtion
- Slot Booking
- Chat
