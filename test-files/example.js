// const file_parser = include("react-clone/file-parser");

class App extends Component {
  constructor(props) {
    super(props);
    this.initState({
      clicks: 0
    });
  }
  render() {
    let { clicks } = this.state;
    console.log(clicks);
    return new DIV({
      styles: [],
      children: [
        new DIV({
          onClick: () => {
            this.setState({ clicks: ++clicks });
          },
          text: clicks.toString()
        }),
        new CustomClass()
      ]
    });
  }
}

class CustomClass extends Component {
  constructor(props = {}) {
    super(props);
  }
  render() {
    return new DIV({
      styles: {},
      text: "HEY"
    });
  }
}

// class CustomClass extends Component {
//   constructor(props = {}) {
//     super(props);
//     this.initState({ items: [1, 2, 3, 4, 5] });
//   }
//   render() {
//     // let { items } = this.state || [1, 2 ,3];
//     return UL({
//       onClick: () => {
//         this.setState({ items: [6, 7, 8, 9] });
//       },
//       children: [1, 2, 3].map(item => {
//         return new LI({
//           text: new TEXT({ text: item })
//         });
//       })
//     });
//   }
// }

register(container, new App());
// var t0 = performance.now();

// var t1 = performance.now();

// console.log("Call to register took " + (t1 - t0) + " milliseconds.");
