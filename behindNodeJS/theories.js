/***
 * 
 * * * * * * Difference between Synchronous and  Asynchronous ? :-
 * 
 * 
 * * * * * Synchronous Code :-
 * 
                1.) Tasks are executed sequentially.
                2.) Each task blocks the next until completed.
                3.) Example :- 
                const data = fs.readFileSync('example.txt', "utf-8");
                console.log("File content :", data);

/////------------------------------------------------------------------------------
 * 
 * 
 * * * * * * Adynchronous Code :-
 * 
                1.) Tasks don't block execution.
                2.) Uses callbacks, promises, or async/await.
                3.) Example :- 
                fs.readFile('example.txt', "utf-8", (err, data) => {
                        if(err)
                        {
                            console.error("Error reading file");
                            return;
                        }
                        console.log("File content :", data);
                    });
                console.log("Synchronuos Task");

 * 
 * 
 * 
 * 
 */


//////////************************************************************************************* */
//////////----------------------------------------------------------------------------------------
//////////************************************************************************************* */


/**
 * 
 * * * * * * * Node.js Elements :-
 * 
 * 
 * * * * v8 :-
       Google's high-performance JavaScript engine that compiles JavaScript into machine code.
       
       
/////////------------------------------------------------------------------------------------------
 * 
 * 
 *  * * * * Libuv :-
       1.) A C library that provides Node.js with cross-platform support for asychronous I/O operations, file system, networking, and more.

        2.) Includes the event loop and thread pool, enabling non-blocking tasks like file reading, networking, and timers.
       
       
 * 
 * 
 */

        
//////////************************************************************************************* */
//////////----------------------------------------------------------------------------------------
//////////************************************************************************************* */


/***
 * 
 * * * * How Node.js program starts ?
 * 
 * * * * * * * Main Thread (handles light weight task and Synchronous Tasks):-
                1.) Initialize Program.
                2.) Top Level Code.
                3.) Imports Modules.
                4.) Registers Event Callbacks.
                5.) Start Event Loop  
                Now Offloading starts and send the heavy code for execution to the Thread Pool.


* * * * * * * Thread Pool (handles heavy weight task and Asynchronous Tasks):-:-
                    1.) Thread #1.
                    2.) Thread #2.
                    3.) Thread #3.
                    4.) Thread #4.


 * Thread pool by default has 4 threads.
 * Event loop, and thread pool are part of Libuv which offloads heavy tasks to thread pool.
 * Heavy tasks include file system, crytography, compression, etc.
 * 
 * 
 */