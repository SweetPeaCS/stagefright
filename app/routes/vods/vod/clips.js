import Route from '@ember/routing/route';

export default class VodsVodClipsRoute extends Route {
    async model(params) {

        const { vod_id } = this.paramsFor('vods.vod');

        return await this.store.query('clip', { 
            vodId: vod_id
        });
    }
}
