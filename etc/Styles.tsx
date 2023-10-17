import {
    StyleSheet,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    apiImage: {
        backgroundColor: Colors.darker,
        width: 190,
        height: 190,
        margin: 5,
        justifyContent: "center",
        objectFit: "contain"
        //paddingLeft: 5,
    },
    fullScreen: {
        width: "100%",
        height: "100%",

    },
    loadingDim: {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.5)',
        textAlign: "center",
    },
    apiImageImage: {
        flex: 2,
        height: "100%",
        width: "100%",
    },
    apiImageText: {
        fontSize: 1,
    },
    appCenter: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        justifyContent: "center",
    },
    imagesList: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    loadingDiv: {
        backgroundColor: "rgba(0,0,0,0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    centerDiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        justifyContent: "center",
    },

    imageDetailsTopBar: {
        display: "flex",
        zIndex: 2,
        flexDirection: "row",
        paddingLeft: 5,
        paddingTop: 10,
        position: "absolute",
        width: "100%",
        backgroundColor: 'rgba(0,0,0,.6 )',
        alignItems: "flex-start",
        textAlign: "center",
        color: "white"
    },
    imageDetails: {
        flexGrow: 1,
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        alignItems: "center"
    },
    pager: {
        backgroundColor: "rgba(0,0,0, 0)",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: undefined,
        justifyContent: "center",
        gap: 5,
    },
    pagerText: {
        fontFamily: "Roboto",
        fontWeight: "900",
        fontSize: 21,
    },
    pageButton: {
        aspectRatio: 1,
        backgroundColor: "rgba(210, 210, 210, .1)",
        borderRadius: 5,
        paddingLeft: 5,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        paddingRight: 5,
    },

    tagButton: {
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
    tagButtonText: {
        color: "white"
    },

    tagListScroller: {
    },
    tagList: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        gap: 10,

    },

    tagListHeader: {
        fontFamily: "Roboto",
        fontWeight: "900",
        textAlign: "left",
        alignItems: "flex-start"
    },
    imageDetailsHeader: {
        color: "white",
        fontFamily: "Roboto",
        fontWeight: "900",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontSize: 21,
        paddingTop: 18,
        paddingLeft: 5,
        paddingRight: 15,
        paddingBottom: 10,
    },
    imageDetailsIcon: {
        aspectRatio: 1,
        width: 32,
        height: 32,
        objectFit: "contain"
    },
    center: {
        textAlign: "center",
    },
    fab: {
        zIndex: 5,
        position: 'absolute',
        margin: 16,
        right: 10,
        bottom: 10,
    },
    icon: {
        aspectRatio: 1,
        width: 32,
        height: 32,
        objectFit: "contain"
    },
});