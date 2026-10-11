// import { useReducer } from "react";

// function reducer(state, action) {
//   if (action.type === "increment") {
//     return { count: state.count + 1 };
//   }

//   if (action.type === "decrement") {
//     return { count: state.count - 1 };
//   }

//   return state;
// }

// function App() {
//   var [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <div>
//       <h1>{state.count}</h1>

//       <button onClick={() => dispatch({ type: "increment" })}>
//         +
//       </button>

//       <button onClick={() => dispatch({ type: "decrement" })}>
//         -
//       </button>
//     </div>
//   );
// }

// export default App;




import { useRef } from "react";
function App() {
  var inputRef = useRef(null);
  function  focusInput(){
    inputRef.current.focus();
  }
    return (
    <div>
      <input ref={inputRef} />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default App;


