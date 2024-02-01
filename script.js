import {login} from './login.js';
import {posts} from './posts.js';

(async () => {
    await login();
    await posts();
})();