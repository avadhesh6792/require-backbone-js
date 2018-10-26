define(['backbone', 'text!app/view/header/header.html'], function(Backbone, headerHtml){
    let headerView = Backbone.View.extend({
        initialize: function(){
            this.render();
        },
        template: _.template(headerHtml),
        render: function(){
            let headerData = {
                companyName: 'Sopra & Steria'
            };
            this.$el.html(this.template({ ...headerData }));
        }
    });
    return headerView;
});