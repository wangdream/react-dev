import React from "react";
import "./index.scss";

class Header extends React.Component {
  constructor(props) {
    console.log('3');
    super();
    this.state = {
      list: [
        {name:"",value:'推荐'},
        {name:"facus",value:"关注"},
        {name:"backend",value:"后端"},
        {name:"frontend",value:"前端"},
        {name:"android",value:"Android"},
        {name:"ios",value:"IOS"},
        {name:"ai",value:"人工智能"},
        {name:"freebie",value:"开发工具"},
        {name:"career",value:"代码人生"},
        {name:"artcle",value:"阅读"},
      ],
      nowActive: 0,
    };
  }
  componentDidMount(){
    console.log(this.refs.listBox,'c');
  };
  handleClick(e, item,index) {
    this.props.handleClick(item);
    this.setState({
      nowActive:index
    })
  }
  render() {
    return (
      <div className="header">
        <header className="App-header">
          <nav>
            <ul className="list" >
              {this.state.list.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      this.state.nowActive === index ? "active" : ""
                    }`}
                    onClick={(e) => this.handleClick(e, item,index)}
                  >
                    {item.value}
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
export default Header;
