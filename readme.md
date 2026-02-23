1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:(a)getElementById is an element which is selects a specific id and returns single element
(b)getElementByClassName is an element which is selects a specific class and returns collection of html same class name
(c)querySelector is a method to select the first element that matches a css selector like id ,class or tag  and returns single element
(d)querySelectorAll is a method to select all the elements that matches all css selector and returns all elements

2. How do you create and insert a new element into the DOM?
ans:To create and insert a new element into the DOM first of all use document.createElement() to create the element then set its contents or attributes then attach it to the DOM using appendChild()
example: let newPara = document.createElement('p');
         newPara.innerText="Hello World";
         document.body.appendChild(newPara);

3. What is Event Bubbling? And how does it work?
ans: Event bubbling is when click  a child element then automatically the same event also happens on its parent element . For example,if we click a button inside a div first of all the button click then the div click then body click it goes child to parent
4. What is Event Delegation in JavaScript? Why is it useful?
ans: Event delegation is the method that one parent handles all child events. It is useful because don't need to add separate event listeners to each child elements and saves memory.
5. What is the difference between preventDefault() and stopPropagation() methods?
ans: preventDefault() stops the default action of an element
stopPropagation() stops the event from bubbling up to parent elements
