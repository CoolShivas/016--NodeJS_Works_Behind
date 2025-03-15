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
