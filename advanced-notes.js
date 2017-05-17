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
    Dynamic binding mechanism
    four rules for "this" keyword
      4th
      - default binding rule
      - this keyword defaults to undefined if not in strict mode
      - if in strict mode defaults to global object.
      3rd
      - Implicit Binding Rule
      - base object at the call site becomes the "this" keyword
      - the implicit binding rules has an own/containing object at the call site
      - it doesn't matter where a function is declared. It matters
        where a function is referenced or called
      Binding Confusion problem
      - "this" reference get set by callsite of the function call
      - no cross over between this keyword and local lexical env
      2nd
      - Explicit binding rule
      - if you use .call(obj) or .apply(obj) at the call site
        ;both take a this binding(this arg) as first default param.
      - hard binding this keyword
      Function.prototype.bind(obj)
      1st
      - New Keyword
      - putting the new keyword in front of any function creates a constructor function
      - four things occur when new keyword put in front of function call
        - brand new object is created
        - * new object gets linked to different object
        - new object get bound as the this keyword for the function call
        - new object will be implicitly returned
      Four Questions to ask about this binding keyword
        1.) Was the function called with the new keyword?
          If so use that object. 
        2.) Was it called with call or apply specifying an explicit this keyword?
          Use that object
        3.) WAs the function called via a containing/owning object context?
          Use that object
        4.) Default to global object except ins strict mode
  --Closure--
    - When a function remembers its lexical scope even when
    the function is outside of that lexical scope
    


  --Prototypes--
*/

