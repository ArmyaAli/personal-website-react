import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { cardStyles } from "./cardStyles";

export const Who = () => {
  const classes = cardStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Who
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            My name is Ali and I grew up in Canada. I was born in Pakistan but
            my family came to Toronto when I was just a year old which let me
            grow up in Canada. I love programming, technology and going to the
            gym. I've built my own computer, played around with my many
            different technologies and worked as an intern web developer for
            almost a year. I currently go to Seneca College and study Computer
            Engineering Technology which is a mixture of electrical engineering
            and programming.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const What = () => {
    const classes = cardStyles();
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              What
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              I am an aspiring Software Engineering with a passion for technology
              while keeping up to date of all the new emerging programming tools
              that could be the next new thing. For example, I built this website
              without a framework because I wanted to hone basic skills. As a
              developer I believe that if you have a strong foundational
              knowledge, you can pick up any tool you or your employer require. I
              also believe that as a software developer it is a must that you
              continue learning new things, keep up with the ever changing world
              of tech and continue to hone and practice your basic skills.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  
  export const Why = () => {
    const classes = cardStyles();
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Why
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This website was mainly used to show off to people. I created this
              website within a few days and I think it's pretty neat. It's hosted
              with Google's Firebase cloud platform which is essentially a Backend
              as a service relatable to Amazon's AWS or Microsoft's Azure. For the
              particles I am using the open source particles.js
              (https://vincentgarreau.com/particles.js/) and to show my resume
              across all browsers I am using Mozilla's PDF.js
              (https://mozilla.github.io/pdf.js/) I want people to see this
              website and think I'm a cool guy. Maybe somebody will see this site
              and decide to hire me. Haha, if that ever happens I know that I am
              doing something right.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  