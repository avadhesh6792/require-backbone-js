define(['backbone', 'text!app/view/signup/signup.html', 'app/view/header/header', 'app/view/footer/footer'], function(Backbone, signupHtml, headerView, footerView){
    let signView = Backbone.View.extend({
        initialize: function(){
            new headerView({ el: '#header'});
            this.render();
            new footerView({ el: '#footer'});
        },
        template: _.template(signupHtml),
        render: function(){
            this.$el.html(this.template);
        }
    });
    return signView;
});