import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        transform: `translate(${this.props.from[0]}px, ${
          this.props.from[1]
        }px) rotate(${Math.random() * 360}deg)`
      }
    };
    this.setStyle = this.setStyle.bind(this);
  }

  componentDidMount() {
    setTimeout(this.setStyle, 1);
  }

  setStyle() {
    const movingStyle = `translate(${Math.random() *
      window.innerHeight *
      2}px, ${Math.random() * window.innerWidth * 2}px) rotate(${Math.random() *
      360}deg)`;
    const time = this.props.time ? this.props.time : 20;
    const size = this.props.size ? this.props.size : "150px";
    const style = {
      position: "absolute",
      zIndex: "-1",
      transform: movingStyle,
      transition: `transform ${time}s ease-out`,
      MsTransform: movingStyle,
      MsTransition: `transform ${time}s ease-out`,
      Webkitransform: movingStyle,
      WebkitTransition: `transform ${time}s ease-out`,
      overflow: "visible",
      willChange: "transform"
    };
    const imgSize = {
      width: size,
      height: "auto"
    };
    this.setState({
      style: style,
      size: imgSize
    });
    setTimeout(this.setStyle, time * 1000);
  }

  render() {
    const { style, size } = this.state;

    return (
      <div style={style} >
        <img style={size} srcSet={this.props.what} alt="img" />
      </ div>
    );
  }
}

class Sky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: []
    };
    this.movement = this.movement.bind(this);
  }

  componentDidMount() {
    const many = this.props.how;
    const temp_moves = [];
    for (let i = 0; i < many; i++) {
      temp_moves.push(this.movement());
    }
    this.setState({
      moves: temp_moves
    });
  }

  movement() {
    const rotation = Math.floor((Math.round(Math.random()) * 2 - 1) * 600);
    const fromX = Math.floor(Math.random() * window.innerWidth);
    const fromY = Math.floor(Math.random() * window.innerHeight * 1.5);
    const toX = Math.floor(
      Math.random() * window.innerWidth * (Math.round(Math.random()) * 2 - 1)
    );
    const toY = Math.floor(
      Math.random() *
        window.innerHeight *
        1.5 *
        (Math.round(Math.random()) * 2 - 1)
    );
    const temp = {
      rotation,
      fromX,
      fromY,
      toX,
      toY
    };
    return temp;
  }

  render() {
    const items = this.props.images;
    const outerStyle = {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      margin: "0",
      padding: "0",
      overflow: "hidden",
      zIndex: "-1",
      background: this.props.background ? this.props.background : ""
    };

    return (
      <div style={outerStyle} id="sky">
        {this.state.moves.map((e, i) => {
          const conditional = Math.floor(
            Math.random() * Object.keys(items).length
          );

          return (
            <Item
              what={items[conditional]}
              from={[e.fromX, e.fromY]}
              to={[e.toX, e.toY]}
              rotation={e.rotation}
              size={this.props.size}
              time={this.props.time}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "space",
      background: "#2F3939",
      how: 100
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      mode: e.target.value,
      how: e.target.attributes.how.value,
      background: e.target.attributes.background.value
    });
  }
  render() {
    const { mode, background, how } = this.state;
    const modes = {
      cartoon: {
        0: "https://image.flaticon.com/icons/svg/124/124574.svg",
        1: "https://www.flaticon.com/free-icon/robot_2125097#term=robots&page=1&position=32",
        2: "https://www.flaticon.com/free-icon/robot_2125087",
        3: "https://www.flaticon.com/free-icon/artificial-intelligence_2125486#term=robots&page=1&position=71",
        4: "https://image.flaticon.com/icons/svg/124/124559.svg",
        5: "https://image.flaticon.com/icons/svg/124/124582.svg",
        6: "https://image.flaticon.com/icons/svg/124/124558.svg",
        7: "https://image.flaticon.com/icons/svg/124/124588.svg",
        8: "https://image.flaticon.com/icons/svg/124/124542.svg",
        9: "https://image.flaticon.com/icons/svg/124/124569.svg",
        10: "https://image.flaticon.com/icons/svg/124/124573.svg",
        11: "https://image.flaticon.com/icons/svg/124/124586.svg",
        12: "https://image.flaticon.com/icons/svg/124/124548.svg",
        13: "https://image.flaticon.com/icons/svg/124/124555.svg"
      },
      404: {
        0: "https://svgshare.com/i/9T5.svg"
      },
      animals: {
        0: "https://image.flaticon.com/icons/svg/1198/1198051.svg",
        1: "https://image.flaticon.com/icons/svg/1198/1198052.svg",
        2: "https://image.flaticon.com/icons/svg/1198/1198053.svg",
        3: "https://image.flaticon.com/icons/svg/1198/1198053.svg",
        4: "https://image.flaticon.com/icons/svg/1198/1198056.svg",
        5: "https://image.flaticon.com/icons/svg/1198/1198057.svg",
        6: "https://image.flaticon.com/icons/svg/1198/1198059.svg",
        7: "https://image.flaticon.com/icons/svg/1198/1198060.svg",
        8: "https://image.flaticon.com/icons/svg/1198/1198062.svg",
        9: "https://image.flaticon.com/icons/svg/1198/1198063.svg",
        10: "https://image.flaticon.com/icons/svg/1198/1198065.svg",
        11: "https://image.flaticon.com/icons/svg/1198/1198053.svg",
        12: "https://image.flaticon.com/icons/svg/1198/1198068.svg",
        13: "https://image.flaticon.com/icons/svg/1198/1198069.svg",
        14: "https://image.flaticon.com/icons/svg/1198/1198070.svg",
        15: "https://image.flaticon.com/icons/svg/1198/1198073.svg",
        16: "https://image.flaticon.com/icons/svg/1198/1198075.svg",
        17: "https://image.flaticon.com/icons/svg/1198/1198076.svg",
        18: "https://image.flaticon.com/icons/svg/1198/1198079.svg"
      },
      gif: {
        1: "https://media.giphy.com/media/otnqsqqzmsw7K/giphy.gif",
        2: "https://33.media.tumblr.com/ef95f99ce3222e912037af845e52ed6b/tumblr_nhcohan9qL1u2jwbho1_400.gif",
        3: "https://media.giphy.com/media/TSn2zVInxOm2c/giphy.gif",
        4: "https://media2.giphy.com/media/HjPbLbmep2aJO/200.gif",
        5: "https://media.giphy.com/media/iPTTjEt19igne/giphy.gif",
        6: "https://media0.giphy.com/media/vnnoqBjIrJ73y/200.gif",
        7: "https://media.giphy.com/media/IID06w8XVZcY0/giphy.gif",
        8: "https://media2.giphy.com/media/rfz8Uxk6qkCje/200.gif",
        9: "https://media.giphy.com/media/XMvrleT9jksXm/giphy.gif",
        10: "https://media.giphy.com/media/iFmxR5QdkEQKI/giphy.gif",
        11: "https://media2.giphy.com/media/fm4WhPMzu9hRK/200.gif",
        12: "https://media3.giphy.com/media/T5MvalD01r2XS/200.gif"
      },
    
      },
      react: {
        0: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
      }
    };
    return (
      <div className="App">
        <div className="title">
          <div className="git">
            <h1>Sky</h1>
            <a className="github-button" href="https://github.com/lucagez/sky" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star lucagez/sky on GitHub">Star</a>
          </div>
          <button
            how={35}
            background={"#2F3939"}
            value={"gif"}
            onClick={this.handleClick}
          >
            gif 🤣
          </button>
          <button
            how={100}
            background={"#2F3939"}
            value={"404"}
            onClick={this.handleClick}
          >
            404 💩
          </button>
          <button
            how={20}
            background={"#2F3939"}
            value={"animals"}
            onClick={this.handleClick}
          >
            animals 🦋
          </button>
          <button
            how={50}
            background={"#2F3939"}
            value={"space"}
            onClick={this.handleClick}
          >
            space 🚀
          </button>
          <button
            how={50}
            background={"#2F3939"}
            value={"403"}
            onClick={this.handleClick}
          >
            403 🛑
          </button>
          <button
            how={50}
            background={"#2F3939"}
            value={"500"}
            onClick={this.handleClick}
          >
            500 😯
          </button>
          <button
            how={50}
            background={"#2F3939"}
            value={"503"}
            onClick={this.handleClick}
          >
            503 🤐
          </button>
          <button
            how={50}
            background={"#2F3939"}
            value={"food"}
            onClick={this.handleClick}
          >
            food 🥕
          </button>
          <button
            how={50}
            background={"#2F3939"}
            value={"tech"}
            onClick={this.handleClick}
          >
            tech 💻
          </button>
          <button
            how={50}
            background={"#2F3939"}
            value={"autumn"}
            onClick={this.handleClick}
          >
            autumn 🍁
          </button>
          <button
            how={50}
            background={"#2F3939"}
            value={"social"}
            onClick={this.handleClick}
          >
            social 🤳
          </button>
          <button
            how={50}
            background={"#2F3939"}
            value={"react"}
            onClick={this.handleClick}
          >
            React 😍
          </button>
        </div>
        <Sky
          images={modes[mode]}
          how={how}
          size={"100px"}
          time={30}
          background={background}
        />
      </div>
    );
  }
}

export default Item;
