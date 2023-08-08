import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  console.log(user.games);
  // console.log(user.games[0].gameData[0].GIR);
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div className = "profile-bg">
      <div>
        <h2>
          Viewing {user.username}'s profile.
          <p>
            {user.games.map((game, index) => (
              <>
              <div >
                <h4>Game #{index + 1}</h4>
                <div>Hole: {game.gameData[0].hole}</div>
                <div>Par: {game.gameData[0].par}</div>
                <div>Putts:{game.gameData[0].putts}</div>
                <div>FIR:{game.gameData[0].FIR}</div>
                <div>GIR:{game.gameData[0].GIR}</div>
                <div>Score To Par: {game.gameData[0].scoreToPar}</div>
                </div>
              </>
            ))}
          </p>
        </h2>
      </div>
    </div>
  );
};

export default Profile;
