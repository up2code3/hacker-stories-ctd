import * as React from "react";
import Header from "./Header";

function App() {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  // the old way with 2 hooks
  // const [searchTerm, setSearchTerm] = 
  //   React.useState(localStorage.getItem("search") || "React"
  // );
  // React.useEffect(() => {
  //   localStorage.setItem("search", searchTerm);
  // }, [searchTerm]);

  // the new way with 1 custom hook
  const useSemiPersistentState = (key, initialState) => {
    
    const [value, setValue] = 
      React.useState(
        localStorage.getItem(key) || initialState
    )
    
    React.useEffect(() => {
      localStorage.setItem(key, value);
    }, [value]);
    return [value, setValue];
  }; 
  
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');
  

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />

      <Search onSearch={handleSearch} search={searchTerm} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
}

const Search = ({ onSearch, search }) => {
 
  const handleChange = (event) => {
    onSearch(event);
  };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={handleChange} />
    </>
  );
};

const List = ({ list }) =>
  list.map((item) => 
  <Item key={item.objectID} item={item} />
);

const Item = ({ item }) => (
  <li key={item.objectID}>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>

    <span>{item.author + " "}</span>
    <span>{item.num_comments + " "}</span>
    <span>{item.points + " "}</span>
  </li>
);

export default App;
