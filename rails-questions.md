# April Rieger -------- ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new name_the_app -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - http verb we are sending to the server via the url
library - the url 
:id - the param that links to our instance variable that is storing all the information
book - name of the controller
show - name of the method foubd in the controller

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.
Not to fret, you can go back and add_column with a db:migrate. Here are the steps:
	1. Create a migration: rails generate migration add_foreignkey_to_classnameplural
	2. Update the migration located under your apps folder in the folder named db and in a folder called migrate, locate the new migration record and add your line of code that looks like the code below, and then save: 

			class AddForeignkeyToClassnameplural < ActiveRecord::Migration[6.0]
			  def change
			    #add_column :table_name, :new_column, :new_column_data_type
			    add_column :classnameplural, :foreignkey_id, :integer
			  end
			end

	3. Don't forget to db:migrate ;) -- now you are all good in the hood!


4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants:string shoes:string

*NOTE: I assumed the data type as a string since no info was given about datatype needed ;)


5. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

When generating the Model name for you rails app it need to be pased as an upper case since Rails will create the Model with a class in it that needs to be in upper case.
The naming convention for the table is a bit different, we need to ensure that when we name our table that it is not plural because rails uses the plural version of your table name for other various reasons (ie. belongs to refers to the table as a plural)