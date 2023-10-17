export const addFavourite = (index: number) => {
    return {
        type: 'FAVOURITE_ADDED',
        payload: {
            index: index
        }
    };
};

export const removeFavourite = (index: number) => {
    return {
        type: 'FAVOURITE_REMOVED',
        index: index
    }
};