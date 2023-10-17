import axios from "axios";
import { APIImpl, ImageData, SearchResults } from "./APIImpl";

const REGULAR_API = "https://danbooru.donmai.us/"
const TEST_API = "https://testbooru.donmai.us"

export class DanbooruAPI implements APIImpl {
    apiURL = REGULAR_API
    postsEndpoint = "/posts.json"
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

    async getPosts(page?: number, search?: string[]): Promise<SearchResults> {
        if (page == null) {
            page = 1
        }

        if (search == null) {
            search = []
        }

        const tags = search.join("+")
        var url = `${this.apiURL}${this.postsEndpoint}?tags=${tags}&page=${page}`

        url = url.replaceAll(" ", "_")
        url = url.replaceAll(",", "")
        console.log(url)

        const { data, status } = await axios.get<SearchResults>(
            url,
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
