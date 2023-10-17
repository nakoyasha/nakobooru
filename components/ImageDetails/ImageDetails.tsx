import { Pressable, View, Text, Modal, Image } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { ImageData } from "../../API/APIImpl";
import { styles } from "../../etc/Styles";
import { Topbar } from "./Topbar/Topbar";
import { TagList } from "./Tags/TagList";
import { Snackbar, FAB } from "react-native-paper"
import { useState } from "react";

import ImageView from "react-native-image-viewing"

export function ImageDetails(Props: any) {
    const ImageData: ImageData = Props.ImageData
    const IsModalOpen: boolean = Props.IsModalOpen

    const onDismiss = Props.onDismiss

    const imageAspectRatio = ImageData.media_asset.image_width / ImageData.media_asset.image_height
    const generalTagsString = ImageData.tag_string_general
    const copyrightTagsString = ImageData.tag_string_copyright
    const characterTagsString = ImageData.tag_string_character
    const artistTagsString = ImageData.tag_string_artist
    const metaTagsString = ImageData.tag_string_meta

    const tagsString = artistTagsString + " " + copyrightTagsString + " " + characterTagsString + " " + generalTagsString + " " + metaTagsString

    const [isImageViewOpen, setImageViewOpen] = useState(false)
    const [isSuccessSnackVisible, setSuccessSnackVisible] = useState(false)
    const [isFailureSnackVisible, setFailureSnackVisible] = useState(false)

    const onDismissSuccessSnack = () => setSuccessSnackVisible(false);
    const onDismissFailureSnack = () => setFailureSnackVisible(false);

    // const generalTags = generalTagsString.split(" ")
    // const copyrightTags = copyrightTagsString.split(" ")
    // var characterTags = characterTagsString.split(" ")
    // const artistTags = artistTagsString.split(" ")
    // const metaTags = metaTagsString.split(" ")

    const tags = tagsString.split(" ")


    // clear out empty tags

    tags.forEach((tag, index) => {
        if (tag == "") {
            tags.splice(index, 1)
        }
    });

    return (
        <View style={[styles.centerDiv, styles.imageDetails]} >
            <ImageView
                images={[{ uri: ImageData.large_file_url }]}
                imageIndex={0}
                visible={isImageViewOpen}
                presentationStyle="overFullScreen"
                onRequestClose={() => setImageViewOpen(false)}
            />

            <Modal transparent={true} statusBarTranslucent={true} onDismiss={onDismiss} onRequestClose={onDismiss} animationType="slide" visible={IsModalOpen} >
                <Topbar onBack={onDismiss} imageData={ImageData} />

                <Snackbar
                    visible={isSuccessSnackVisible}
                    onDismiss={onDismissSuccessSnack}
                    action={{
                        label: 'Close',
                        onPress: () => {
                            onDismissSuccessSnack()
                        },
                    }}>
                    Successfully downloaded image!
                </Snackbar>
                <Snackbar
                    visible={isFailureSnackVisible}
                    onDismiss={onDismissFailureSnack}
                    action={{
                        label: 'Close',
                        onPress: () => {
                            onDismissFailureSnack()
                        },
                    }}>
                    Failed to download image (API/Network Error?)
                </Snackbar>
                <View style={[styles.imageDetails]}>
                    <StatusBar style="auto" hidden={Props.IsModalOpen} />
                    <Pressable style={[[styles.imageDetails], { aspectRatio: imageAspectRatio, width: "100%", height: undefined }]} onPress={() => {
                        setImageViewOpen(true)
                    }} >
                        <Image style={[[styles.imageDetails], { aspectRatio: imageAspectRatio, width: "100%", height: undefined }]} source=
                            {
                                { uri: ImageData.large_file_url }
                            }
                        />
                    </Pressable>
                    <Text style={[styles.tagListHeader]}>Tags</Text>
                    <FAB
                        icon="plus"
                        style={styles.fab}
                        onPress={() => console.log('Pressed')}
                    />
                    <TagList tags={tags} columns={1} horizontal={false} />
                </View>
            </Modal>
        </View >
    )
}