import RESTAPIAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAPIAdapter {
    host = 'http://192.168.178.33:8500';
    namespace = 'api';
}
