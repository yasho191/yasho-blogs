import React from "react";

class LikeButton extends React.Component {
    state = {
      likes: 0
    };
  
    addLike = () => {
      let newCount = this.state.likes + 1;
       this.setState({
       likes: newCount
       });
    };
  
    render() {
      const likes = this.state.likes;
      if (likes === 0) {
        return (
          <div>
            <button
              className="button"
              onClick={this.addLike}
              style={{
                height: "50px",
                padding: "0 30px",
                color: "#555",
                textAlign: "center",
                fontSize: "11px",
                fontWeight: "600",
                lineHeight: "38px",
                letterSpacing: "0.1rem",
                backgroundColor: "transparent",
                borderRadius: "50px",
                border: "1px solid #bbb",
                boxSizing: "border-box",
                position: "relative"}
            }
            >
              <i className={this.props.type} style={{ color: "balck"}}></i>
            </button>
          </div>
        );
      }
      else {
        return (
          <div>
            <button className="button" onClick={this.addLike}
            style={{
                height: "50px",
                padding: "0 30px",
                color: "#555",
                textAlign: "center",
                fontSize: "11px",
                fontWeight: "600",
                lineHeight: "38px",
                letterSpacing: "0.1rem",
                backgroundColor: "transparent",
                borderRadius: "50px",
                border: "1px solid #bbb",
                boxsizing: "border-box",
                position: "relative",
                }
            }>
              <i className={this.props.type} style={{ color: "red"}}></i>{" "}
              {likes}
            </button>
          </div>
        );
      }
    }
}

export default LikeButton;