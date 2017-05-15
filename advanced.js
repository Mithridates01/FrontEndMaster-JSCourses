// Scopes and Closure
/*
  --Nested Scopes--
    Scope: where to look for things
    JS isw complied every time it is run

    Interpreter vs complied
      BASH lang is interpretive lang
        -top to bottom line by line on the fly
      JS lang is complied
        - does initial pass through the code and compiles
        - does execution during final pass

    JS has only function scope
      LHS = target/RHS= source right hand left hand of assignment
      function declaration function bar() {}''

      strict mode requires decelerations var/let/const/function
      var decelerations will not override each other. Function declarations will.

    Function Declaration Vs. Function Expression
      Function Declaration: the word "function" is the first word in a statement

      Function Expressions:
        - name function expression "var foo = function bar(){};"
          - always use named function expressions
          - acts as good documentation
          - gives good stack traces
        - anonymous function expression bad to use
          - cannot do recursion; no way to do self reference
          - not good for stack traces.
          - it make reading and understanding hard

    TRY and CATCH clauses
      - has block scope

    LEXICAL SCOPE MODEL
      lexical: compile time scope; scope is defined at time of compile
      eval(str): turns eval into code
        - disabled runtime optimizations
        - don't use eval
        - templating engine might need it.
      avoid settime with string syntax(uses eval)
    DYNAMIC SCOPE MODEL
      - BASH option to use
      - Pearl option

    WITH keyword
      - used to preform computations on object properties
      - uses lexical scope
      - will create globals if object property doesn't exist
      - creates new lexical scope AT RUNTIME
      - disables optimizations
      - ovoid use!
*/
  var object = {a: 1, b: 2, c: 3}
  with (obj) {
    a = b + c;
    c = a + b;
    b = a + c;
    // below; would create new global variable
    g = 9;
  }

/*
  IIFE Pattern
    - allways name
    - not pollute global name space scope
    - immediately invoked function expression
    -wrap function expression in parens to limit scope
    (function IFFE(){ //........ })()

  LET keyword (ES6)
    let keyword attached declared variable to whatever block it is in instead of function
    - does NOT hoist
    - does implicit block scoping



  --Hoisting--
    variable declarations get hoisted to the top second after declared functions
    - function expressions do not get hoisted
    - let keywords don't hoist
    1.) declared functions
    2.) declared variables

  --Recursion--
    function calls itself
    mutual recursion: two or more functions calls each other

  --This--

  --Closure--
*/

