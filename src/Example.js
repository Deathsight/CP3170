import React from "react";
import "./App.css";
import {
  Button,
  Grid,
  Paper,
  Checkbox,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AppleIcon from "@material-ui/icons/Apple";
import AirlineSeatReclineExtraIcon from "@material-ui/icons/AirlineSeatReclineExtra";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import InfoIcon from "@material-ui/icons/Info";
import ShuffleIcon from "@material-ui/icons/Shuffle";
// import ReactAudioPlayer from "react-audio-player";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Sound from "react-sound";

export default class Example extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
    display: 0,
    autoPlay: false,
    value:10,
    images: [
      { img: "chicken.png", col: 3 },
      { img: "crab.png", col: 1 },
      { img: "horse.png", col: 1 },
      { img: "rabbit.png", col: 2 },
      { img: "octopus.png", col: 2 }
    ],
    images2: [
      { img: "chicken.png", col: 3 },
      { img: "crab.png", col: 1 },
      { img: "horse.png", col: 1 },
      { img: "rabbit.png", col: 2 },
      { img: "octopus.png", col: 2 }
    ]
  };

  handleChange = ch => {
    this.setState({ [ch]: !this.state[ch] });
  };

  handleshuffle = () => {
    let tempArray = [...this.state.images2];
    for (let i = this.state.images2.length - 1; i >= 0; i--) {
      let num = Math.floor(Math.random() * (i + 1));
      let tempindex = tempArray[i];
      tempArray[i] = tempArray[num];
      tempArray[num] = tempindex;
    }
    this.setState({ images2: tempArray });
  };

  handleAlert = pic => {
    alert(`this is a picure ${pic}`);
  };
  handleControl = x => {
    this.setState({ display: x });
  };
  handleVolum = (event, newValue) => {
    console.log("newvalue", newValue)
    this.setState({value: newValue})

  }

  render() {
    return (
      <React.Fragment>
        {/* <Button onClick={() => !this.state.autoPlay} variant="outlined" color="primary">
              Stop
            </Button>
          <ReactAudioPlayer
          src="./sound/broken-heart22.mp3"
          volume={0.2} 
          controls
          autoPlay={()=> this.setState({ display: !this.state.display })}

          // onPause={() => this.setState({ display: !this.state.display })}
        /> */}

        <Sound
          url="./sound/broken-heart22.mp3"
          playStatus={
            this.state.display === 0
              ? Sound.status.PLAYING
              : this.state.display === 1
              ? Sound.status.PAUSE
              : Sound.status.STOPPED
          }
          // playFromPosition={300 /* in milliseconds */}
          // onLoading={this.handleSongLoading}
          // onPlaying={this.handleSongPlaying}
          // onFinishedPlaying={this.handleSongFinishedPlaying}
          volume = {this.state.value}
        />
        <VolumeDown/>
          <Slider style={{width: "20vw"}} value={this.state.value} onChange={this.handleVolum} aria-labelledby="continuous-slider" />
          <VolumeUp />

        <Button onClick={() => this.handleControl(0)}> Play </Button>
        <Button onClick={() => this.handleControl(1)}> Pause </Button>
        <Button onClick={() => this.handleControl(2)}> Stop </Button>

        <Container>
          <Grid container direction="column">
            <Button
              variant="outlined"
              color="secondary"
              style={{ width: "60vmin" }}
            >
              Default
            </Button>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
              Link
            </Button>
          </Grid>
          {this.state.display ? (
            <Paper
              elevation={5}
              style={{ backgroundColor: "lightblue", width: "90vmax" }}
            >
              HEY ALL ,HOW YOU DOIN ....................................
            </Paper>
          ) : null}

          <Checkbox
            checked={this.state.checkedA}
            onChange={() => this.handleChange("checkedA")}
            value="checkedA"
            inputProps={{
              "aria-label": "primary checkbox"
            }}
          />
          <Checkbox
            checked={this.state.checkedB}
            disabled={!this.state.checkedA}
            onChange={() => this.handleChange("checkedB")}
            value="checkedB"
            color="primary"
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          <Checkbox
            value="checkedC"
            inputProps={{
              "aria-label": "uncontrolled-checkbox"
            }}
          />
          <Checkbox
            disabled
            value="checkedD"
            inputProps={{
              "aria-label": "disabled checkbox"
            }}
          />
          <Checkbox
            disabled
            checked
            value="checkedE"
            inputProps={{
              "aria-label": "disabled checked checkbox"
            }}
          />
          <Checkbox
            checked={this.state.checkedF}
            onChange={() => this.handleChange("checkedF")}
            value="checkedF"
            indeterminate
            inputProps={{
              "aria-label": "indeterminate checkbox"
            }}
          />
          <Checkbox
            defaultChecked
            color="default"
            value="checkedG"
            inputProps={{
              "aria-label": "checkbox with default color"
            }}
          />
          {this.state.checkedA ? (
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  style={{ flex: 0 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flex: 1 }}>
                  News
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          ) : null}
          <AppleIcon style={{ color: "blue" }} fontSize="large" />
          <AirlineSeatReclineExtraIcon
            fontSize="large"
            style={{ color: "secondary" }}
          />
          <EmojiEmotionsIcon style={{ color: "orange" }} fontSize="large" />
        </Container>
        <Grid container spacing={11}>
          <Grid item xs={6} style={{ backgroundColor: "darkred" }}>
            {" "}
            <h1> Grid Number 1</h1>{" "}
          </Grid>
          <Grid item xs={6} style={{ backgroundColor: "blue" }}>
            {" "}
            <h1> Grid Number 2 </h1>{" "}
          </Grid>
          <Grid item xs={6} style={{ backgroundColor: "orange" }}>
            {" "}
            <h1> Grid Number 3 </h1>{" "}
          </Grid>
          <Grid item xs={6} style={{ backgroundColor: "darkgreen" }}>
            {" "}
            <h1> Grid Number 4</h1>{" "}
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="center">
          {this.state.images.map((item, index) => {
            if (index < 2) {
              return (
                <Grid item xs={6}>
                  <img src={`./images/${item.img}`} />
                </Grid>
              );
            } else {
              return (
                <Grid item xs={3}>
                  <img src={`./images/${item.img}`} />
                </Grid>
              );
            }
          })}
        </Grid>

        {/* <Grid item xs={4}>
            {" "}
            <img src="/images/chicken.png" />
          </Grid>
          <Grid item xs={4}>
            {" "}
            <img src="/images/crab.png" />
          </Grid>
          <Grid item xs={4}>
            {" "}
            <img src="/images/dolphin.png" />
          </Grid>
          <Grid item xs={6}>
            {" "}
            <img src="/images/horse.png" />
          </Grid>
          <Grid item xs={6}>
            {" "}
            <img src="/images/rabbit.png" />
          </Grid>
          <Grid item xs={12}>
            {" "}
            <img src="/images/turtle.png" />
          </Grid>
        </Grid> */}

        {/* <div>
          <GridList
            cellHeight={160}
            style={{ width: 900, height: 600 }}
            cols={3}
          >
            {this.state.images.map(tile => (
              <GridListTile cols={tile.col || 1}>
                <img
                  src={`./images/${tile.img}`}
                  style={{ width: 200, height: 200 }}
                />
              </GridListTile>
            ))}
          </GridList>
        </div> */}
        <br />
        <br />
        <br />
        <br />
        <div>
          <ShuffleIcon onClick={this.handleshuffle}></ShuffleIcon>
          <GridList cellHeight={180}>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <ListSubheader component="div">aaaa</ListSubheader>
            </GridListTile>
            {this.state.images2.map(tile => (
              <GridListTile key={tile.img}>
                <img
                  src={`./images/${tile.img}`}
                  alt={tile.title}
                  style={{ width: 100, height: 100 }}
                />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.img}</span>}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${tile.title}`}
                      onClick={() => this.handleAlert(tile.img)}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </React.Fragment>
    );
    //view port hight, is the view that we see in the browser (2 %of the hight)
    // vw = view width , v min , v max
  }
}
