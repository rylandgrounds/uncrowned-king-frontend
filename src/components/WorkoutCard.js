import React from "react";
import { Card, Icon, Label, Image } from "semantic-ui-react";
import moment from "moment";

export default function WorkoutCard({
  workout: { id, body, createdAt, username },
}) {
  return (
    <Card fluid>
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{username}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
    </Card>
  );
}
