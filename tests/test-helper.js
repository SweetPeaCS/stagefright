import Application from 'stage-fright-frontend/app';
import config from 'stage-fright-frontend/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
