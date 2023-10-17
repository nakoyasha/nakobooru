import { useColorScheme, RefreshControl, Text, ActivityIndicator, View, FlatList } from "react-native";
import { styles } from "../etc/Styles";
import { APIImage } from "./APIImage";
import { DanbooruAPI } from "../API/DanbooruAPI";

import { useCallback, useState, useEffect } from "react";
import { ImageData, SearchResults } from "../API/APIImpl";
import { ShiggyLoader } from "./ShiggyLoader";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Pager } from "./Pager/Pager";

import { Searchbar, TextInput } from "react-native-paper"

import 'react-native-get-random-values';
import { v4 as v4 } from 'uuid';
import { R34API } from "../API/R34API";

const TEXT_CHANGE_TIMEOUT = 10

export function ImagesList() {
    const api = new DanbooruAPI()
    const [isLoading, setIsLoading] = useState(true)
    const [images, setImages] = useState([] as SearchResults)
    const [refreshing, setRefreshing] = useState(false);

    const colorScheme = useColorScheme()
    const backgroundColor = (colorScheme == "dark" && Colors.darker || Colors.lighter)

    const [currentPage, setCurrentPage] = useState(1)
    const [currentSearch, setCurrentSearch] = useState("")
    const [isSearchFocused, setSearchFocused] = useState(false)

    const getImages = async (clearOld?: boolean) => {
        setIsLoading(true)
        const newImages = await api.getPosts(currentPage, currentSearch.split(" "))

        if (clearOld == true) {
            setImages([...newImages] as SearchResults)
        } else {
            setImages([...images, ...newImages] as SearchResults)
        }

        setIsLoading(false)
    }

    const onPageChange = useEffect(() => {
        getImages()
    }, [currentPage])

    // Refresh behaviour
    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await getImages(true)
        setRefreshing(false);
    }, []);

    // load images (initial)
    const initialLoad = useEffect(() => {
        getImages()
    }, [])

    const searchChanged = useEffect(() => {
        setCurrentPage(1)
        getImages(true)
    }, [isSearchFocused])

    const listSearch = <Searchbar
        placeholder="Search for images.."
        loading={isLoading}
        value={currentSearch}
        onChangeText={(text) => { setSearchFocused(true); setCurrentSearch(text) }}
        onBlur={() => {
            setSearchFocused(false)
        }}
        style={[{ width: "80%", margin: 15 }]}
    />

    return (
        <View>
            {
                isLoading == true && (
                    <View style={[{ position: "absolute", zIndex: 5, backgroundColor: (backgroundColor), width: "100%" }, styles.centerDiv]}>
                        <ShiggyLoader />
                        <Text style={[styles.center]}>Loading images...</Text>
                    </View>
                )
            }

            <FlatList
                data={images}
                ListHeaderComponent={listSearch}
                scrollEnabled={true}
                contentContainerStyle={[styles.imagesList]}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                keyExtractor={({ }) => {
                    const key = v4().toString()
                    return key
                }}
                renderItem={({ item }) => {
                    return (<APIImage ImageData={item as ImageData} />)
                }}
                onEndReached={() => {
                    if (isLoading) {
                        console.log("Data was loading when the end was reached; safe to assume its emptied")
                        return;
                    }

                    if (images == [] as SearchResults) {
                        console.log("Data was missing when the end was reached; safe to assume its loading")
                        return;
                    }
                    setCurrentPage(currentPage + 1)

                }}
                numColumns={2}
            />

        </View>
    )


}   