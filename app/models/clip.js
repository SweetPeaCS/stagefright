import Model, { attr, belongsTo } from '@ember-data/model';

export default class ClipModel extends Model {
    @attr slug;
    @attr title;
    @attr broadcaster;
    @attr broadcasterLogo;
    @attr date;
    @attr duration;
    @attr game;
    @attr language;
    @attr thumbnails
    @attr views;

    @attr vodOffset;
    @attr vodUrl;

    get url() {
        return `https://clips.twitch.tv/${this.slug}`;
    }

    get embed() {
        return `https://clips.twitch.tv/embed?clip=${this.slug}&tt_medium=clips_api&tt_content=embed&parent=crowned.io&autoplay=true`
    }

    get isCSGO() {
        return (this.game === "Counter-Strike: Global Offensive" ? true : false);
    }

    get localeDate() {
        return new Date(this.date).toLocaleDateString('en-gb',
        {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
    }

    @belongsTo('vod') vod;    
}
