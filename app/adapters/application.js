import RESTAPIAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAPIAdapter {
    host = 'http://localhost:8500';
    namespace = 'api';
}
