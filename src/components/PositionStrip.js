import styled from "styled-components"
import { Avatar } from "@mui/material"
import colors from "../assets/colors"

const StripWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    color: ${colors.contentGrey};
`

const SongDetails = styled.div`
    display:flex;
    flex-direction: column;
    alignItems: 'center';
    align-text:'center';
    vertical-align:'top';
`
const RightSide = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width:50%;
    padding-right: 10px;
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
    padding-top:14px
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
                    sx={{pt:'10px'}}
                />
                <SongDetails>
                    <p>{props.name}</p>
                    <p>{props.artist}</p>
                </SongDetails>
            </LeftSide>
            <RightSide>
                <h4>{props.album}</h4>
                <h4>{props.duration}</h4>
            </RightSide>
        </StripWrapper>
    )
}