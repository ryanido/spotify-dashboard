import { ArtistList } from "../components/ArtistList";
import { DashboardHeader } from "../components/DashboardHeader";
import styled from "styled-components";
import colors from "../assets/colors";
import { SongList } from "../components/SongList";

const DashboardBody = styled.div`
    background-color: ${colors.contentBlack};
`
const DashboardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

function Dashboard() {
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