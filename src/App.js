import * as React from "react";
import Header from "./Header";

const List = (props) => 
  
  props.list.map((item) => 
    
    <Item key={item.objectID} item={item} />
  
  );

const Item = ({ item }) => 
  
    <li key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author + " "}</span>
      <span>{item.num_comments + " "}</span>
      <span>{item.points + " "}</span>
    </li>;


const Search = (props) => {
  const handleChange = (event) => 
    props.onSearch(event);
    
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={props.search} onChange={handleChange} />
      <p>
        Search for <strong>{props.searchTerm}</strong>
      </p>
    </div>
  
};

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

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm);
  });

  return (
    <div>
      <Header />

      <Search onSearch={handleSearch} searchTerm={searchTerm} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
}

export default App;
