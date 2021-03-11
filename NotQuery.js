var find = function(str) {var work = document.querySelectorAll(str); if (work.length == 1) {return work[0]} else {return work}};
NodeList.prototype.chng = function(attr, value) {for (var i = 0; i < this.length; i++) {this[i][attr] = value} return this};
NodeList.prototype.styl = function(attr, value) {for (var i = 0; i < this.length; i++) {this[i].style[attr] = value} return this};
NodeList.prototype.when = function(type, func) {for (var i = 0; i < this.length; i++) {this[i].addEventListener(type, func)} return this};
NodeList.prototype.attr = function(attr, value) {for (var i = 0; i < this.length; i++) {this[i].setAttribute(attr, value)} return this};
NodeList.prototype.getr = function(attr) {var work = []; for (var i = 0; i < this.length; i++) {work.push(this[i].getAttribute(attr))} return work};
NodeList.prototype.rmtr = function(attr) {for (var i = 0; i < this.length; i++) {this[i].removeAttribute(attr)} return this};
NodeList.prototype.doFor = function(func) {for (var i = 0; i < this.length; i++) {func(this[i])} return this};

Element.prototype.chng = function(attr, value) {this[attr] = value; return this};
Element.prototype.styl = function(attr, value) {this.style[attr] = value; return this};
Element.prototype.when = function(type, func) {this.addEventListener(type, func); return this};
Element.prototype.attr = function(attr, value) {this.setAttribute(attr, value); return this};
Element.prototype.getr = function(attr) {return this.getAttribute(attr)};
Element.prototype.rmtr = function(attr) {this.removeAttribute(attr); return this};
Element.prototype.doFor = function(func) {func(this); return this};