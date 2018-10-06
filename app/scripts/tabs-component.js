class TabsComponent {
    constructor(options = {}) {
        this.tabs=[];
        this.$el = null;
        this.$target = options.$target;

        this.addTab = function(title, content){
            this.tabs.push({title, content})
        };
        this.build = function(){

        }
    }
}

TabsComponent.prototype.addTab = function(){

};
TabsComponent.prototype.build = function (){

};