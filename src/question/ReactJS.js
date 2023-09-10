import React from 'react'
import redux from "./img/redux.png"
import mounting from "./img/mounting.png"
import unMounting from "./img/unMounting.png"
import updating from "./img/updating.png"
const ReactJS = () => {
    return (
        <main className='container mt-3'>
            <section className='col-sm-12'>
                <h3 className='text-center text-success'>ReactJS</h3>
                <ol>
                    <li>
                        <p className='ques'>What is ReactJS?</p>
                        <p className='ans'>React, is an open-source JavaScript library for building user interfaces (UIs) or user interface components.</p>
                    </li>

                    <li>
                        <p className='ques'>What is JSX.</p>
                        <p className='ans'>JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code).</p>
                    </li>

                    <li>
                        <p className='ques'>What is Fragment.</p>
                        <p className='ans'> React Fragments help wrap multiple elements/components together as it is better optimized, but they should only be used when needed.</p>
                    </li>

                    <li>
                        <p className='ques'>What Is React Conditional Rendering?</p>
                        <p className='ans'>
                            <ol>
                                <li>Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.</li>
                                <li>In React, conditional rendering is the process of displaying different content based on certain conditions or states. It allows you to create dynamic user interfaces that can adapt to changes in data and user interactions.</li>
                            </ol>
                        </p>
                    </li>

                    <li>
                        <p className='ques'>Diff. Between Virtual Dom and Real Dom.</p>
                        <p className='ans'>Real DOM is what you see on your browser screen and virtual DOM is copy of it. The main difference is that when you make changes in any part of real DOM, It re-renders the whole DOM at once and that affects efficiency of your server loading cause it has to reload the whole page as browser can only read JS, Html/CSS.</p>
                    </li>

                    <li>
                        <p className='ques'>What is Component ?</p>
                        <p className='ans'>A component is an independent, reusable bit of code which divides the UI into smaller pieces. </p>
                    </li>
                    <li>
                        <p className='ques'>What is routing ?</p>
                        <p className='ans'>Routing is the process of redirecting a user to different pages based on their action or request.</p>
                    </li>

                    <li>
                        <p className='ques'>Diff. Between Functional and Class Based Components.</p>
                        <p className='ans'>A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). A class component requires you to extend from React. Component and create a render function that returns a React element.</p>
                    </li>
                    <li>
                        <p className='ques'>Diff. Between controlled and uncontrolled components.</p>
                        <p className='ans'>In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state. You can use ref to access the DOM element directly.</p>
                    </li>
                    <li>
                        <p className='ques'>What is prop and prop drilling?</p>
                        <p className='ans'><mark>Prop drilling</mark><br />
                            Prop drilling occurs when a parent component passes data down to its children and then those children pass the same data down to their own children. This process can continue indefinitely. At the end, it's a long chain of component dependencies that can be difficult to manage and maintain.<br />

                            <mark>prop</mark><br />
                            They are read-only components. Props are used to pass data from a parent component to a child component.
                        </p>
                    </li>
                    <li>
                        <p className='ques'>What is state?</p>
                        <p className='ans'>state is used to manage data within a component</p>
                    </li>
                    <li>
                        <p className='ques'>What is useEffect?</p>
                        <p className='ans'>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM.<br />useEffect accepts two arguments. The second argument is optional.<br />
                            <mark>{"useEffect(<function>, <dependency>)"}</mark>
                        </p>
                    </li>
                    <li>
                        <p className='ques'>What is useCallback?</p>
                        <p className='ans'>are tools optimize performance in React Component. <br />useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.</p>
                    </li>

                    <li>
                        <p className='ques'>What is useMemo?</p>
                        <p className='ans'>The useMemo is a hook used in the functional component of react that returns a memoized value.<br />
                            The useMemo Hook only runs when one of its dependencies update. This can improve performance.</p>
                    </li>
                    <li>
                        <p className='ques'>What is useRef?</p>
                        <p className='ans'>
                            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                        </p>
                    </li>

                    <li>
                        <p className='ques'>What is HOC?</p>
                        <p className='ans'>a higher-order component is a function that takes a component and returns a new component. HOCs are commonly used in React for various purposes, such as authentication, routing, data fetching, and code reuse. Libraries like React Redux and React Router use HOCs extensively to provide functionality to components. However, with the introduction of React Hooks, some of the patterns and use cases of HOCs can be achieved more elegantly using hooks like useContext and useEffect.</p>
                    </li>
                    <li>
                        <p className='ques'>What is Pure Component</p>
                        <p className='ans'>In functional components, you can achieve the same optimization as Pure Components using the React.memo higher-order component. It works similarly by memoizing the component and preventing re-renders when the props haven't changed.</p>
                    </li>
                    <li>
                        <p className='ques'>What is Reconciliation</p>
                        <p className='ans'>The reconciliation process makes React work faster. Reconciliation is the process through which React updates the Browser DOM.<br />
                            Important concepts behind the working of the Reconciliation process are:
                            <ol>
                                <li>Virtual DOM</li>
                                <li>Diffing Algorithm</li>
                            </ol>
                        </p>

                    </li>

                    <li>
                        <p className='ques'>diff. between high order component and pure componet in reactJS</p>
                        <p className='ans'>
                            <mark>Pure Components</mark>: functional components that performs shouldComponentUpdate() automatically. Re-renders only if state or props is different from previous state or props.<br />
                            <mark> Higher-Order Components</mark> :  functions that return one or multiple components, depending on array data.
                        </p>
                    </li>


                    <li>
                        <p className='ques'>What is useLazy?</p>
                        <p className='ans'>
                            it allows you to lead parts of your application on-demand to reduce the initial load time.
                        </p>
                    </li>



                    <li>
                        <p className='ques'>What is forwardRef?</p>
                        <p className='ans'>In React.js, forwardRef is a higher-order component (HOC) that allows you to forward a ref from a child component to a DOM element or another React component that is not part of the component hierarchy. </p>
                    </li>

                    <li>
                        <p className='ques'>What is useReducer ?</p>
                        <p className='ans'>
                            <ol>
                                <li>The useReducer Hook is similar to the useState Hook.</li>
                                <li>If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.</li>
                                <li>The useReducer Hook accepts two arguments.</li>
                            </ol>
                        </p>
                    </li>
                    <li>
                        <p className='ques'>What is React Custom Hooks?</p>
                        <p className='ans'>
                            <ol>
                                <li>Hooks are reusable functions.</li>
                                <li>When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</li>
                            </ol>
                        </p>
                    </li>
                    <li>
                        <p className='ques'>Diif. Between useContext & Redux</p>
                        <p className='ans'><mark>useContext</mark>
                            <ol>
                                <li>useContext is a hook.</li>
                                <li>We can change the state in it.</li>
                                <li>It re-renders all components whenever there is any update in the provider’s value prop.	</li>
                            </ol>
                            <mark>Redux</mark>
                            <ol>
                                <li>Redux is a state management library.</li>
                                <li>It is used to manage data and state.</li>
                                <li>The state is read-only. We cannot change them directly.</li>
                                <li>It only re-render the updated components.</li>
                            </ol>
                        </p>
                    </li>

                    <li>
                        <p className='ques'>What is useReducer?</p>
                        <p className='ans'>The useReducer Hook is similar to the useState Hook.
                            <br />
                            The useReducer is a hook I use sometimes to manage the state of the application.
                            <br />
                            The useReducer Hook returns the current stateand a dispatchmethod.
                        </p>
                    </li>


                    <li>
                        <p className='ques'>Explain 'STRICT MODE' in React.</p>
                        <p className='ans'>StrictMode is a tool for highlighting potential problems in an application. Like Fragment, performs a set of additional checks and warnings on your application during rendering</p>
                    </li>
                    <li>
                        <p className='ques'>What is Error boundaries.</p>
                        <p className='ans'>React are a crucial aspect of error handling in React applications. They are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.</p>
                    </li>
                    <li>
                        <p className='ques'>How to prevent re-renders in react?</p>
                        <p className='ans'>The useMemo hook can prevent unnecessary re-renders by memoizing the result of a function and only recomputing it if its dependencies have changed.</p>
                    </li>
                    <li>
                        <p className='ques'>How to pass data from children to parent?</p>
                        <p className='ans'>The child component calls the parent callback function using props and passes the data to the parent component.</p>
                    </li>


                    <li>
                        <p className='ques'>Functional Components vs Class Components:</p>
                        <p className='ans'><mark>Functional Components</mark> A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). There is no render method used in functional components.<br />
                            <mark>Class Components:</mark> A class component requires you to extend from React. Component and create a render function that returns a React element.

                        </p>
                    </li>


                    <li>
                        <p className='ques'>Lifecycle</p>
                        <p className='ans'>
                            <ul>
                                <mark>A component's lifecycle has three main phases: the Mounting Phase, the Updating Phase, and the Unmounting Phase.</mark>
                                <li><mark>Mounting:</mark><br />The Mounting Phase begins when a component is first created and inserted into the DOM.<br />
                                    <img src={mounting} alt='redux' className='img-fluid' />
                                </li>
                                <li><mark>Updating:</mark> The Updating Phase occurs when a component's state or props change.<br />
                                    <img src={updating} alt='redux' className='img-fluid' />
                                </li>
                                <li><mark>Unmounting:</mark> And the Unmounting Phase occurs when a component is removed from the DOM.<br />
                                    <img src={unMounting} alt='redux' className='img-fluid' />
                                </li>
                            </ul>
                        </p>
                    </li>



                    <li>
                        <p className='ques'>Difference between Link and a tag</p>
                        <p className='ans'>Use the NavLink or Link when you need links that are routing to pages that belong to your application. For external links, a is preferrable. The anchor tag a : This is used for links outside your webpage.</p>
                    </li>



                    <li>
                        <p className='ques'>what is optimization in react ? </p>
                        <p className='ans'>In functional components, you can achieve the same optimization as Pure Components using the React.memo higher-order component. It works similarly by memoizing the component and preventing re-renders when the props haven't changed.</p>
                    </li>

                    <li>
                        <p className='ques'>what react router dom in reactJS</p>
                        <p className='ans'>
                            <ul>
                                <li>React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL.</li>
                                <li>It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page.</li>
                            </ul>
                        </p>
                    </li>

                    <li>
                        <p className='ques'>diff. between stateless component v stateful component in react js</p>
                        <p className='ans'>
                            A stateless component renders output which depends upon props value, but a stateful component render depends upon the value of the state. A functional component is always a stateless component, but the class component can be stateless or stateful.
                        </p>
                    </li>


                    <li>
                        <p className='ques'>What is unidirectional data flow in React?</p>
                        <p className='ans'>React, a Javascript library, uses unidirectional data flow. The data from the parent is known as props. You can only transfer data from parent to child and not vice versa.<br />
                            This means that the child components cannot update or modify the data on their own, makeing sure that a clean data flow architecture is followed. This also means that you can control the data flow better.


                            <ol>
                                <li>Virtual DOM</li>
                                <li>Diffing Algorithm</li>
                            </ol>
                        </p>
                    </li>
                    <li>
                        <p className='ques'>What is Redux?</p>
                        <p className='ans'>Redux is an open-source JavaScript library used to manage application state. </p>
                        <p className='ans'><b>Dispatch:</b><br />
                            The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object.
                        </p>
                        <p className='ans'><b>Action:</b><br />
                            <mark>Type (required):</mark> A string that describes the type of action being performed. It is typically defined as a constant to ensure consistency and avoid typos. The type is used by reducers to determine how to update the state.<br />

                            <mark>Payload (optional):</mark> Any data that needs to be sent along with the action. The payload contains information relevant to the action, such as the data to be added, updated, or deleted.</p>
                        <p className='ans'><b>Reducer:</b><br />
                            A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state</p>
                        <p className='ans'><b>Store:</b><br />
                            Global app state is kept in a single store. The Redux store is the main, central bucket which stores all the states of an application. Reducer functions are used to update the state in response to actions</p>
                        <img src={redux} alt='redux' height="200" />
                    </li>
                    <li>
                        <p className='ques'>Deff. between is Saga Middleware vs thunk Middleware</p>
                        <p className='ans'><mark>Saga Middleware <hr />Redux Saga is a middleware library used to allow a Redux store to interact with resources outside of itself asynchronously.</mark>
                            <ol>
                                <li>In the saga, it allows you to send action normally.</li>
                                <li>Saga uses Generators, more powerful, seperate thread, handle effect.</li>
                                <li>Easy to scale as compared to redux-thunk codes.</li>
                                <li>Comparatively easy to test as all your async logic remains together.</li>
                                <li>Action creators stay pure functions.</li>
                                <li>Easy to test as all async logic remains together.</li>
                                <li>Due to multiple concepts to learn like generator functions and redux-saga effects, etc. It is difficult to understand.</li>
                            </ol>
                            <mark>thunk Middleware <hr />  Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.</mark>
                            <ol>
                                <li>In thunk, action creator does not return an object, it returns a function.</li>
                                <li>Thunk allows Promises, simple, return function.</li>
                                <li>Action creators may hold too many async logic functions.</li>
                                <li>Difficult to test async functions.</li>
                                <li>As compared to redux-saga, easy to understand logic, functions, concepts.</li>
                            </ol>
                        </p>
                    </li>

                    <li>
                        <p className='ques'>React Advantage ?</p>
                        <p className='ans'>
                            <ol>
                                <li>Because of JSX, code's readability increases.</li>
                                <li>Re usable Component</li>
                                <li>Virtual Dom</li>
                                <li>Having JavaScript Library</li>
                            </ol>
                        </p>
                    </li>
                    <li>
                        <p className='ques'>React disadvantage?</p>
                        <p className='ans'>
                            <ol>
                                <li>SEO change</li>
                                <li>State Managment</li>
                                <li>Client Side rendring</li>
                                <li>performance optimization</li>
                            </ol>
                        </p>
                    </li>
                </ol>

            </section>

        </main>
    )
}

export default ReactJS
