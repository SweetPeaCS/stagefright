import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { debounce } from '@ember/runloop';

export default class AnalyseController extends Controller {

    @tracked filteredVods = this.model.vods;
    @tracked filteredClips = this.model.clips;
    
    @tracked isFiltersOpen = true;
    @tracked isFiltersEnabled = true;
    @tracked filterByGame = [];
    @tracked filterByYear = [];
    @tracked searchQuery = '';

    // Filters
    get gameList() {
        return this.model.clips.uniqBy('game').getEach('game');
    }

    get yearList() {
        let years = new Set();
        
        const uniques = this.model.clips.uniqBy('date');
        for(let items of uniques) {
            years.add(new Date(items.date).getFullYear());
        }
        
        return [...years].sort(); // can't sort() a set
    }

    get filteredModels() {
        return {
            clips: this.filteredClips,
            vods: this.filteredVods
        }
    }

    @action
    updateSearch(event) {
        this.set('searchQuery', event.target.value.toLowerCase());
    
        const context = { name: "debounce search input" }
        debounce(
            this,
            function() {
                this.updateFilteredClipsModel();
                this.updatefilterVodsModel();
            },
            250
        );
    }
    
    @action
    removeYearFilter(year) {
        this.filterByYear = this.filterByYear.without(year);
    }
    @action
    addYearFilter(year) {
        this.filterByYear.pushObject(year);
    }
    @action 
    removeGameFilter(game) {
        this.filterByGame = this.filterByGame.without(game);
    }
    @action 
    addGameFilter(game) {
        this.filterByGame.pushObject(game);
    }

    @action
    removeFilter(item, type) {
        switch(type) {
            case "game":
                this.removeGameFilter(item);
                break;
            case "year":
                this.removeYearFilter(item);
                break;
        }

        this.updateFilteredClipsModel();
        this.updatefilterVodsModel();
    }
    @action
    addFilter(item, type) {
        switch(type) {
            case "game":
                this.addGameFilter(item);
                break;
            case "year":
                this.addYearFilter(item);
                break;
        }

        this.updateFilteredClipsModel();
        this.updatefilterVodsModel();
    }

    @action
    updateFilteredClipsModel() {
        this.filteredClips = this.model.clips
        // Apply year filter
        .filter(clip => {
            if(this.filterByYear.length > 0) {
                return this.filterByYear.includes(new Date(clip.date).getFullYear());
            } else {
                return clip;
            }
        })
        // Apply game filter
        .filter(clip => {
            if(this.filterByGame.length > 0) {
                return this.filterByGame.includes(clip.game);
            } else {
                return clip;
            }
        })
        // Apply word filter
        .filter(clip => clip.title.toLowerCase().includes(this.searchQuery) || clip.slug.includes(this.searchQuery) || clip.broadcaster.includes(this.searchQuery))
    }

    @action
    updatefilterVodsModel() {
        this.filteredVods = this.model.vods
        .filter(vod => {
            if(this.filterByYear.length > 0) {
                return this.filterByYear.includes(new Date(vod.date).getFullYear());
            } else {
                return vod;
            }
        })
        .filter(vod => {
            if(this.filterByGame.length > 0) {
                return this.filterByGame.includes(vod.game);
            } else {
                return vod;
            }
        })
        .filter(vod => vod.title.toLowerCase().includes(this.searchQuery))
    }
    @action   
    async addTag(item, tag, type) {
        // Type needs to be passed into component
        const record = this.store.findRecord(type, item.get('id'))
            .then(record => {
                record.tags.addObject(tag);
                record.save(); 
            });
        }
    @action   
    async removeTag(item, tag, type) {
        this.store.findRecord(type, item.get('id'))
            .then(store => {
                store.tags = store.tags.removeObject(tag);
                store.save();
            })
    }

}
