export type ImageVariant = {
    type: string,
    url: string,
    width: number,
    height: number,
    file_ext: string,

}
export type ImageVariants = [ImageVariant?]

export type ImageData = {
    id: number,
    source: string,
    author: string,
    created_at: string,
    media_asset: {
        variants: ImageVariants,
        image_width: number,
        image_height: number,
    },
    isTestImage: boolean | undefined,
    large_file_url: string,
    preview_file_url: string
    tag_string_general: string,
    tag_string_meta: string,
    tag_string_character: string,
    tag_string_copyright: string,
    tag_string_artist: string,
}

export type SearchResults = [ImageData?]

export interface APIImpl {
    apiURL: string,
    getImage(imageId: number): Promise<ImageData>,
    getPosts(page?: number, search?: string[]): Promise<SearchResults>,
    searchImage(tags: string[]): Promise<SearchResults>
}