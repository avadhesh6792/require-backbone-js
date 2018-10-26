define(['text!app/view/home/home.html', 'app/view/header/header', 'app/view/footer/footer', 'app/model/user', 'app/view/component/list-view/list', 'app/collection/users'],
 function(homeHtml, headerView, footerView, userModel, listView, userCollection){
    
    let homeView = Backbone.View.extend({
        initialize: function(){
            new headerView({ el: '#header'});
            this.render();
            new footerView({ el: '#footer'});
        },
        collection: new userCollection(),
        template: _.template(homeHtml),
        render: function(){
            this.$el.html(this.template());
            this.$('.users-list').html(new listView({collection: this.collection, enableAdd: true}).render().el);
            return this;
        }
    });
    return homeView;
});