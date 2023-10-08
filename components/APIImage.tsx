import { RefreshControl, Text, View, Image, Pressable, Alert, ActivityIndicator } from "react-native";
import { styles } from "../etc/Styles";
import { useState } from "react";
import { ImageDetails } from "./ImageDetails/ImageDetails";
import { ImageData } from "../API/APIImpl";


export type APIImage = {
    Source: string,
    Author: string,
}

export function APIImage(Props: any) {
    const imageData = Props.ImageData as ImageData
    var goldOnlyPost = false

    if (imageData.large_file_url == undefined) {
        goldOnlyPost = true
    }

    // jank to block it from loading
    const [isLoading, setIsLoading] = useState(!goldOnlyPost)
    const [isFailed, setIsFailed] = useState(false)

    const [isModalOpen, setModalOpen] = useState(false)

    return (
        <Pressable onPress={() => {
            if (isLoading == false || isFailed == true) {
                setModalOpen(true)
            }
        }} style={[styles.apiImage]}>
            {
                isFailed && <View style={[styles.loadingDim]}>
                    <Text style={[styles.loadingDim]}>🚫</Text>
                </View>
            }

            {
                isLoading && <View style={[styles.loadingDim]}>
                    <ActivityIndicator style={[styles.loadingDim]} />
                </View>
            }
            <ImageDetails ImageData={imageData} IsModalOpen={isModalOpen} onDismiss={() => {
                setModalOpen(false)
            }} />

            {
                goldOnlyPost == true && (
                    <View style={[styles.centerDiv, styles.loadingDim]}>
                        <Text style={[{ zIndex: 50 }]}>Gold-only post. Click to redirect.</Text>
                    </View>
                ) || (
                    <Image style={[{ position: "absolute", zIndex: 0 }, styles.apiImageImage]} source=
                        {
                            { uri: imageData.large_file_url }
                        }
                        onLoad={() => {
                            setIsLoading(false)
                        }}
                        onError={() => {
                            setIsLoading(false)
                            setIsFailed(true)
                        }}
                    ></Image>

                )
            }
        </Pressable>
    )
}