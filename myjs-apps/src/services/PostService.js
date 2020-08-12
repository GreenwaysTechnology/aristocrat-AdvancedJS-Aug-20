import { POSTS } from '../data/PostData';

class PostService {
    constructor() {

    }
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, POSTS)
        });
    }
}

export default PostService;