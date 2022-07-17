import styled from "styled-components"
import { Avatar } from "@mui/material"
import colors from "../assets/colors"


const StripWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    color: ${colors.contentGrey};
    border-radius: 5px;
    :hover {
        background-color: ${colors.headerGrey}
    }
    padding-bottom:5px;
`

const SongDetails = styled.div`
    display:flex;
    flex-direction: column;
    padding-top: 5px;
    padding-left: 10px;
`
const RightSide = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width:50%;
    padding-right: 10px;
    padding-top:14px;
`

const LeftSide = styled.div`
    padding-left: 10px;
    display:flex;
    flex-direction: row;
    width: 50%;
`

const Rank = styled.div`
    padding-right: 10px;
    font-size:20px;
    padding-top:10px
`

const Song = styled.div`
    font-size:16px;
    color: white;
`
const Artist = styled.div`
    font-size:15px;
    color: ${colors.contentGrey};
    :hover {
        cursor:pointer;
        color: white;
        text-decoration: underline;
    }
`
const Album = styled.div`
    font-size:15px;
    color: ${colors.contentGrey};
    :hover {
        cursor:pointer;
        color: white;
        text-decoration: underline;
    }
`
const Duration = styled.div`
    font-size:15px;
    color: ${colors.contentGrey};
`
export function PositionStrip(props) {
    console.log(props.rank)
    return (
        <StripWrapper>
            <LeftSide>
                <Rank>{props.rank}</Rank>
                <Avatar
                    src={props.image}
                    alt={props.name}
                    variant="square"
                    sx={{pt: '5px'}}
                />
                <SongDetails>
                    <Song>{props.name}</Song>
                    <Artist onClick={() => {console.log("artist")}}>{props.artist}</Artist>
                </SongDetails>
            </LeftSide>
            <RightSide>
                <Album onClick={() => {console.log("album")}}>{props.album}</Album>
                <Duration>{props.duration}</Duration>
            </RightSide>
        </StripWrapper>
    )
}