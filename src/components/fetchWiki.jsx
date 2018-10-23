import React, {Component} from 'react';

class Fetchwiki extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    let data = fetch(
      'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=bogota&utf8=&format=json&origin=*',
    )
      .then(res => res.json())
      .then(res => {
        console.log(res.query.search);
        this.setState({data: res.query.search});
      });
  }

  render() {
    const {data} = this.state;
    console.log(this.state);
    const list = data.map((d, i) => (
      <tr key={i} scope="row">
        <td>{d.title}</td>
        <td>{d.snippet}</td>
      </tr>
    ));
    return (
      <div>
        <h1 class="display-4 text-center m-5">
          Fetching Bogota from Wiki search
        </h1>
        <table className="table table-hover">
          <thead class="thead-light">
            <tr scope="row">
              <th scope="col">Article Title</th>
              <th scope="col">Article Snippet</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    );
  }
}

export default Fetchwiki;
