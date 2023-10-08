import axios from "axios";
import { APIImpl, ImageData, SearchResults } from "./APIImpl";

export class DanbooruAPI implements APIImpl {
    apiURL = "https://danbooru.donmai.us/"
    async getImage(imageId: number): Promise<ImageData> {
        const { data, status } = await axios.get<ImageData>(
            `${this.apiURL}/posts/${imageId}.json`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        if (status == 200) {
            return data
        } else {
            throw new Error(`Failed to fetch image data, server returned ${status}`)
        }
    }

    async getPosts(page?: number): Promise<SearchResults> {
        if (page == null) {
            page = 1
        }

        const { data, status } = await axios.get<SearchResults>(
            `${this.apiURL}/posts.json?page=${page}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        if (status == 200) {
            return data
        } else {
            throw new Error(`Failed to fetch image data, server returned ${status}`)
        }
    }

    async searchImage(tags: string[]): Promise<SearchResults> {
        return []
    }
}
