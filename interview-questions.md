# April Rieger -------- ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages.

  Researched answer: Rails has an application directory called app/ with three subdirectories: models, views, and controllers. This is the model-view-controller (MVC) architectural pattern, which enforces a separation between business logic from the input and presentation logic associated with a graphical user interface (GUI). https://www.bogotobogo.com/RubyOnRails/RubyOnRails_Model_View_Controller_MVC.php



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: When an apllication uses CRUD it means that the application uses forms to get data into and out of a database. CRUD stands for Create, Read, Update, and Delete.

  Researched answer: Within computer programming, the acronym CRUD stands for create, read, update and delete. These are the four basic functions of persistent storage. Also, each letter in the acronym can refer to all functions executed in relational database applications and mapped to a standard HTTP method, SQL statement or DDS operation.

It can also describe user-interface conventions that allow viewing, searching and modifying information through computer-based forms and reports. In essence, entities are read, created, updated and deleted. Those same entities can be modified by taking the data from a service and changing the setting properties before sending the data back to the service for an update. Plus, CRUD is data-oriented and the standardized use of HTTP action verbs. https://stackify.com/what-are-crud-operations/



3. What is a migration? Why would you use one?

  Your answer: It is a way to update the table structure. We would use this when adding columns.

  Researched answer: Migrations are used to modify the shape of an existing database.
Changing the shape of the database can include adding or deleting columns, changing the name of the column, or changing the data type of a column. https://github.com/learn-academy-2020-bravo/Syllabus/blob/master/rails_model/migrations.md




4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: If a Person has_many computers than the foreign key would be held in the child model, which in this case is the the model of Computer. 

  Researched answer: This is an aboslutely amazing page with great images that map out what the relationships are between parent and child models. https://guides.rubyonrails.org/v5.2/association_basics.html


5. What is object-relational mapping?

  Your answer: object relational mapping or orm, is programming technique for converting data between incompatible systems.

  Researched answer: Object-relational mapping in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language. https://en.wikipedia.org/wiki/Object-relational_mapping



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes - REST stands for Representational State Transfer
REST is a pattern to follow when structuring routes between the server and the client
RESTful routes are an attempt to bring the operations that can be applied to an object into HTTP requests
Creating, Reading, Updating, and Deleting will accomplish almost all the tasks needed to do to an object creating a standard language and structure across all of the objects in our application.
- JSON - JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999.
- API - a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.
- Endpoints - An endpoint is simply a route defined by your rails application.
- Strong params - As part of managing form parameters in Rails, versions of Rails 4+ also have a feature known as "strong parameters" or "whitelisting". It is a way for us to manage exactly what goes into creating new object instances, and helps us keep unwanted information -- usually from malicious hackers -- out of the database.
