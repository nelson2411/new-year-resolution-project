/*
There are five different arrays of todos. One for each category.
When a todo is created it will be added to the todos array.
And then moved can be moved to the appropriate category.
Each category will start with an empty array.
Each todo is an object with an id, title. 
In order to move a todo to a different category we need to know which category it is in.

The categroy property will be used to move a todo to a different category.
*/

export interface Todo {
  id: string
  title: string
  completed: boolean
  category: string
}
