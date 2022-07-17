import { InfoCard } from "./InfoCard";
import styled from "styled-components";
import jorja from '../assets/images/jorja.jpg';
import sampha from '../assets/images/sampha.jpg'

const data = [
    {
        "id": 1,
        "name": 'Jorja Smith',
        "image": jorja
    },
    {
        "id": 2,
        "name": 'Sampha',
        "image": sampha
    },
]
const ListWrapper = styled.div`
    display flex;
    flex-direction:row;
    margin-top: 20px;
    padding-bottom: 20px;
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    padding-left: 10px;
`

export function ArtistList() {
    return (
        <>
            <Title>
                <h2>
                    Top Artists
                </h2>
            </Title>
            <ListWrapper>
                {data.map((item) => (<InfoCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                />))}
            </ListWrapper>
        </>
    )
}