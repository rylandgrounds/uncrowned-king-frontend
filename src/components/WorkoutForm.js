import React from "react";
import { Button, Form } from "semantic-ui-react";
import { gql, useMutation } from "@apollo/client";

import { useForm } from "../util/hooks";
import { FETCH_WORKOUTS_QUERY } from "../util/graphql";

function WorkoutsForm() {
  const { onChange, onSubmit, values } = useForm(createWorkoutCallback, {
    body: "",
    type: "",
    points: "",
  });

  const [createWorkout, { error }] = useMutation(CREATE_WORKOUT_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_WORKOUTS_QUERY,
      });

      let newData = [...data.getWorkouts];
      newData = [result.data.createWorkouts, ...newData];
      proxy.writeQuery({ query: FETCH_WORKOUTS_QUERY, data: newData });
      values.body = "";
      values.type = "";
      values.points = "";
    },
  });

  function createWorkoutCallback() {
    createWorkout();
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>Create a Workout!</h2>
        <Form.Field>
          <Form.Input
            placeholder="Let's rack up those gains!"
            name="body"
            onChange={onChange}
            value={values.body}
            error={error ? true : false}
          />
          <Form.Input
            placeholder="Type of Exercise?"
            name="type"
            onChange={onChange}
            value={values.type}
            error={error ? true : false}
          />
          <Form.Input
            placeholder="How many points?"
            name="points"
            onChange={onChange}
            value={values.points}
            error={error ? true : false}
          />
          <Button type="submit" color="teal">
            Submit
          </Button>
        </Form.Field>
      </Form>
    </>
  );
}

const CREATE_WORKOUT_MUTATION = gql`
  mutation createWorkout($body: String!, $type: String!, $points: String!) {
    createWorkout(body: $body, type: $type, points: $points) {
      id
      body
      createdAt
      username
      points
      type
    }
  }
`;

export default WorkoutsForm;
