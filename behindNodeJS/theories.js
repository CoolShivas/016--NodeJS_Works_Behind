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