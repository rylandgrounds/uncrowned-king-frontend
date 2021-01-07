import React from "react";
import { Card, Image } from "semantic-ui-react";
import moment from "moment";
import image1 from "../assets/images/iw07uafl4bk31.jpg";
import image2 from "../assets/images/b770f60d925fded608ce458ccd7cdd43.jpg";
import image3 from "../assets/images/download.jpg";
import image4 from "../assets/images/exercise-03.jpg";
const images = [image1, image2, image3, image4];
const num = Math.floor(Math.random() * images.length);
const img = images[num];

export default function WorkoutCard({
  workout: { id, body, createdAt, username, points, type },
}) {
  return (
    <Card fluid>
      <Image src={img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{username}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
        <Card.Description>{body}</Card.Description>
        <br></br>
        <Card.Description>Type of Exercise:{type}</Card.Description>
        <br></br>
        <Card.Description>Points:{points}</Card.Description>
        <br></br>
      </Card.Content>
    </Card>
  );
}
