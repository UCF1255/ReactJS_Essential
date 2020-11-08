import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import Hiring from "./Hiring";
import NotHiring from "./NotHiring";
import SkiDayCounter from "./SkiDayCounter";
import Message from './Message'
import FavouriteColorForm from './FavouriteColorForm';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100,
};

class Library extends Component {
  static defaultProps = {
    books: [{ title: "Taj Mahal" }],
  };
  state = {
    open: false,
    freebookmark: true,
    hiring: true,
    data: [],
    loading: false,
  };
  componentDidMount() {
    console.log("The component is now mounted");
    this.setState({ loading: true });
    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
      .then((data) => data.json())
      .then((data) => this.setState({ data, loading: false }));
  }

  componentDidUpdate() {
    console.log("The component is just updated");
  }

  toggleOpenClosed = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
      freebookmark: true,
    }));
  };
  render() {
    const { books } = this.props;
    return (
      <div>
        <h5>Library componnet</h5>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading ? (
          "Loading..."
        ) : (
          <div>
            {this.state.data.map((product) => {
              return (
                <div key={product.id}>
                  <h3>Library product of the week!!!</h3>
                  <h4>{product.name}</h4>
                  <img src={product.image} height={100} />
                </div>
              );
            })}
          </div>
        )}
        <h1>The library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        <h5>Book componnet</h5>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freebookmark={this.state.freebookmark}
          ></Book>
        ))}
        <h5>SkiDayCounter componnet</h5>
        <SkiDayCounter
          total={skiData.total}
          powder={skiData.powder}
          backcountry={skiData.backcountry}
          goal={skiData.goal}
        />
        <h5>Message Component</h5>
        <Message minutes={10} msg="How are you ?" color="red"/>
        <h5>Form Component</h5>
        <FavouriteColorForm />
      </div>
    );
  }
}

Library.propTypes = {
  books: PropTypes.array,
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool,
};

export default Library;
