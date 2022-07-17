import { ArtistList } from "../components/ArtistList";
import { DashboardHeader } from "../components/DashboardHeader";
import styled from "styled-components";
import colors from "../assets/colors";
import { SongList } from "../components/SongList";
import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";


const DashboardBody = styled.div`
    background-color: ${colors.contentBlack};
`
const DashboardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const spotifyApi = new SpotifyWebApi({
    clientId: "7b215911d14245089d73d78055353cb2",
  });

function Dashboard({code}) {
    const accessToken = useAuth(code)

    useEffect(() => {
        if (!accessToken) return;
    
        // Setting Up the spotifyApi with AccessToken so that we can use its functions anywhere in the component without setting AccessToken value again & again. 
        spotifyApi.setAccessToken(accessToken);
    
        // Get user details with help of getMe() function
        spotifyApi.getMe().then(data => {
          console.log(data);
        })
      }, [accessToken]);

    return (
        <DashboardWrapper>
            <DashboardHeader />
            <DashboardBody>
                <ArtistList />
                <SongList />
            </DashboardBody>
        </DashboardWrapper>
    )
}

export default Dashboard;