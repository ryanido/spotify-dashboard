import { Avatar } from "@mui/material";
import styled from "styled-components";
import avatar from "../assets/images/spotifyavatar.jpg"
import colors from "../assets/colors";

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 2rem;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
    color:white;
    background: ${colors.headerGrey};
`;
const AvatarWrapper = styled.div`
    margin-right: 10px;
`;
const Username = styled.h1`
    margin-bottom:10px;
`

export function DashboardHeader() {
    return (
        <HeaderWrapper>
            <AvatarWrapper>
                <Avatar
                    alt="ryanido"
                    src={avatar}
                    sx={{ width: 200, height: 200,boxShadow:3}}
            
                />
            </AvatarWrapper>
            <Username>ryanido</Username>
        </HeaderWrapper>
    )
}