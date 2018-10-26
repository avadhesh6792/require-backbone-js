define(['backbone', 'text!app/view/enterprise/enterprise.html', 'app/view/header/header', 'app/view/footer/footer'], function(Backbone, enterpriseHtml, headerView, footerView){
    let enterpriseView = Backbone.View.extend({
        initialize: function(){
            new headerView({ el: '#header'});
            this.render();
            new footerView({ el: '#footer'});
        },
        template: _.template(enterpriseHtml),
        render: function(){
            this.$el.html(this.template);
        }
    });
    return enterpriseView;
});