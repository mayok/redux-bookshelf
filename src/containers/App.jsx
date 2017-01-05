import React from 'react';

// class App extends Component {
//
//   componentDidMount() {
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Hello world</h1>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
// }
//
// App.proptypes = {
// };

// export default connect(mapStateToProps)(App);

const App = () => {
  const text = 'Hello world';

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default App;
