define(['backbone', 'text!app/view/features/features.html', 'app/view/header/header', 'app/view/footer/footer'], function(Backbone, featuresHtml, headerView, footerView){
    let featuresView = Backbone.View.extend({
        initialize: function(){
            new headerView({ el: '#header'});
            this.render();
            new footerView({ el: '#footer'});
        },
        template: _.template(featuresHtml),
        render: function(){
            this.$el.html(this.template());
        }
    });
    return featuresView;
});