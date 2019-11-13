import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

export default class Important extends React.Component {
  render() {
    return (
      <div>
        <List>
          {this.props.data.map((item, index) => {
            if (item.fevorate) {
              return (
                <div>
                  <ListItem alignItems="flex-start" key={index}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={`./images/${item.Image}`} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            {`${item.SenderName}    `}
                          </Typography>
                          {item.Mesg}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </div>
              );
            }
          })}
        </List>
      </div>
    );
  }
}
