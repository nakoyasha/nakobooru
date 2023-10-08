import { ScrollView, StatusBar, Text, View, Modal, Image } from "react-native"
import { ImageData } from "../../API/APIImpl";
import { styles } from "../../etc/Styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Topbar } from "./Topbar";
import { TagList } from "./Tags/TagList";


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

    // const generalTags = generalTagsString.split(" ")
    // const copyrightTags = copyrightTagsString.split(" ")
    // var characterTags = characterTagsString.split(" ")
    // const artistTags = artistTagsString.split(" ")
    // const metaTags = metaTagsString.split(" ")

    const tags = tagsString.split(" ")


    // clear out empty tags

    tags.forEach((tag, index) => {
        if (tag == "") {
            console.log("Removed tag because it was empty")
            tags.splice(index, 1)
        }
    });

    // // FIXME: hacky way to avoid rendering emtpy tags

    // if (characterTags.length >= 1) {
    //     if (characterTags[0] == "") {
    //         characterTags = []
    //     }
    // }

    return (
        <View style={[styles.centerDiv]}>
            <Modal transparent={true} statusBarTranslucent={true} onDismiss={onDismiss} onRequestClose={onDismiss} animationType="slide" visible={IsModalOpen} >
                <View style={{ backgroundColor: Colors.darker, width: "100%", height: "100%", alignItems: "center" }}>
                    <StatusBar
                        translucent={true}
                        backgroundColor="rgba(0,0,0,0)"
                    />

                    <Topbar />
                    <Image style={[[styles.imageDetails], { aspectRatio: imageAspectRatio, width: "100%", height: undefined }]} source=
                        {
                            { uri: ImageData.large_file_url }
                        }
                    />

                    <Text style={[styles.tagListHeader]}>Tags</Text>

                    <TagList tags={tags} columns={1} horizontal={false} />


                </View>
            </Modal>
        </View>
    )
}