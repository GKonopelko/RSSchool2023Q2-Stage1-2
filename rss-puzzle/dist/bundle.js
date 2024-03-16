/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constructor.ts":
/*!****************************!*\
  !*** ./src/constructor.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component)
/* harmony export */ });
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Component_children, _Component_node;
class Component {
    constructor({ tag = "div", className = "", text = "" }, ...children) {
        _Component_children.set(this, []);
        _Component_node.set(this, null);
        const node = document.createElement(tag);
        node.className = className;
        node.textContent = text;
        __classPrivateFieldSet(this, _Component_node, node, "f");
        if (children) {
            this.appendChildren(children);
        }
    }
    append(child) {
        __classPrivateFieldGet(this, _Component_children, "f").push(child);
        __classPrivateFieldGet(this, _Component_node, "f").append(child.getNode());
    }
    appendChildren(children) {
        children.forEach((el) => {
            this.append(el);
        });
    }
    getNode() {
        return __classPrivateFieldGet(this, _Component_node, "f");
    }
    getChildren() {
        return __classPrivateFieldGet(this, _Component_children, "f");
    }
    setTextContent(content) {
        __classPrivateFieldGet(this, _Component_node, "f").textContent = content;
    }
    setAttribute(attribute, value) {
        __classPrivateFieldGet(this, _Component_node, "f").setAttribute(attribute, value);
    }
    removeAttribute(attribute) {
        __classPrivateFieldGet(this, _Component_node, "f").removeAttribute(attribute);
    }
    toggleClass(className) {
        __classPrivateFieldGet(this, _Component_node, "f").classList.toggle(className);
    }
    addListener(event, listener, options = false) {
        __classPrivateFieldGet(this, _Component_node, "f").addEventListener(event, listener, options);
    }
    removeListener(event, listener, options = false) {
        __classPrivateFieldGet(this, _Component_node, "f").removeEventListener(event, listener, options);
    }
    destroyChildren() {
        __classPrivateFieldGet(this, _Component_children, "f").forEach((child) => {
            child.destroy();
        });
        __classPrivateFieldGet(this, _Component_children, "f").length = 0;
    }
    destroy() {
        this.destroyChildren();
        __classPrivateFieldGet(this, _Component_node, "f").remove();
    }
}
_Component_children = new WeakMap(), _Component_node = new WeakMap();


/***/ }),

/***/ "./src/forms.ts":
/*!**********************!*\
  !*** ./src/forms.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formData: () => (/* binding */ formData)
/* harmony export */ });
const formData = (form) => {
    const inputs = form.querySelectorAll("input");
    const values = {};
    inputs.forEach((input) => {
        values[input.id] = input.value;
    });
    return values;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './global.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ "./src/forms.ts");
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructor */ "./src/constructor.ts");

const form1 = document.querySelector('form');
form1.addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle form submission
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = (0,_forms__WEBPACK_IMPORTED_MODULE_1__.formData)(form);
    console.log(data);
});
////////////
// const bodyElement = document.body;
// const title = "Welcome to our website!";
// const content = "This element comes with additional classes.";
// const headerElement = document.createElement("h1");
// headerElement.textContent = title;
// headerElement.classList.add("custom-header");
// class Component {
//   #children = [];
//   #node = null;
//   constructor({ tag = "div", className = "", text = "" }, ...children) {
//     const node = document.createElement(tag);
//     node.className = className;
//     node.textContent = text;
//     this.#node = node;
//     if (children) {
//       this.appendChildren(children);
//     }
//   }
//   append(child) {
//     this.#children.push(child);
//     this.#node.append(child.getNode());
//   }
//   appendChildren(children) {
//     children.forEach((el) => {
//       this.append(el);
//     });
//   }
//   getNode() {
//     return this.#node;
//   }
//   getChildren() {
//     return this.#children;
//   }
//   setTextContent(content) {
//     this.#node.textContent = content;
//   }
//   setAttribute(attribute, value) {
//     this.#node.setAttribute(attribute, value);
//   }
//   removeAttribute(attribute) {
//     this.#node.removeAttribute(attribute);
//   }
//   toggleClass(className) {
//     this.#node.classList.toggle(className);
//   }
//   addListener(event, listener, options = false) {
//     this.#node.addEventListener(event, listener, options);
//   }
//   removeListener(event, listener, options = false) {
//     this.#node.removeEventListener(event, listener, options);
//   }
//   destroyChildren() {
//     this.#children.forEach((child) => {
//       child.destroy();
//     });
//     this.#children.length = 0;
//   }
//   destroy() {
//     this.destroyChildren();
//     this.#node.remove();
//   }
// }
/////////////

class Menu extends _constructor__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor({ className, items }) {
        super({ tag: "nav", className });
        this.appendChildren(items);
    }
    toggleActiveItem(item) {
        this.getChildren().forEach((child) => {
            if (child === item && !child.isActive) {
                child.addActiveClass();
            }
            else if (child !== item && child.isActive) {
                child.removeActiveClass();
            }
        });
    }
}
class MenuItem extends _constructor__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor({ className, text, href, onItemClicked = () => { } }) {
        super({ tag: "li", className });
        this.activeClassName = "menu__item--active";
        this.append(new Link({
            className: "menu__link",
            text,
            href,
            onClick: (event) => {
                onItemClicked(this);
            },
        }));
    }
    get isActive() {
        return this.getNode().classList.contains(this.activeClassName);
    }
    addActiveClass() {
        this.toggleClass(this.activeClassName);
    }
    removeActiveClass() {
        this.toggleClass(this.activeClassName);
    }
}
class Link extends _constructor__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor({ className, text, href, onClick }) {
        super({ tag: "a", className, text });
        this.onClick = onClick;
        this.setAttribute("href", href);
        if (onClick) {
            this.onClick = onClick;
            this.addListener("click", this.onClick);
        }
    }
    setHref(href) {
        this.setAttribute("href", href);
    }
    destroy() {
        this.removeListener("click", this.onClick);
        super.destroy();
    }
}
//////////
//  const menuItems = [
//   { text: 'Home', href: '#' },
//   { text: 'About', href: '#about' },
//   { text: 'Contacts', href: '#contact' },
//  ];
//  class App {
//   menu = null;
//   constructor() {
//    this.menu = new Menu({
//     className: 'nav nav--main',
//     items: menuItems.map(item => {
//      return new MenuItem({
//       className: 'menu__item',
//       text: item.text,
//       href: item.href,
//       onItemClicked: item => {
//        this.menu.toggleActiveItem(item);
//       },
//      });
//     }),
//    });
//   }
//   render(root) {
//    root.append(this.menu.getNode());
//   }
//  }
//////
///////////
class Button extends _constructor__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor({ className, text, onClick }) {
        super({ tag: "button", className, text });
        if (onClick) {
            this.onClick = onClick;
            this.addListener("click", this.onClick);
        }
    }
    destroy() {
        this.removeListener("click", this.onClick);
        super.destroy();
    }
}
/////
const paragraph = new _constructor__WEBPACK_IMPORTED_MODULE_2__.Component({
    tag: "p",
    className: "content",
    text: "Component",
});
const app = new _constructor__WEBPACK_IMPORTED_MODULE_2__.Component({
    className: "app",
}, new _constructor__WEBPACK_IMPORTED_MODULE_2__.Component({
    tag: "h1",
    className: "title",
    text: "componentParagraph",
}), paragraph, new Button({
    className: "btn",
    text: "Component button",
    onClick: () => {
        paragraph.toggleClass("content--hidden");
    },
}));
document.body.append(app.getNode());
//////

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map