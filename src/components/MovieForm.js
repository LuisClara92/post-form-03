import React, { Component } from "react";

class MovieForm extends Component {
 state = {
      title: "",
      poster: "",
      comment: "",
    };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
    const url = "https://post-a-form.herokuapp.com/api/movies";
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Your movie has been successfully saved!`);
        }
      })
      .catch((e) => {
        console.error(e);
        alert("There was an error when adding the movie.");
      });
  };

  render() {
    return (
      <div className="FormMovie">
        <h1>Submit Your Movie Here</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Movie Details</legend>
            <div className="form-data">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <textarea
                htmlFor="comment"
                placeholder="Type your comment here..."
                type="comment"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Submit" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default MovieForm;
