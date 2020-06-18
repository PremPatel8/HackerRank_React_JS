import React from "react";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      totalPages: 0,
      articles: [],
    };
  }

  componentDidMount() {
    this.loadPage();
  }

  loadPage(page = 1) {
    const apiURL = "https://jsonmock.hackerrank.com/api/articles?page=" + page;

    fetch(apiURL)
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({
          page: page,
          totalPages: jsonData.total_pages,
          articles: jsonData.data,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="pagination">
          {[...Array(this.state.totalPages).keys()].map((i) => (
            <button
              data-testid="page-button"
              key={"page-button-" + (i + 1)}
              onClick={() => this.loadPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <ul className="results">
          {this.state.articles.map((article, index) => {
            if (article.title) {
              return (
                <li key={"title-" + (index + 1)} data-testid="result-row">
                  {article.title}
                </li>
              );
            } else {
              return "";
            }
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Articles;
