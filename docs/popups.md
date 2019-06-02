# Popups 

## Requirements

### in **HTML** insert next code 

`{% include "popups/all-popups.html" %}` \
that's a base template of all popups.

### In **main.js** make sure that you have next line of code 

`import './modules/call-popup';` \
it contains all mechanics for popups.

## Creating new popup
For example to create login popup create login.html inside templates/popups folder. \
Than in templates/popups/all-popups.html insert next code 

`{% include "popups/login.html" %}` \

p.s. but insted "login" give a semantic name of our popup.

## How to call a popup 
Create element with class **btn-call-popup** and a **data-popup** attribute with a name of your popup.\
For example to call login popup you need to have  button like this one 

```
<button class="btn btn-call-popup" data-popup="login">Login</button>
```

and login popup with code like this :

```
<div class="popup popup_login" id="popup_login">
  <div class="popup_content">
     <!–– your html code  ––>
  </div>
</div>
```

Alternative way to open popup (for example login popup) by **js** in js/modules/call-popup.js call function 

`openPopup('login');`

## Code for individual popup 
Find in js/modules/call-popup.js file line with code -  `//individual popup code` 

And in line below write next code (example how to write code for login popup)
```
if (dataPopup == "login") { // code for specific popup in example registration related to popup_registration
  // here your specific code for login popup
}
```

## IMPORTANT RULES
must be same \
in a button : \
`data-popup="THIS_TEXT"`

in a popup : \
`<div class="popup popup_THIS_TEXT" id="popup_THIS_TEXT">`

HTML must be like that 
```
<body>
  <div class="body-cont" id="body-cont">
     <!–– your html code  ––>
  </div>
</body>
```

or 


```
<body class="body-cont" id="body-cont">
  <!–– your html code  ––>
</body>
```