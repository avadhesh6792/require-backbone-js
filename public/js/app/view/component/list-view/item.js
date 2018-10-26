define(['app/model/user', 'text!app/view/component/list-view/item.html'], function(userModel, itemHtml){
    let user = new userModel();
    let itemView = Backbone.View.extend({
        initialize: function(attrs){
            this.index = attrs.index;
        },
        events: {
            'click .delete-item': 'deleteItem',
            'click .edit-item': 'editItem',
            'click .update-item': 'updateItem'
        },
        model: user,
        tagName: 'tr',
        template: _.template(itemHtml),
        updateItem: function(){
            let fname = $('.item-fname-edit').val();
            this.model.set('fname', fname);
        },
        editItem: function(){
            $('.edit-item').hide();
            $('.delete-item').hide();

            this.$('.update-item').show();
            this.$('.cancel-item').show();
            let fname = this.$('.item-fname').text();
            this.$('.item-fname').html(`<input type="text" class="form-control item-fname-edit" value="${fname}" />`);
        },
        deleteItem: function(){
            this.model.destroy();
            this.$el.hide(250);
        },
        render: function(){
            this.$el.append(this.template({...this.model.toJSON(), index: this.index}));
            return this;
        }
    });
    return itemView;
});