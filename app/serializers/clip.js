import RESTAPISerializer from '@ember-data/serializer/rest';

export default class ClipSerializer extends RESTAPISerializer {
    attrs = {
        vod: 'vodId'
    };
}
