import { RefreshControl, Text, ActivityIndicator, View, FlatList } from "react-native";
import { styles } from "../etc/Styles";
import { APIImage } from "./APIImage";
import { DanbooruAPI } from "../API/DanbooruAPI";

import { useCallback, useState, useEffect } from "react";
import { ImageData, SearchResults } from "../API/APIImpl";
import { ShiggyLoader } from "./ShiggyLoader";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Pager } from "./Pager/Pager";



// const placeholder: ImageData = {
//     source: "http://app.requestly.io/delay/5000/https://content2.rozetka.com.ua/goods/images/big/288101596.jpg",
//     author: "IKEA",
//     created_at: "hi",
//     media_asset: {
//         variants: [],
//         image_width: 1280,
//         image_height: 720,
//     },
//     large_file_url: "http://app.requestly.io/delay/5000/https://content2.rozetka.com.ua/goods/images/big/288101596.jpg",
//     preview_file_url: "http://app.requestly.io/delay/5000/https://content2.rozetka.com.ua/goods/images/big/288101596.jpg",
//     isTestImage: true,
// }

export function ImagesList() {
    const api = new DanbooruAPI()
    const [isLoading, setIsLoading] = useState(true)
    const [images, setImages] = useState([] as SearchResults)
    const [refreshing, setRefreshing] = useState(false);

    const [currentPage, setCurrentPage] = useState(1)

    var getImages = () => { };
    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await getImages()
        setRefreshing(false);
    }, []);

    useEffect(() => {
        setRefreshing(true);
        getImages()
        setRefreshing(false)
    }, [currentPage])

    useEffect(() => {

        async function _getImages() {
            setIsLoading(true)
            const images = await api.getPosts(currentPage)
            setImages([])
            setImages(images)

            setIsLoading(false)
        }
        getImages = _getImages

        getImages()
    }, [])

    return (
        <View>
            {
                isLoading == true && (
                    <View style={[{ position: "absolute", zIndex: 5, backgroundColor: Colors.darker, width: "100%" }, styles.centerDiv]}>
                        <ShiggyLoader />
                        <Text style={[styles.center]}>Loading images...</Text>
                    </View>
                )
            }
            <Pager
                currentPage={currentPage}
                nextPage={() => {
                    setCurrentPage(currentPage + 1)
                }}
                previousPage={() => {
                    setCurrentPage(currentPage - 1)
                }}
            />

            <FlatList
                data={images}

                scrollEnabled={true}
                contentContainerStyle={[styles.imagesList]}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                renderItem={({ item }) => (
                    <APIImage ImageData={item as ImageData} />
                )}
                numColumns={2}
            />

        </View>
    )


}   