define(['backbone', 'text!app/view/support/support.html', 'app/view/header/header', 'app/view/footer/footer'], function(Backbone, supportHtml, headerView, footerView){
    let supportView = Backbone.View.extend({
        initialize: function(){
            new headerView({ el: '#header'});
            this.render();
            new footerView({ el: '#footer'});
        },
        template: _.template(supportHtml),
        render: function(){
            this.$el.html(this.template);
        }
    });
    return supportView;
});