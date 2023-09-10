import React from 'react'
import event from "./img/event.png"

const JavaScript = () => {


    return (

        <main className='container mt-3'>
            <section className='col-sm-12'>
                <h3 className='text-center text-success'>JavaScript</h3>
                <ol>
                    <li>
                        <p className='ques'>What is JavaScript?</p>
                        <p className='ans'>JavaScript is a scripting language for creating dynamic web page content. JavaScript provides users to interact with web pages</p>
                    </li>
                    <li>
                        <p className='ques'>Diff. Between let, const and var.</p>
                        <p className='ans'>
                            <ol>
                                <li>var declarations are globally scoped or function scoped while let and const are block scoped.</li>
                                <li>{'{ let x=10; let y=30}'} </li>
                                <li><mark>let</mark> don't re-declare but value re-asign<hr />
                                    which means they are only accessible within the nearest enclosing block</li>
                                <li><mark>const</mark> don't re-declare and don't value re-asign <hr />
                                    which means they are only accessible within the nearest enclosing block</li>
                            </ol>
                        </p>
                    </li>
                    <li>
                        <p className='ques'>What is hoisting ?</p>
                        <p className='ans'>Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.<hr />
                            A variable is declared first and then used, let or const are hoisted and var are not hoisted</p>
                    </li>
                    <li>
                        <p className='ques'>Diff. Between arrow function and regular function.</p>
                        <p className='ans'>
                            <mark>arrow function</mark>
                            <ol>
                                <li>Arrow functions do not have their own this context.</li>
                                <li>Arrow functions was introduced in ES6. And it introduced a simple and shorter way to create functions.</li>
                                <li>If there’s only one argument, then the parentheses are not required either:<hr />
                                    {'let squareNum = x => x * x'}
                                </li>
                            </ol>
                            <mark>regular function</mark>
                            <ol>
                                <li>Regular functions use the function keyword.</li>
                                <li>Regular functions have their own this context, which is dynamically determined based on how the function is called.</li>
                            </ol>

                        </p>
                    </li>
                    <li>
                        <p className='ques'>What is "use strict" in javascript?</p>
                        <p className='ans'>avascript introduced strict mode in ES5. Strict Mode is recommended for detecting logical errors earlier. Here are the things which are not allowed in strict mode.</p>
                    </li>

                    <li>
                        <p className='ques'>What are the closures?</p>
                        <p className='ans'>
                            A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function.
                        </p>
                    </li>
                    <li>
                        <p className='ques'>What is callbacks ?</p>
                        <p className='ans'>A function that is passed as an argument to another function is known as callback function. As a like map(), filter() etc ...<hr />
                            Callback Functions are high order functions. A high order functions in javascript includes callback functions and function that returns a function.<hr />
                            Callbacks are often used to manage asynchronous operations. Instead of blocking the execution of code while waiting for an operation to complete (e.g., fetching data from a server), you can provide a callback function to be executed when the operation is finished.



                        </p>
                    </li>
                    <li>
                        <p className='ques'>what is High Order Function ?</p>
                        <p className='ans'>Higher order functions are functions that take one or more functions as arguments, or return a function as their result.</p>
                    </li>
                    <li>
                        <p className='ques'>What is Event Loop ?</p>
                        <p className='ans'><mark>The event loop is a fundamental concept in JavaScript that allows the language to perform asynchronous operations in a non-blocking manner, making it suitable for tasks like handling user input, network requests, and timers.</mark><br />
                            The event loop is a constantly running process that monitors both the callback queue and the call stack. If the call stack is not empty, the event loop waits until it is empty and places the next function from the callback queue to the call stack.<br />

                            <img src={event} alt='redux' className='img-fluid' /><hr />
                            <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--dhjH4Wt---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_800/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif14.1.gif' alt='redux' className='img-fluid' />
                        </p>
                    </li>
                    <li>
                        <p className='ques'>What is bubbling ?</p>
                        <p className='ans'>
                            Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event. It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy.
                        </p>
                    </li>
                    <li>
                        <p className='ques'>What is promises and async, await ?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>What is Prototypes ?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>What is Global Execution Context ?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>What is Call Stack ?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>Explain call(), apply() and, bind() methods.</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>What is the rest parameter and spread operator?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>What is data type?.</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>Diff. Between Asynchronous  v Synchronous.</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>Explain 'THIS' keyword.</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is synthentic event.</p>
                        <p className='ans'></p>
                    </li>

                    <li>
                        <p className='ques'>Diff. Between  forEach(), for in and for of</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is SyntheticEvent?</p>
                        <p className='ans'></p>
                    </li>

                    <li>
                        <p className='ques'>Diff. between setTimeout() v setInterval() ?</p>
                        <p className='ans'></p>
                    </li>

                    <li>
                        <p className='ques'>what is Object.entries()?</p>
                        <p className='ans'></p>
                    </li>

                    <li>
                        <p className='ques'>what is Object.freeze()?</p>
                        <p className='ans'></p>
                    </li>

                    <li>
                        <p className='ques'>what is Object.fromEntries()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is Object.keys()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is Object.keys()?</p>
                        <p className='ans'>values</p>
                    </li>

                    <li>
                        <p className='ques'>what is filter()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is map()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is find()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is reduce()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is sort()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is every()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is some()?</p>
                        <p className='ans'></p>
                    </li>

                    <li>
                        <p className='ques'>what is includes()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is indexOf()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is isArray()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is join()?</p>
                        <p className='ans'></p>
                    </li>

                    <li>
                        <p className='ques'>what is keys()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is lastIndexOf()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is pop()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is push()?</p>
                        <p className='ans'></p>
                    </li>

                    <li>
                        <p className='ques'>what is findLast()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is reverse()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is shift()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is slice()?</p>
                        <p className='ans'></p>
                    </li>

                    <li>
                        <p className='ques'>what is splice()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is toLocaleString()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is toReversed()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is toSorted()?</p>
                        <p className='ans'></p>
                    </li>

                    <li>
                        <p className='ques'>what is toSpliced()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is toString()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is unshift()?</p>
                        <p className='ans'></p>
                    </li>


                    <li>
                        <p className='ques'>what is entries()?</p>
                        <p className='ans'></p>
                    </li>


                    <li>
                        <p className='ques'>what is fill()?</p>
                        <p className='ans'></p>
                    </li>


                    <li>
                        <p className='ques'>what is findIndex()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is findLastIndex()?</p>
                        <p className='ans'></p>
                    </li>

                    <li>
                        <p className='ques'>what is flat()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is flatMap()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is from()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is fromAsync()?</p>
                        <p className='ans'></p>
                    </li>

                    <li>
                        <p className='ques'>what is values()?</p>
                        <p className='ans'></p>
                    </li>

                    <li>
                        <p className='ques'>what is with()?</p>
                        <p className='ans'></p>
                    </li>
                </ol>
            </section>
        </main>
    )
}

export default JavaScript
