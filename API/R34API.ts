import { DanbooruAPI } from "./DanbooruAPI";

export class R34API extends DanbooruAPI {
    override apiURL = "https://api.rule34.xxx"
    override postsEndpoint = "/index.php"
}