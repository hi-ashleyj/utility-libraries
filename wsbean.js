let wsBean = function(url) {
    this.wsurl = (url) ? url : "ws" + window.location.href.split("/").slice(0, 3).join("/").slice(4);
    this.wsc = new WebSocket(this.wsurl);
    
    this.events = [];
    

    let u = this;
    this.wsc.addEventListener('open', function (event) {
        u.fire("connect", { url: u.wsurl });
    });
    
    this.wsc.addEventListener('message', function (event) {
        try {
            let res = JSON.parse(event.data)

            let type = res.type;
            let msg = res.data;
            u.fire(type, msg);
        } catch (err) {
            u.fire("error", { type: "parse", more: err });
        }
    });

    return this;
};

wsBean.prototype.on = function(type, call) {
    this.events.push({ type, call });
    return this;
};

wsBean.prototype.fire = function(type, msg) {
    for (var i in this.events) {
        if (this.events[i].type == type) {
            this.events[i].call((msg) ? msg : "");
        }
    }
};

// Listen for message
wsBean.prototype.send = function(msg) {
    this.wsc.send(msg);
};
