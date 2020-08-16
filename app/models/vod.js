import Model, { attr, hasMany } from '@ember-data/model';

export default class VodModel extends Model {
    @attr vodId;
    @attr views;
    @attr title;
    @attr thumbnails;
    @attr game;
    @attr length;
    @attr recordDate;

    get embed() {
        return `https://player.twitch.tv/?${this.vodId}&tt_medium=clips_api&tt_content=embed&parent=crowned.io&autoplay=true`
    }

    get isCSGO() {
        return (this.game === "Counter-Strike: Global Offensive" ? true : false);
    }

    get date() {
        return new Date(this.recordDate).toLocaleDateString('en-gb',
        {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
    }

    get url() {
        return `https://www.twitch.tv/twitch/v/${this.vodId}`
    }

    @hasMany('clip') clips;
    @hasMany('category') tags;
}
