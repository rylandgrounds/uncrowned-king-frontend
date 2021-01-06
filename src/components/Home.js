import React, { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { Grid, Transition } from "semantic-ui-react";

import { AuthContext } from "../contexts/auth";
import WorkoutCard from "./WorkoutCard";
import WorkoutForm from "./WorkoutForm";
import { FETCH_WORKOUTS_QUERY } from "../util/graphql";

function Home() {
  const { user } = useContext(AuthContext);
  const { loading, error, data } = useQuery(FETCH_WORKOUTS_QUERY);
  if (loading === true) {
    return <h1> Loading...</h1>;
  } else if (loading === false) {
    return (
      <Grid columns={3}>
        <Grid.Row className="page-title">
          <h1>Recent Workouts</h1>
        </Grid.Row>
        <Grid.Row>
          {user && (
            <Grid.Column>
              <WorkoutForm />
            </Grid.Column>
          )}
          {loading ? (
            <h1>Loading Workouts..</h1>
          ) : (
            <Transition.Group>
              {data.getWorkouts &&
                data.getWorkouts.map((workout) => (
                  <Grid.Column key={workout.id} style={{ marginBottom: 20 }}>
                    <WorkoutCard workout={workout} />
                  </Grid.Column>
                ))}
            </Transition.Group>
          )}
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
