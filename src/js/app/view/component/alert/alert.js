define(['text!app/view/component/alert/alert.html'],
 function(alertHtml){
    let alertView = Backbone.View.extend({
        initialize: function(attrs){
            this.type = attrs.type;
            this.message = attrs.message;
        },
        template: _.template(alertHtml),
        el: '#alert',
        render: function(){
            this.$el.html(this.template({message: this.message, type: this.type}));
            return this;
        }
    });
    return alertView;
});