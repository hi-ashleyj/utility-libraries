# Utility Libraries  
  
A small collection of utility Libraries that I use often in most projects. They're very dense, and help speed up my coding by removing annoying boilerplate, despite being less than 50 lines each.  
I've been using and sitting on these for the past couple of years. And now, I'm putting them on github for others to use.

## Licensing
Please don't try to sell them. Feel free to use them anywhere, modify them. Give credit if you want. If you don't want to, that's also fine. No actual official license. Go wild.

## NotQuery.js

Very very very very tiny version of jQuery that is still linked to the actual DOM.

### Docs
```js
// Alias for document.querySelectorAll, or returns the element if there is only one resuit
let green = find("div.css-class[or-whatever=\"else\"]")

// Functions available on all elements or nodelist objects, and chainable
green.attr("data-something", "use") // does setAttribute
green.getr("data-something") // does getAttribute
green.rmtr("data-something") // does removeAttribute
green.chng("className", "cheeseit") // sets object properties
green.styl("color", "red") // does style properties
green.when("click", () => { console.log("beans") }) // adds event listeners
green.doFor((el) => { console.log(el.innerText) }) // basically forEach but safe to use on single elements too

// All will work if green is a single element or a nodelist containing multiple or no elements.
```
  
## Comms.js
  
Barebones promise wrapper around XHR requests

### Docs
```js
// Contains the current host, can be overridden
let host = Comms.connection;
    // == https://github.com

// Get some plain text data
let textFile = await Comms.get("/some-data.txt");

// Post some JSON data
let response = await Comms.post("/handler", 
    JSON.stringify( { some_data: "here" } )
    );
```

## ws.js

Barebones wrapper and events around websockets

### Docs
```js
// Contains location
let host = wsurl;

// Raw websocket
let web_socket = wsc;

// This websocket handler expects JSON packets with a type and data property, eg:
// {
//    "type": "user_message",
//    "data": { 
//        "from": "hi-ashleyj", 
//        "to": "github-user",
//        "content": "Hello, World! 
//     }
// }

// Handle messages
Socket.on("user_message", displayMessageHandler);

// Send messages
Socket.send(JSON.stringify({ your_reply: here }));
```