import React from 'react'
import "./SearchBar.css";
function SearchBar() {
    return (
        <div className="search">
            <h1> Order Home Made Food Now</h1>
            <h2> Select from range of Home Chefs and Home Food</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellat assumenda tenetur delectus dicta</p>
            <form>
  <label>
                    <input type="text" name="name" value="Search by City" />
                    <input type="text" name="name" value="Search by Chef" />
                    <input type="text" name="name" value="Search by Food" />
  </label>
  <input className="searchBtn" type="submit" value="Search" />
</form>

        </div>
    )
}

export default SearchBar
