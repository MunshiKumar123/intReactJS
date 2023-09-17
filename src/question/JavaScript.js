import React from 'react'
import event from "./img/event.png"
import clo from "./img/clo.png"
import promise from "./img/promise.png"
import async from "./img/async.png"
import Call1 from "./img/Call1.png"
import Call2 from "./img/Call2.png"
import apply from "./img/apply.png"
import bind from "./img/bind.png"


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
                        <p className='ques'>What is lexical scope function.</p>
                        <p className='ans'>Lexical Scope allows inner functions to access the scope of their outer functions.<br />
                            When there is lexical scope, the innermost, inner and outermost functions may access all variables from their parent scopes all the way up to the global scope.
                            <ul>
                                <li>App parrent function ka variable child function mai access sakte hai</li>
                                <li>you don't access to child function to parent function</li>
                                <li>not need retun only inside child function call</li>
                            </ul>
                        </p>
                    </li>

                    <li>
                        <p className='ques'>What is "use strict" in javascript?</p>
                        <p className='ans'>Javascript introduced strict mode in ES5. Strict Mode is recommended for detecting logical errors earlier. Here are the things which are not allowed in strict mode.</p>
                    </li>

                    <li>
                        <p className='ques'>What are the closures?</p>
                        <p className='ans'>
                            A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function.<br />
                            function return with lexical scope<br />
                            <img src={clo} alt='redux' className='img-fluid' />

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
                        <p className='ans'>
                            <mark>promises</mark>
                            <p>JavaScript Promises are a modern approach to handle asynchronous operations. Although we can handle small small asynchronous operations using Callback Functions, but not large operations. Promises can handle long and nested asynchronous operations easily.</p>
                            <p>A Promise is said to be resolved or settled when it is fulfilled or rejected. Once settled (resolved or rejected), a Promise cannot be changed. That means a Promise is immutable after settled.</p>
                            <p>A Promise is always in one of these states, pending, fulfilled and rejected. For chaining in Promise, we can use then or catch method.</p>
                            <ol>
                                <li><b>pending</b>: The initial state, waiting for fulfill or reject</li>
                                <li><b>fulfilled</b>: the operation has successfully done</li>
                                <li><b>rejected</b>: the operation was failed</li>
                            </ol>
                            <img src={promise} alt='promis' className='img-fluid' /><br />

                            <mark>async</mark>

                            <p>Async keyword is used before function keyword. Async function will always return a promise. Even if the return value of async function is not a promise, it will still be wrapped in a promise.</p>
                            <p>Thus, function will be called synchronously, but the return value will come asynchronously as it is a promise.</p>

                            <mark>await</mark>
                            <p>Await wait to promise return </p>
                            <p>await keyword or operator is used inside async function to wait for promise. await will wait for promise to full filled or reject and return the output.</p><br />
                            <img src={async} alt='async' className='img-fluid' />

                        </p>
                    </li>
                    <li>
                        <p className='ques'>What is Prototypes ?</p>
                        <p className='ans'>Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.</p>
                    </li>
                    <li>
                        <p className='ques'>What is Global Execution Context ?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>What is Call Stack ?</p>
                        <p className='ans'>The call stack is used by JavaScript to keep track of multiple function calls. It is like a real stack in data structures where data can be pushed and popped and follows the Last In First Out (LIFO) principle. </p>
                    </li>
                    <li>
                        <p className='ques'>Explain call(), apply() and, bind() methods.</p>
                        <p className='ans'>
                            <mark>call</mark>
                            <p>functions call method calls the function with given this value and arguments are provided individually. this will refer to the object passed in arguments. Other arguments are provided after first argument will pass to function.</p>
                            <img src={Call1} alt='call' className='img-fluid' /><br />
                            <p>--- acording to function</p>
                            <img src={Call2} alt='call' className='img-fluid' /><br />
                            <mark>bind</mark>
                            <p>copy of new variable</p>
                            <p>bind methods return a new function instead of calling it immediately.</p><br />
                            <img src={bind} alt='call' className='img-fluid' /><br />
                            <mark>apply</mark>
                            <p>apply methods works almost same like call, except the second parameter is an array whose elements will be passes to function as arguments. The first parameter is object and second an array.</p><br />
                            <img src={apply} alt='apply' className='img-fluid' />
                        </p>
                    </li>
                    <li>
                        <p className='ques'>What is the rest parameter and spread operator?</p>
                        <p className='ans'>
                            <mark>rest parameter</mark><br />
                            You can use the rest parameter when defining a function to collect all remaining arguments into an array.<br />
                            <mark>spread operator</mark><br />
                            combines multiple arrays or objects into a new one.
                        </p>
                    </li>
                    <li>
                        <p className='ques'>What is data type?.</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>Diff. Between Asynchronous v Synchronous.</p>
                        <p className='ans'>
                            <mark>Synchronous</mark><br />
                            All the code in main thread will be executed line by line.
                            <br />
                            <mark>Asynchronous</mark>
                            <br />
                            Asynchronous callback is a callback where code within callback function is executed after main thread is completed. Event Loop handle all the asynchronous operations in JavaScript.

                        </p>
                    </li>
                    <li>
                        <p className='ques'>Explain 'THIS' keyword.</p>
                        <p className='ans'>In JavaScript, the this keyword refers to an object.

                        </p>
                    </li>
                    <li>
                        <p className='ques'>what is synthentic event ReactJS.</p>
                        <p className='ans'>

                            <mark>preventDefault():</mark>
                            Prevents the default browser action for the event / can stop default functionality.<br />
                            <mark>stopPropagation()</mark><br />
                            in bubbling stop propagation of event from child to parent node. In short, child event will triggered, but parent event won't.
                        </p>
                    </li>

                    <li>
                        <p className='ques'>Diff. Between  forEach(), for in and for of</p>
                        <p className='ans'>
                            <mark>forEach</mark>
                            <p>forEach method is used to get all elements in array one by one without using loop. A callback function is added as a parameter in forEach.
                            </p>
                            <mark>For in loop</mark>
                            <p>For in loop is also used for arrays to get each element one by one. The advantage of for in over simple for loop is that for in loop require variable initialization and array name. Increment is not required. See example</p>
                            <mark>For of</mark>
                            <p>forEach method is best for traversal of arrays as the value of i in callback function is each element. For in loop is also good, but to get elements, we have to use array[i]. Now we have forEach features in for loop using For of.
                            </p>

                        </p>
                    </li>
                    <li>
                        <p className='ques'>Diff. between setTimeout() v setInterval()</p>
                        <p className='ans'>
                            <mark>setTimeout</mark><br />
                            setTimeout method is used to call a function once but after a delay of some seconds. The first parameter of setTimeout method is function name and second is time in milliseconds.<br />
                            <mark>setInterval</mark><br />
                            The Javascript setInterval method repeatedly call a function till its stopped. The first parameter of setInterval is function name and second parameter (optional) is time (in milliseconds).


                        </p>
                    </li>

                    <li>
                        <p className='ques'>what is Object.entries()</p>
                        <p className='ans'>JavaScript Object. entries() method is used to return an array consisting of enumerable property [key, value] pairs of the object which are passed as the parameter. </p>
                    </li>

                    <li>
                        <p className='ques'>what is Object.freeze()</p>
                        <p className='ans'>reezing an object prevents extensions and makes existing properties non-writable and non-configurable.</p>
                    </li>

                    <li>
                        <p className='ques'>what is Object.fromEntries()?</p>
                        <p className='ans'>he Object.fromEntries() method takes a list of key-value pairs and returns a new object whose properties are given by those entries. </p>
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
                        <p className='ans'>Array.filter method creates a new arrays with filtered data from callback.

                        </p>
                    </li>
                    <li>
                        <p className='ques'>what is map()?</p>
                        <p className='ans'>Array.map() method create a new array by using an existing array and output of callback function in map method. An callback function is required in map method with parameter to iterate each element.

                        </p>
                    </li>
                    <li>
                        <p className='ques'>what is find()?</p>
                        <p className='ans'></p>
                    </li>
                    <li>
                        <p className='ques'>what is reduce()?</p>
                        <p className='ans'>Array.reduce() method reduce the array into a single value by passing callback function. or example, we can use reduce method to sum all elements in an array.<br />
                            In JavaScript, the reduce() method is a higher-order function available for arrays. It is used for iterating over an array and accumulating a single result value by repeatedly applying a given function to each element of the array.</p>
                    </li>
                    <li>
                        <p className='ques'>what is sort()?</p>
                        <p className='ans'>
                            array.sort() will sort the order an array. This will change Alphabetical order of an array. array.sort() will also change order of an array permanently.



                        </p>
                    </li>
                    <li>
                        <p className='ques'>what is every()?</p>
                        <p className='ans'>
                            Array.every method test whether all elements in given array fulfill test condition in callback. This will also returns true or false.
                        </p>
                    </li>
                    <li>
                        <p className='ques'>what is some()?</p>
                        <p className='ans'>Array.some method test whether at least one element in given array fulfill test condition in callback. The possible output are true or false.
                        </p>
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
                        <p className='ans'>array.join() method is used to convert an array to string with all elements inside array, separated by commas. To change default separator from commas to any other character by passing that inside parenthesis.

                        </p>
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
                        <p className='ans'>
                            array.pop() method is used to remove last element from an array. This will also decrease array length by 1 as last element is removed.
                        </p>
                    </li>
                    <li>
                        <p className='ques'>what is push()?</p>
                        <p className='ans'>
                            array.push() method is used to add an element in array at last position. This will also increase array length by 1 as one element is added.
                        </p>
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
                        <p className='ans'>
                            array.shift() method is used to remove first element from an array. This will reduce array length by 1 as first element is removed.
                        </p>
                    </li>

                    <li>
                        <p className='ques'>what is unshift()?</p>
                        <p className='ans'>
                            array.unshift() method is used to add first element in an array. This will increase array length by 1 as one element is added on zero index.
                        </p>
                    </li>

                    <li>
                        <p className='ques'>what is slice()?</p>
                        <p className='ans'>
                            array.slice() method is used to slice a single element from array. This will not change actual array. slice can return single element if parameter passed is single. For two parameter(x,y), slice can return y-x elements.


                        </p>
                    </li>

                    <li>
                        <p className='ques'>what is splice()?</p>
                        <p className='ans'>
                            array.splice() method is used to add or remove n number of elements from an array at any position. This will also increase or decrease array length by n as n elements are added or removed.
                        </p>
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
