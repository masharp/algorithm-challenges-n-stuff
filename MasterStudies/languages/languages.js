(function() {
  var app = angular.module("studyGuide", []);
  app.controller("StudyController", function() {
    this.sections = sections;
  });
  var sections = [
    {
      title: "Factory Pattern",
      uses: [
        "When a method returns one of several possible classes that share a common superclass.",
      ],
      advantages: [
        "-"
      ],
      disadvantages: [
        "-"
      ],
      examples: [
        "Create a new enemy in a game -> Random number generator picks a number assigned to a specific enemy -> the factory returns the enemy associated with that number -> the class is chosen at runtime.",
      ],
    },
  ];
})();
/*

  Markup Languages:
- Languages that provide a system for annotating a document in a way that is 			syntactically distinguishable from the text
- HyperText Markup Language (HTML)
- standard markup language used to create web pages, largely written 				with <tags> and forms the building blocks for all websites
- Extensible Markup Language (XML)
- Markup language that defines a set of rules for encoding documents in a 			human and machine-readable format. An alternative to HTML.
- Cascading Style Sheet (CSS)
- Style sheet language used for describing the look and formatting of a 				document written in a markup language. Also used to change the style of 				an interface written in HTML.
- JavaScript Object Notation (JSON)
-Standard format that uses human-readable to transmit data objects 				consisting of attribute-value pairs. It is language-independent, though 				originating from ECMAScript. It is used as the chief alternatives to XML 				for communicating between servers and web pages.
Java:
      - Libraries:
        - Apache
        - Google Guava:
        - ORMLite:
          - ORM library that uses @annotations and helper objects 						that translates Java object-orientation to traditional SQL 						syntax
        - JUnit:
        - JavaFX
        - Spring:
    C++:
    Python:
        - Flask
        - Django
        Scripting:
Scripting Tools:
Batch Files:
Shell Scripts:
Perl Scripting:	Scripting:
Scripting Tools:
Batch Files:
Shell Scripts:
Perl Scripting:	Scripting:
Scripting Tools:
Batch Files:
Shell Scripts:
Perl Scripting:
Java:
- Strengths:
- Weaknesses:
- Common Uses:
- Important Functions:
Python:
- Strengths:
  - Readability
  - Quick REPL (Read-Eval-PrintLoop)
  - Dynamic and Strongly Typed
  - Multipurpose and Object Oriented
  - Virtual Machine Byte Code
  - Large Standard Library
- Weaknesses:
  - Poor multi-threading
  - Scoping Issues
  - Lack of compile-time-type-checks
  - Python2 and Python3 compatibility
- Common Uses:
  - Scripting
  - Internal Tools / Applications
  - Embedded
  - Open-Source Projects
  - Informatics
- Important Functions:
Static Typing:
- A method of typing where the type of the variable is known at compile time. 			The engineer must specify what type a variable is each time. This allows for 			bugs to be checked at compile time, as opposed to run time.
Dynamic Typing:
- A method of typing where the type of the variable is interpreted at run time. The 		programmer does not have to specify the data type o the variable being created 		– the compiler infers it based on it's arguments.
Duck Typing:
- A method of typing where the typing of an object is less concerned with the 			class type and more concerned with the methods available to the object being 			created. It can work the same as polymorphism but without inheritance.
Weak Typing:
- Generally speaking, a weakly typed language is one in which the data type 			system is not strongly restricted by the compiler. This means that the 				programmer can often force type conversion outside of the type system. 				Sometimes refers to a dynamically typed system.
Strong Typing:
- A strongly typed language is often used to refer to a statically typed system. 			This often means that the compiler forces the programmer to adhere to a strict 			type system that is not easily (or impossible) to subvert.
Functional Programming:
- Functional programming is a programming style (paradigm) of building 				software using functions that avoid changing-states and mutable data.
Languages:
Scala:
  - Scala is a functional programming language that runs on the Java 				Virtual Machine, making it compatible with many Java libraries and 				frameworks.
Lazy Evaluation:
Currying:
Continuations:
Concurrent Programming:
*/