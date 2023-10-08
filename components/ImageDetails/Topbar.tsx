import { Image, Pressable, Text, View } from "react-native"
import { styles } from "../../etc/Styles"



export function Topbar() {
    return (
        <View style={[styles.imageDetailsTopBar]}>
            <Text style={[styles.imageDetailsHeader]}>Image Details</Text>
            <Pressable>



                <Image style={[styles.imageDetailsIcon]} source={require("../../assets/download.png")}
                ></Image>
            </Pressable>
        </View>
    )
}