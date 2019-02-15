import * as ajax from 'zk-tookit/utils/promise-ajax';
import BaseService from '../base-service';

export default class MusicService extends BaseService {
    constructor(...args) {
        super(...args);
        this.url = 'http://music.163.com/api/playlist/detail?id=3778678&updateTime=-1';
    }

    getMusicList(params, options) {
        const ajaxToken = ajax.get(`${this.url}`, params, options);
        this.resource.push(ajaxToken);
        return ajaxToken;
    }
}

