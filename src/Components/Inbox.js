import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import FavFilled from "@material-ui/icons/Favorite";
import FavOutLined from "@material-ui/icons/FavoriteBorder";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Butten from "@material-ui/core/Button";

export default class Inbox extends React.Component {
  state = {
    bgC: "lightgray",
    favChang: "outLined",
    mail: {}
  };
  handleBgC = () => {};
  handleFavChange = () => {
    if (this.state.favChang === "outLined") {
      this.setState({ favChang: "filled" });
    } else {
      this.setState({ favChang: "outLined" });
    }
  };
  render() {
    return (
      <div>
        <List>
          {this.props.data.map((item, index) => {
            if (item.status === "Inbox") {
              return (
                <div
                  style={{ backgroundColor: this.state.bgC }}
                  onClick={() => this.props.openEmail(index)}
                >
                  <ListItem alignItems="flex-start" key={index}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={`./images/${item.Image}`} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography
                            style={{ float: "left" }}
                            color="textPrimary"
                          >
                            {`${item.SenderName}     ${item.Mesg}`}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                    <Butten onClick={() => this.props.fevorateEmail(index)}>
                      {item.favorate === true ? <FavFilled /> : <FavOutLined />}
                    </Butten>
                    <Butten onClick={() => this.props.deleteEmail(index)}>
                      <DeleteIcon />
                    </Butten>
                  </ListItem>
                  <Divider />
                </div>
              );
            }
          })}
        </List>
      </div>
    );
  }
}
