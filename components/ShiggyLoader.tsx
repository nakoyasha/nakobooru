import { Image } from "react-native"
import { styles } from "../etc/Styles"

export function ShiggyLoader() {
    return (
        <Image style={[styles.icon]} source=
            {
                { uri: "https://cdn.discordapp.com/emojis/1155918238442606713.gif?size=96&quality=lossless" }
            }
        ></Image>
    )
}
