import Card from "@mui/material/Card"
import colors from "../assets/colors"
import { CardContent, Avatar } from "@mui/material"
export function InfoCard(props) {

    return (
        <Card sx={{ backgroundColor: colors.contentBlack , marginLeft: 10, boxShadow: 10, color:'white'}}>
            <CardContent>
                <Avatar
                    alt={props.name}
                    src={props.image}
                    sx={{ width: 150, height: 150, boxShadow: 3, }}
                />
                <h2>{props.name}</h2>
            </CardContent>
        </Card>
    )
}