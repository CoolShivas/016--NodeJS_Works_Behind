/***
 * 
 * 
 * * * * * Introduction to npm :-
 * 
 * 
        1.) npm is a popular package manager which comes bundled with Node.js.
        
        2.) It is a CLI tool used to install, update, and remove external packages.

        3.)You can also create your own package and publish it on npmjs.com registry.

        4.) Do not confuse npm CLI with npmjs.com, as it’s a registry where most of the 
            packages of Node.js are saved.
            • There are alternative Node.js package managers registry like JSR, which we will discuss in future.

        5.) Fun facts:-
                • npm shouldn’t be written in capitalized form unless you have everything as capital.
                • npm doesn’t stand for Node Package Manager even though many people refer to it as 
                  that. It is a recursive bacronymic abbreviation for "npm is not an acronym“.

 * 
 * 
 * 
 */


/**
 * 
 * * * * * npm commands :-
 * 
      1.)  Before following these commands, make sure you initialized your project.
      
      2.) npm install <package-name>
          • Alternatively, you can use npm i

      3.) After installation, you will notice a node_modules folder and package lock.json
          • node_modules is what stores all the installed packages. It’s usually heavy, so make sure to include it in gitignore so that it won’t get pushed on version control and avoid it while sharing with others.

          • You will notice that there are some packages which you didn’t install, it’s because the package that you installed depend on those third-party packages.
        
          • package-lock.json includes exact version of all packages that you install. It makes sure to prevent breaking changes in newer versions of package.

      4.)  • Now, you can use the package by importing normally as you do with core modules.
 

      5.) While importing, first Node.js checks for core modules, then files or folders, and at last looks inside         node_modules.


 * 
 * 
 */



/**
 * 
 * * * * * Semantic Versioning System :-
 * 
 * 
 *   Have a look on this Version Number. How is it define ? How to understand this ? 
 
          1.0.0

          Here, 1 defines the Major Version. Breaking change, e.g., a rebrand, feature set added.

          Next, 0 defines the Minor Version. Non-breaking noteworthy change, e.g., new component, updated styles.

          Atlast, 0 defines the Patch Version. Small request or bug fix, e.g., update or edit existing slements.

 * 
 * 
 * Most of the npm packages use Semantic Versioning System or SemVer. Note: Some packages like typescript, react-native don’t follow it.
 * 
 * 
 * 
 */




/***
 * 
 * 
 * * * * Symbols in dependency versions :-
 * 
    Symbol    |Meaning                                        |Example          |Resolves To

  ^ (Caret)   |Minor and patch updates allowed                |^4.17.1          |4.18.0, not 5.0.0
  ~ (Tilde)   |Only patch updates allowed                     |~4.17.1          |4.17.2, not 4.18.0
  Exact       |Fixed version                                  |4.17.1           |4.17.1 only
  >           |Greater than                                   |>4.17.1          |4.18.0, 5.0.0
  <           |Less than                                      |<4.17.1          |4.16.0, not 4.17.1
  >=          |Greater than or equal to                       |>=4.17.1         |4.17.1, 5.0.0
  <=          |Less than or equal to                          |<=4.17.1         |4.17.1, 4.16.0
  *           |Any version                                    |*                |4.0.0,5.0.0, etc.
  Range       |Acceptable range                               |4.16.0 - 4.17.1  |4.16.0, 4.17.1
  x           |Wildcard for minor/patch versions              |4.x              |4.16.0, 4.18.1 



           Note: ^4.17.1 is equivalent to 4.x, and ~4.17.1 is equivalent to 4.17.x.


 * 
 * 
 * 
 * 
 * 
 */




/***
 * 
 * * * * * * npm commands :-
 * 
 * 
      1.) npm install :-
            • Even if you delete node_modules, you can use this command to install all of them again. It uses version specified in package-lock.json or package.json


      2.) npm list :-
            • Because of symbols, the versions specified in package.json might not be installed. 
            • To see the exact versions of all packages installed in your project.
            • Use -a flag to see whole list.
 

      3.) npm view <package-name> :-
            • To see details of a package that you installed including version, license, author, and so on.


      4.) npm view <package-name> <package.json-property> :-
            • Example: npm view express version
            • You can use it to view any property from package.json of a package that you installed.


      5.) npm view <package-name> versions :-
            • You can use it to see all versions of a package.


      6.)  npm install <package-name>@<version> :- 
            • Examples:
              • npm install express@4.0.0 // ^4.0.0
              • npm install express@4.0.0 --save-exact // To install exact version.
              • npm install express@~4.0.0
              • npm install express@4.2.x

            • You can use any symbols while specifying version.

        
      7.) npm outdated :-
            • It shows outdated packages in your project.
            • Current: The version of the package currently installed in your project.
            • Wanted: The latest version that satisfies the version range defined in your package.json.It basically uses the symbols to get it.
            • Latest: Absolute latest version of the package.


      8.)  npm remove <package-name> 


      9.)  npm update :-
            • This updates all the packages in your project, but it follows the range defined in 
            package.json. It doesn’t update to absolute latest version.


      10.)  npx npm-check-updates :-
            • npx is a CLI tool that comes with npm.
            • It is used to execute a package without requiring you to install globally or locally.
            • It is useful for temporary usage of a package.
            • npm-check-updates is a package which you can use to upgrade your packages to 
              absolute latest versions.
            • Use -u flag at the end to update the packages after reviewing.
            • This only updates package.json, then you can use npm install to update the 
            packages.
 * 
 * 
 */




/**
 * 
 * * * * * Global packages :-
 * 
 * 
 * 
      1.) Up until now, we have been installing packages locally.
      

      2.) To install package globally :-
            • npm install -g npm-check-updates
            • On Linux, and macOS, you might have to prefix it with sudo
            • This package gets installed globally, and you can access from anywhere.
            • You can try running npm-check-updates command anywhere in any projects without using npx.
          • npm-check-updates also have an alias named ncu, which you can also use.


      3.) Fun fact: npm is itself a global package which means if you need to update npm, you 
          will do: npm install -g npm


       4.) npm outdated -g :- 
          • To see outdated global packages.
 

       5.) npm update –g <package-name>
          

       6.) npm remove -g <package-name>
 

 * 
 * 
 * 
 * 
 */




/****
 * 
 * 
 * * * * * Development dependency :-
 * 
 * 
      1.) Development dependencies are the packages that aren’t needed for functioning of your project in production.


      2.) This can be for formatting, linting, testing, and so on.


      3.) If you use npm install --production, those packages won’t be installed, but they will be installed if you don’t use production flag.

      
      4.) npm install -D eslint :-
            • This will install eslint as a development dependency.
            • You will see it in separate property inside package.json named “devDependencies”
 

 * 
 * 
 * 
 * 
 * 
 */