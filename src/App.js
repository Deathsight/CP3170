import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Mail from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Inbox from "./Components/Inbox";
import Spam from "./Components/Spam";
import Important from "./Components/Important";
import Trash from "./Components/Trash";
import Star from "@material-ui/icons/Star";
import "./App.css";
import DeleteIcon from "@material-ui/icons/Delete";

export default class App extends React.Component {
  state = {
    selectedPage: "Inbox",
    status: false,
    styleA: { height: 60, marginLeft: 160, display: "flex" },
    emailData: [
      {
        SenderName: "Ahmed",
        Mesg: "Important Weather Advisory",
        Image: "ahmed.png",
        status: "Inbox",
        fevorate: false,
        opened: false
      },
      {
        SenderName: "George",
        Mesg: "Rock the color of the year",
        Image: "george.png",
        status: "Inbox",
        favorate: false,
        opened: false
      },
      {
        SenderName: "Gillian",
        Mesg: "Where to Drink Beer Right Now",
        Image: "gillian.png",
        status: "Inbox",
        fevorate: false,
        opened: false
      },
      {
        SenderName: "Hania",
        Mesg: "As you Wish",
        Image: "hania.png",
        status: "Inbox",
        fevorate: false,
        opened: false
      },
      {
        SenderName: "Mariam",
        Mesg: "*Don't Open This Email*",
        Image: "mariam.png",
        status: "Inbox",
        fevorate: false,
        opened: false
      },
      {
        SenderName: "Robert",
        Mesg: "Not Cool Guys",
        Image: "robert.png",
        status: "Inbox",
        fevorate: false,
        opened: false
      }
    ]
  };
  handleFevorate = Index => {
    const temp = this.state.emailData;
    if (temp[Index].fevorate === true) {
      temp[Index].fevorate = false;
    } else {
      temp[Index].fevorate = true;
    }
    console.log(temp[Index]);
    this.setState({ emailData: temp });
  };
  handleOpenMail = Index => {
    const temp = this.state.emailData;
    temp[Index].opened = true;
    this.setState({ emailData: temp });
  };
  handleRestore = Index => {
    const temp = this.state.emailData;
    temp[Index].status = "Inbox";
    this.setState({ emailData: temp });
  };

  handleChanges = text => {
    this.setState({ selectedPage: text });
  };

  handleDrawer = () => {
    this.setState({ status: !this.state.status });
  };

  render() {
    return (
      <div>
        <CssBaseline />
        <AppBar>
          <div style={this.state.styleA}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawer}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Persistent drawer
              </Typography>
            </Toolbar>
          </div>
        </AppBar>
        <nav aria-label="mailbox folders">
          <div>
            <Divider />
            <Drawer variant="permanent" anchor="left" open={this.state.status}>
              <div />
              <h2 style={{ textAlign: "center" }}>CP3170</h2>

              <List style={{ height: 150 }}>
                {["Inbox", "Trash", "Important", "Spam"].map((text, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => this.handleChanges(text)}
                    style={{ backgroundColor: "darkgray", padding: 20 }}
                  >
                    <ListItemIcon>
                      {text === "Inbox" ? (
                        <InboxIcon />
                      ) : text === "Trash" ? (
                        <DeleteIcon />
                      ) : text === "Important" ? (
                        <Star />
                      ) : (
                        <Mail />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
                <Divider />
              </List>
            </Drawer>
          </div>
          <Divider />
        </nav>
        <main style={{ marginLeft: 160 }}>
          <div style={{ marginTop: 80 }} />
          {this.state.selectedPage === "Inbox" ? (
            <Inbox
              data={this.state.emailData}
              fevorateEmail={this.handleFevorate}
              openEmail={this.handleOpenMail}
            />
          ) : this.state.selectedPage === "Trash" ? (
            <Trash
              data={this.state.emailData}
              restoreEmail={this.handleRestore}
            />
          ) : this.state.selectedPage === "Important" ? (
            <Important data={this.state.emailData} />
          ) : this.state.selectedPage === "Spam" ? (
            <Spam />
          ) : null}
        </main>
      </div>
    );
  }
}
