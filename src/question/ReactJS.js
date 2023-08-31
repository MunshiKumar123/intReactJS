import React from 'react'
import redux from "./redux.png"
const ReactJS = () => {
    return (
        <main className='container mt-3'>
            <section className='col-sm-12'>
                <ol>
                    <li>
                        <p className='ques'>What is JSX.</p>
                        <p className='ans'>JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code).</p>
                    </li>
                    <li>
                        <p className='ques'>Diff. Between Virtual Dom and Real Dom.</p>
                        <p className='ans'>Real DOM is what you see on your browser screen and virtual DOM is copy of it. The main difference is that when you make changes in any part of real DOM, It re-renders the whole DOM at once and that affects efficiency of your server loading cause it has to reload the whole page as browser can only read JS, Html/CSS.</p>
                    </li>

                    <li>
                        <p className='ques'>Diff. Between Functional and Class Based Components.</p>
                        <p className='ans'>A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). A class component requires you to extend from React. Component and create a render function that returns a React element.</p>
                    </li>
                    <li>
                        <p className='ques'>Diff. Between controlled and uncontrolled components.</p>
                        <p className='ans'>In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.</p>
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
                        <p className='ques'>What is useLazy?</p>
                        <p className='ans'>
                            it allows you to lead parts of your application on-demand to reduce the initial load time.
                        </p>
                    </li>
                    <li>
                        <p className='ques'>What is useContext?</p>
                        <p className='ans'>React Context is a way to manage state globally.<br />
                            It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.</p>
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
                        <p className='ques'>Lifecycle</p>
                        <p className='ans'>Mounting, Updating & Unmounting</p>
                    </li>
                    <li>
                        <p className='ques'>Difference between Link and a tag</p>
                        <p className='ans'>Use the NavLink or Link when you need links that are routing to pages that belong to your application. For external links, a is preferrable. The anchor tag a : This is used for links outside your webpage.</p>
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
