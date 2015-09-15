  var App = React.createClass({
    render:function(){
      return <h1>Hello World</h1>
    }
  });

//React.render will be depricated in the next release
//https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#two-packages-react-and-react-dom
  ReactDOM.render(<App />, document.getElementById("app"));

//   var App = React.createClass({
//     render:function(){
//       return React.DOM.h1(null, "Hi there")
//     }
//   });

// Depracated calling component classes without using JSX or React.createElement
// https://facebook.github.io/react/blog/2015/03/10/react-v0.13.html#breaking-changes
//   ReactDOM.render(React.createElement(App), document.getElementById('myContainer'));
  
//   var App = React.createClass({
//     render:function(){
//       return React.createElement("h1", null, "Yo")
//     }
//   });

//   ReactDOM.render(React.createElement(App), document.getElementById('myContainer'));