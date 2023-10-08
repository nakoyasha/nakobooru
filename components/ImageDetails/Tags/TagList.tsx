import { View, FlatList } from "react-native"
import { styles } from "../../../etc/Styles"
import { Tag } from "./Tag"

export function TagList(Props: {
    tags: string[],
    columns?: number
    horizontal?: boolean
}) {
    if (Props.columns == null && Props.horizontal != true) {
        Props.columns = 4
    }

    return (
        <View style={[styles.tagList]}>
            <FlatList
                data={Props.tags}
                scrollEnabled={true}
                numColumns={Props.columns}
                horizontal={Props.horizontal}
                // contentContainerStyle={[styles.tagList]}
                renderItem={({ item }) => (
                    <Tag tag={item} />
                )}

            >
            </FlatList>
        </View >
    )
}