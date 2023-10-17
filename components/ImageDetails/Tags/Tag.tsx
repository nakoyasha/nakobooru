
import { View, Text } from "react-native"
import { Chip } from "react-native-paper"
import { styles } from "../../../etc/Styles"

export function Tag(props: {
    tag: string,
}) {
    return (
        <Chip style={[styles.tagButton]} icon="information">{props.tag}</Chip>
    )
}