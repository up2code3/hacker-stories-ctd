import * as React from "react";
import Header from "./Header";

function List(props) {
  return (
    <ul>
      {props.list.map(function (item) {
        return <Item item={item} />;
      })}
    </ul>
  );
}

const Item = ({item}) => {
  

  return (
    <li key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author + " "}</span>
      <span>{item.num_comments + " "}</span>
      <span>{item.points + " "}</span>
    </li>
  );
};

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Search for <strong>{searchTerm}</strong>
      </p>

    </div>
  );
}

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

  const handleSearch = (event) => {
      console.log(event.target.value);
  }

  return (
    <div>
      <Header />

      <Search onSearch={handleSearch} />
      
      <hr />

      <List list={stories} />

    </div>
  );
}

export default App;
