define(['backbone', 'text!app/view/pricing/pricing.html', 'app/view/header/header', 'app/view/footer/footer'], function(Backbone, pricingHtml, headerView, footerView){
    let pricingView = Backbone.View.extend({
        initialize: function(){
            new headerView({ el: '#header'});
            this.render();
            new footerView({ el: '#footer'});
        },
        template: _.template(pricingHtml),
        render: function(){
            this.$el.html(this.template);
        }
    });
    return pricingView;
});