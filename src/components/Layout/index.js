import React from "react";
import Header from "./header/index";
import Content from "./content/index"

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      list: [
        {
          bussine: "阿里巴巴",
          writeTime: "2",
          title: "Nacos 2.0 性能提升十倍，贡献者 80% 以上来自阿里之外",
          description: "摘要：对于开发者来说，除了常规的技术架构协议等标准外，在边缘计算开源项目里，有两条判断标准更容易被开发者所忽略",
          source:'开源'
        },
      ],
    };
    
  }
  handleClick(item) {
    window.history.pushState(null, "", `/#/${item.name}`);
    this.setState({
      msg: item.value,
      list:[]
    });
    setTimeout(()=>{
        this.setState({
            list: [
                {
                  bussine: "阿里巴巴",
                  writeTime: "1",
                  titlle: "",
                  description: "摘要：对于开发者来说，除了常规的技术架构协议等标准外，在边缘计算开源项目里，有两条判断标准更容易被开发者所忽略",
                  source:'开源'
                },
              ],
        })
    },100)
 
  }
  render() {
    return (
      <div className="container">
        <Header
          handleClick={(item) => {
            this.handleClick(item);
          }}
        />
        <Content list={this.state.list} />
      </div>
    );
  }
}
export default Layout;
