import styled from "styled-components"
import { PositionStrip } from "./PositionStrip"
import giveortake from "../assets/images/giveortake.jpeg"
import berightback from "../assets/images/berightback.png"

const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    padding-left: 10px;
`
const ListWrapper = styled.div`
    display flex;
    flex-direction: column;
    margin-top: 20px;
    overflow:auto;
`

const data = [
    {
        "id": 1,
        "name": 'Unholy Matrimony',
        "image": giveortake,
        "album": 'Give Or Take',
        "artist": 'Giveon',
        "duration": '3:20'
    },
    {
        "id": 2,
        "name": 'Addicted',
        "image": berightback,
        "album": 'Be Right Back',
        "artist": 'Jorja Smith',
        "duration": '3:24'
    },
]

export function SongList() {
    return (
        <>
            <Title>
                <h2>
                    Top Songs
                </h2>
            </Title>
            <ListWrapper>
                {data.map((item) => (<PositionStrip
                    key={item.id}
                    rank={item.id}
                    name={item.name}
                    artist={item.artist}
                    album={item.album}
                    duration={item.duration}
                    image={item.image}
                />))}
            </ListWrapper>
        </>

    )
}