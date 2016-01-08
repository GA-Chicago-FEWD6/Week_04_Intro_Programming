#FEWD Week #4: JavaScript Basics

<br>

---


###Description 

The team from Relaxr is back...again! They want their page to be more interactive and asked you to add JavaScript to their source code. You've been given the HTML and CSS but will need to create a JavaScript file and add a few different pieces of interactivity:  Users should be able to click a link and have the remainder of the blog's content slide down and appear on the page, both on the main content column and the side bar; users should also be able hide the content when they are finished reading. See a detailed technical explanation below.


<br>

---


###Real-World Applications


- Practice programmatic thinking to plan before writing code
- Use basic JavaScript to create an interactive page based on a user action
- Link an external JavaScript file from HTML


<br>

---


###Technical Requirements 

- Add jQuery to your site, and create a JavaScript file to write your jQuery in, and include both files properly on your page.
- Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()``` handler
- If a user clicks "Read More" on the primary column:

  - have the text in the ```<p>``` tag slide down along with a "Read Less" link in the blog post using  ```$.slideDown()``` and ```$.show()```
  - hide the "Read More" link using ```$.hide()```

- If a user clicks "Read Less" on the primary column:

  - have the ```<p>``` slide up and hide the "Read Less" link using  ```$.slideUp()``` and ```$.hide()```
  - show the "Read More" link using ```$.show()```

- Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the ```<span>``` inside that ```<p>``` slide down and hide the "Learn More" link using ```$.slideDown()``` and ```$.hide()```



<br>

---

###Resources

- [Starter Code](starter_code)
- [Cheat-sheet of jQuery selectors, methods, and events](http://oscarotero.com/jquery/)
- [Get more practice with jQuery DOM selectors](jquery_dom_selector_practice)


<br>

---

###Selector Fun Part2

Follow the instructions in the `main.js` file in the `select_fun_part2` folder, or in the `instructions.txt` file to make selections and manipulate the DOM using JavaScript and jQuery.

---

###Final Project Milestone 1

**[View the Final Project Requirements/Guide](https://github.com/GA-Chicago-FEWD6/Final_Project/blob/master/final_project_requirements.md)**

Over the weekend write down a proposal for your final project — come up with a theme, a product, or an idea for what you would like your site to be about. Try to make it something that you're personally interested in, and ideally something that you can continue to work on after the class. Check out [General Assembly's Gallery](https://gallery.generalassemb.ly/FEWD?metro=) for examples of former students' projects.

Either sketch, or build a wireframe using a graphics program or something like [Wireframe.cc](https://wireframe.cc/) to submit next week for review. I'm just looking for a low-fidelity outline of the structure of the site, annotated with notes on features and functionality — these are just first-draft ideas, so I expect they will change and adapt in the coming weeks — no worries! If you're not familiar with the idea of wireframing, [here](http://webdesign.tutsplus.com/articles/a-beginners-guide-to-wireframing--webdesign-7399) is an article that might help you out.

**Note**: There is no _required_ amount of pages — it all depends on the scope of what you want to do with your site and how complex each page will be. Be realistic with your goals — it's okay to propose a final project that would require more work than fits within the scope of this class, just think about and discuss which parts or features of the full project you would like to complete for the final project.
