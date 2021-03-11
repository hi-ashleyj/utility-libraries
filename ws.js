let wsurl = "ws" + window.location.href.split("/").slice(0, 3).join("/").slice(4);
let wsc = new WebSocket(wsurl);

wsc.addEventListener('open', function (event) {
    Socket.send('HELLO|Hi!');
});

let Socket = {};
Socket.events = [];
Socket.on = function(type, call) {
    Socket.events.push({type: type, call: call});
};

Socket.fire = function(type, msg) {
    for (var i in Socket.events) {
        if (Socket.events[i].type == type) {
            Socket.events[i].call((msg) ? msg : "");
        }
    }
};

// Listen for messages
wsc.addEventListener('message', function (event) {
    try {
        let res = JSON.parse(event.data)

        let type = res.type;
        let msg = res.data;
        Socket.fire(type, msg);
    } catch (_err) {
        Socket.fire("_error", { type: "parse" });
    }
});

Socket.send = function(msg) {
    wsc.send(msg);
};