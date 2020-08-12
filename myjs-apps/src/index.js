import PostService from './services/PostService';


async function startApp() {
    let service = new PostService();
    let posts = await service.findAll();
    console.log(posts)
}
startApp();