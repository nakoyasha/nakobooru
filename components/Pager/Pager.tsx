import { View, Text, Pressable } from "react-native"
import { PageButton } from "./PageButton"
import { styles } from "../../etc/Styles"

export function Pager(props: {
    currentPage: number,
    nextPage?: () => void,
    previousPage?: () => void,
}) {
    return (
        <View style={[styles.pager]}>
            <PageButton text="<" onClick={props.previousPage}></PageButton>
            <Text style={[styles.pagerText]}>{props.currentPage}</Text>
            <PageButton text=">" onClick={props.nextPage}></PageButton>
        </View>
    )
}