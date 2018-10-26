define(['backbone', 'text!app/view/footer/footer.html'], function(Backbone, footerHtml){
    let footerView = Backbone.View.extend({
        initialize: function(){
            this.render();
        },
        template: _.template(footerHtml),
        render: function(){
            let footerData = {
                ftitle: 'FOOTER'
            };
            this.$el.html(this.template({ ...footerData }));
        }
    });
    return footerView;
});