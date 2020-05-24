import React from "react";

class SearchBar extends React.Component {
  state = { trem: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.trem);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Seach</label>
            <input
              type="text"
              value={this.state.trem}
              onChange={(e) => {
                this.setState({ trem: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
