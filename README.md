# adapt-linear-animation  

**linear-animation** is a *linear animation component* developed by Kunj B Sharma <kunjsharma@hotmail.com> https://github.com/kunjsharma/adapt-linear-animation.git.  

<img src="assets/adapt-linear-animation.png" alt="Sample linear animation frame">

**linear-animation**'s simple purpose is to present text/images in linear animation form. The text may include HTML.

### Attributes

[**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes): These are inherited by every Adapt component. [Read more](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes).

**_component** (string): This value must be: `linear-animation`.

**_classes** (string): CSS class name to be applied to **Text**’s containing `div`. The class must be predefined in one of the Less files. Separate multiple classes with a space.

**_layout** (string): This defines the horizontal position of the component in the block. Acceptable values are `full`, `left` or `right`.  

**title** (string): A reference title for the component. **title** is distinct from the **displayTitle** which, if present, appears above the component. **title** provides the opportunity to use a shortened form in tighter spaces, such as in menus or in the drawer.  

**displayTitle** (string): Optional text that will display as a title or header above the component. It can be used as a headline.   

**_animation** (string): Whether animation required or not.

**_delay** (string): Time interval between display of 2 images in miliseconds.

**_bg** (string): Background image refrence. v0.0.1 requires it to display component correctly in responsive.

**_items** (array): Each *item* represents one choice for the animation frames and contains values for **text** and **_graphic**

**instruction** (string): This optional text appears above the component. It is frequently used to
guide the learner’s interaction with the component.

**body** (string): Although optional, this text constitutes what is thought of as the primary *text* of the **Text** component. HTML is permitted.  
<div float align=right><a href="#top">Back to Top</a></div>

## Limitations

To be confirmed. 


----------------------------
**Version number:**  0.0.1
**Framework versions:** 2.0.15  
**Author / maintainer:** Kunj B Sharma <kunjsharma@hotmail.com>   
**Accessibility support:** WAI AA 
