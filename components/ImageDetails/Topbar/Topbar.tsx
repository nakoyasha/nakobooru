import { Share } from "react-native"
import { styles } from "../../../etc/Styles"
import { useState } from "react"

import { Appbar } from 'react-native-paper';
import { InAppBrowser } from "react-native-inappbrowser-reborn"
import { ImageData } from "../../../API/APIImpl";
import RNFetchBlob from 'rn-fetch-blob';

const downloadFile = (filePath: string, outputPath: string, onComplete?: () => void, onError?: () => void) => {
    RNFetchBlob.config({
        fileCache: true,
        addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: outputPath,
            description: 'Downloading artwork...',
        },
    })
        .fetch('GET', filePath, {
            // Add any headers if needed
        })
        .then(onComplete)
        .catch(onError)
};



export function Topbar(props: {
    onBack: () => {},
    imageData: ImageData
    onComplete?: () => void,
    onFailure?: () => void,
}) {
    const url = `https://danbooru.donmai.us/posts/${props.imageData.id}`
    const downloadUrl = props.imageData.large_file_url
    const splitUrl = downloadUrl.split("/")

    const fileName = splitUrl[splitUrl.length - 1]
    //const dir = FileSystem.documentDirectory as string

    return (
        <Appbar.Header style={[styles.imageDetailsTopBar]}>
            <Appbar.BackAction color="white" onPress={props.onBack} />
            <Appbar.Content title="Image Details" titleStyle={[styles.imageDetailsHeader]} />
            <Appbar.Action icon="download" color="white" onPress={() => {
                downloadFile(downloadUrl, RNFetchBlob.fs.dirs.DownloadDir + "/" + fileName, props.onComplete, props.onFailure)
            }} />
            <Appbar.Action icon="web" color="white" onPress={async () => {
                const isAvailable = await InAppBrowser.isAvailable()
                if (isAvailable) {
                    InAppBrowser.open(url, {
                        // Android Properties
                        showTitle: true,
                        secondaryToolbarColor: 'black',
                        enableUrlBarHiding: true,
                        enableDefaultShare: true,
                        forceCloseOnRedirection: true,
                    })
                }
            }
            } />
            <Appbar.Action icon="share-variant" color="white" onPress={() => {
                Share.share({
                    message: url,
                })
            }} />

            <Appbar.Action icon="heart" color="white" onPress={() => {
                console.log("Favorite")
            }} />
        </Appbar.Header>
    )
}