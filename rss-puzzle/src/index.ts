console.log("index");

// // import "./global.css";
// import { Button } from "./constructor";
// import { Component } from "./constructor";
// ///////////

const bodyElement = document.body;
const title = "Login Page";
const content = "Please register";

const template = `

<h1>${title}</h1>
<p>${content}</p>
<form>
<label for="name">First Name</label>
<input type="text" id="name" required>
<label for="surname">Surname</label>
<input type="text" id="surname" required>
<button>Login</button>
</form>
`;
bodyElement.innerHTML += template;

import { formData } from "./forms";

const form = document.querySelector("form") as HTMLFormElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = formData(form);
  console.log(data);
});

// /////////////

// class Menu extends Component {
//   constructor({ className, items }) {
//     super({ tag: "nav", className });
//     this.appendChildren(items);
//   }

//   toggleActiveItem(item) {
//     this.getChildren().forEach((child) => {
//       if (child === item && !child.isActive) {
//         child.addActiveClass();
//       } else if (child !== item && child.isActive) {
//         child.removeActiveClass();
//       }
//     });
//   }
// }

// class MenuItem extends Component {
//   activeClassName = "menu__item--active";

//   constructor({ className, text, href, onItemClicked = () => {} }) {
//     super({ tag: "li", className });
//     this.append(
//       new Link({
//         className: "menu__link",
//         text,
//         href,
//         onClick: (event) => {
//           onItemClicked(this);
//         },
//       }),
//     );
//   }

//   get isActive() {
//     return this.getNode().classList.contains(this.activeClassName);
//   }

//   addActiveClass() {
//     this.toggleClass(this.activeClassName);
//   }

//   removeActiveClass() {
//     this.toggleClass(this.activeClassName);
//   }
// }

// class Link extends Component {
//   constructor({ className, text, href, onClick }) {
//     super({ tag: "a", className, text });
//     this.onClick = onClick;
//     this.setAttribute("href", href);
//     if (onClick) {
//       this.onClick = onClick;
//       this.addListener("click", this.onClick);
//     }
//   }

//   setHref(href) {
//     this.setAttribute("href", href);
//   }

//   destroy() {
//     this.removeListener("click", this.onClick);
//     super.destroy();
//   }
// }
// //////////
// class InputLabel extends Component {
//   constructor({ className, text, attr, inputName }) {
//     super({ tag: "label", className, text });
//     super({ tag: "a", className, text });
//     this.onClick = onClick;
//     this.setAttribute("for", inputName);
//     if (onClick) {
//       this.onClick = onClick;
//       this.addListener("click", this.onClick);
//     }
//   }

//   destroy() {
//     this.removeListener("click", this.onClick);
//     super.destroy();
//   }
// }

// //  const menuItems = [
// //   { text: 'Home', href: '#' },
// //   { text: 'About', href: '#about' },
// //   { text: 'Contacts', href: '#contact' },
// //  ];

// //  class App {
// //   menu = null;

// //   constructor() {
// //    this.menu = new Menu({
// //     className: 'nav nav--main',
// //     items: menuItems.map(item => {
// //      return new MenuItem({
// //       className: 'menu__item',
// //       text: item.text,
// //       href: item.href,
// //       onItemClicked: item => {
// //        this.menu.toggleActiveItem(item);
// //       },
// //      });
// //     }),
// //    });
// //   }

// //   render(root) {
// //    root.append(this.menu.getNode());
// //   }
// //  }

// //////

// // <h1>Login Page</h1>
// // <form>
// //   <label for="name">First Name</label>
// //   <input type="text" id="name" required>
// //   <label for="surname">Surname</label>
// //   <input type="text" id="surname" required>
// //   <button>Login</button>
// // </form>

// const paragraph = new Component({
//   tag: "p",
//   className: "content",
//   text: "Component",
// });

// console.log(paragraph);

// const loginForm = new Component({
//   tag: "form",
//   className: "form",
//   text: "loginForm",
// });

// // const loginLabel = new InputLabel({
// //   className: "label",
// //   text: "",
// //   attr: "for",
// //   inputName: "name1",
// // });

// const app = new Component(
//   {
//     className: "app",
//   },
//   new Component({
//     tag: "h1",
//     className: "title",
//     text: "Login Page",
//   }),
//   paragraph,
//   loginForm,
//   // loginLabel,
//   new Button({
//     className: "btn",
//     text: "Component button",
//     onClick: () => {
//       paragraph.toggleClass("content--hidden");
//     },
//   }),
// );

// document.body.append(app.getNode());

// //////
