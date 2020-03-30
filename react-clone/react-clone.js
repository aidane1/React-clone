const container = document.getElementById("container");

class Component {
  constructor(props) {
    this.props = props || {};
    this.state = {};
    this.renderChildren = this.renderChildren.bind(this);
    this.render = this.render.bind(this);
    this.update = this.update.bind(this);
    this.setState = this.setState.bind(this);
    this.initState = this.initState.bind(this);
    this.create = this.create.bind(this);
    this.createElement = this.createElement.bind(this);
    // this.superRender = this.superRender.bind(this);

    this.elementReference = document.createElement("span");

    this.eventListeners = {
      onClick: "click",
      onHover: "hover",
      onMouseDown: "mouseDown",
      onMouseUp: "mouseUp"
    };
  }

  createElement(element, listeners = {}, callback = parent => {}) {
    let domElement = document.createElement(element);

    Object.keys(listeners).map(key => {
      domElement.addEventListener(key, listeners[key]);
    });

    domElement.add = child => {
      let data = child.render();

      //Okie so it appears fragments are actually slower than directly adding
      //the element to the DOM? interesting. I'll look more in to performance later
      //Consider using document.createTextNode for text nodes, probably improves performance

      if (data instanceof Component) {
        data = data.render();
        //   this.elementReference = data2;
        //   let fragment = document.createDocumentFragment();
        //   fragment.appendChild(data.render());
        //   return fragment;
      }
      domElement.appendChild(data);
      child.elementReference = data;
    };

    callback(domElement);
    // this.elementReference = domElement;
    // console.log(this);
    // console.log(domElement);
    return domElement;
  }

  setState(newState) {
    Object.keys(newState).map(key => {
      this.state[key] = newState[key];
    });
    this.elementReference &&
      (() => {
        let data = this.render();

        if (data instanceof Component) {
          data = data.render();
        }
        this.elementReference.parentNode.replaceChild(
          data,
          this.elementReference
		);
		this.elementReference = data;
      })();
  }

  initState(state) {
    this.state = state;
  }

  update() {
    this.parentNode.replace;
  }

  create(element) {
    return this.createElement(
      element,
      Object.keys(this.eventListeners)
        .filter(key => Object.keys(this.props).includes(key))
        .reduce((obj, key) => {
          obj[this.eventListeners[key]] = this.props[key];
          return obj;
        }, {}),
      parent => {
        this.renderChildren(parent);
      }
    );
  }

  renderChildren(parent) {
    this.props.text && (parent.innerText = this.props.text);
    this.props.child && parent.add(this.props.child);
    this.props.children && this.props.children.map(child => parent.add(child));
  }
}

class DIV extends Component {
  constructor(props = {}) {
    super(props);
  }
  render() {
    return this.create("div");
  }
}

class UL extends Component {
  constructor(props = {}) {
    super(props);
  }
  render() {
    return this.create("ul");
  }
}

class LI extends Component {
  constructor(props = {}) {
    super(props);
  }
  render() {
    return this.create("li");
  }
}

class TEXT extends Component {
  constructor(props = {}) {
    super(props);
  }
  render() {
    return this.props.text ? this.props.text : "";
  }
}

let register = (container, app) => {
  container.innerHTML = "";

  let data = app.render();

  if (data instanceof Component) {
    data = data.render();
  }

  container.appendChild(data);
  app.elementReference = data;
};
