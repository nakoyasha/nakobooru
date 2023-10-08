
import { View, Text } from "react-native"
import { styles } from "../../../etc/Styles"

export function Tag(props: {
    tag: string,
}) {
    return (
        <View style={[styles.tagButton]}>
            <Text>{props.tag}</Text>
        </View>
    )
}