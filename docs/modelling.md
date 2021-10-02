# Modelling - The structure
IcePanel uses a modern and more agile way to model architecture using the C4 Model - created by Simon Brown. This helps to create simple, easily digestible and maintainable diagrams for the audience it is intended for. Using the C4 model, you can create diagrams that tell a story, for your whole team / audiences - from high level business to lower level technical decisions and flows.

In IcePanel it's easy for anyone to pick up this amazing standard in a visual way, and for those unfamiliar, here's a quick intro.

Check out [C4model.com](http://c4model.com) for a detailed run through of the how and why of C4!

## The C4 Model

The C4 model was created by Simon Brown to resolve the pains of explaining and communicating software architecture in the agile world. It acts as a map of your system, starting at the high level detail (imagine looking at google earth as the globe), down to the low level details needed to develop your product (outside your house).

It is a super easy way to communicate design decisions to multiple audiences, at the level of detail that they need. From business logic to technical decisions, the C4 model makes it easy to maintain in the long run - when changes inevitably get made to your design.

## The 4 C's in C4

The 4 C's relate to the different levels of detail or fidelity in the diagrams created from the model. 

### Level 1 - System context diagrams:

<a href="https://imgur.com/547g5Q7" rel="Level 1 of the C4 Model - Context diagram">![Foo](https://imgur.com/547g5Q7.png)</a> 

**The big picture** - These are high level overviews of how your system(s) work in the overall eco-system with other external systems and the people that use them.

**Intended audience** - Anyone! Business, Product, Architects and Developers.

---

### Level 2 - Container diagrams:

> We call these App diagrams, as the word "Container" is more commonly used/ known for Docker.

<a href="https://imgur.com/kND2duF" rel="Level 2 of the C4 Model - App / Container diagrams">![Foo](https://imgur.com/kND2duF.png)</a> 

**High level responsibilities of a system** - These show how the separately deployable things interact to make a system work.

**Intended audience** - Product, Architects and Developers

---

### Level 3 - Component diagrams:

<a href="https://imgur.com/wI6Rg9G" rel="Level 3 of the C4 Model - Component diagrams">![Foo](https://imgur.com/wI6Rg9G.png)</a> 

**The building blocks and interactions of an app** - Zoom in to each app to show the components within that make each app work and the interactions within.

**Intended audience** - Architects and Developers

---

### Level 4 - Code diagrams:

These are used to show inside a component and how they actually work and function - currently not supported in IcePanel.

We advise attaching code snippets to components for head starts on the development or configurations or even better, linking directly to the code itself with our `GitHub repo linking`.

This level is rarely designed in practice as Simon says "...most IDEs can generate this level of detail on demand."

## Using the C4 model in IcePanel

Modelling usually entails creating and storing a file to define objects and relationships between them, then another file or renderer to draw diagrams with those pre-defined relationships. This process may work great for technical people who are able to pick up a new language to create such diagrams ... but not for everyone (and let's face it... they also don't usually look very customer/business facing).

IcePanel is a visual modelling and documentation tool, and as such, you can create, edit and maintain these models straight from the diagrams as well as our model editor.

In IcePanel, everything sits within a project. This is where your model and diagrams belong. You can edit or add to your model in 2 places.

### Place 1 - The model stage:

<a href="https://imgur.com/TOXMogt" rel="IcePanel modelling canvas">![Foo](https://imgur.com/TOXMogt.png)</a> 

The model stage showing the Online Boutique and some apps within.

Here you can quickly add your model objects, separated into 3 columns using the buttons placed at the bottom of each column group.

**Column 1:** Systems & Actors

**Column 2:** Apps & stores (that live within a system)

**Column 3:** Components (that live within an app)

You can add, edit and delete the objects from here. You can also see the details of each object that helps you see the dependancies. 

Details in the right hand panel that you can see for each object include:

- Type
- Name
- Icon (For apps and stores)
- Diagrams that the object is in, with links to each diagram
- Assigned tags
- Object description
- Connections (in the object connections tab when selected)
- Flows that the object is in (in the object flows tab when selected)

### Place 2 - The diagram stage:

<a href="https://imgur.com/SScD4S5" rel="IcePanel Diagramming canvas">![Foo](https://imgur.com/SScD4S5.png)</a> 

The diagram stage showing a component diagram.

You can also add, edit or remove objects from your model within a diagram.

**To add:** just click on or drag new objects from the tool bar on the left, give it a name and you now have a new object in your model. This is the best and quickest way to build up your model, whilst keeping it in context of the diagram you're creating. 

`Tip: You can double click to quickly add systems (at context diagram level), apps (at system diagram level) and components (at app diagram level)`

**To edit**: Click on the object you want to change > make the change (for example object name, app icon, connection name change etc.) and it will automatically update everywhere else that it exists.

**To remove**: Objects are not deleted from the model when deleted from a diagram using the remove button or hitting back space / del key.

To remove objects from the model, use the "Model objects" tool in the tool bar and click the trash icon. You'll be shown a pop up asking if you are sure, and showing you what it will effect if you do delete it.

Diagramming is covered in more detail in the `#diagrams` section
