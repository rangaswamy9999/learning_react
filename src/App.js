import React, { useEffect, useReducer } from "react";

function App() {
  return (
    <>
      <h1>My Travel Journal</h1>
      <FinalApp />
    </>
  );
}

const initialState = {
  loading: false,
  error: "",
  userData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: "" };

    case "FETCH_SUCCESS":
      return { ...state, loading: false, userData: action.payload };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "DELETE_USER":
      return {
        ...state,
        userData: state.userData.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};

const fench = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};



const FinalApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchUserData = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const data = await fench("https://jsonplaceholder.typicode.com/users");
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };
    fetchUserData();
  }, []);

  const handleDelete = (id) => {
  dispatch({ type: "DELETE_USER", payload: id });
};

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>Error: {state.error}</p>;

  return (
    <>
      {state.userData.map((u) => {
        const { id, name, email } = u;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <p>{email}</p>
            {/*  <button onClick={() => handleEdit(id)}>Edit</button> */}
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default App;
