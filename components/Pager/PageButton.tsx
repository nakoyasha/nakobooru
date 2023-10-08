import { Text, Pressable } from "react-native"
import { styles } from "../../etc/Styles"

export function PageButton(props: {
    text: string,
    onClick?: () => void,
}) {
    return (
        <Pressable onPress={props.onClick} style={[styles.pageButton]}>
            <Text>{props.text}</Text>
        </Pressable>
    )
}