define(['app/view/component/list-view/item', 'text!app/view/component/list-view/list.html', 'app/model/user', 'app/view/component/alert/alert'],
 function(itemView, listHtml, userModel, alertView){
    let listView = Backbone.View.extend({
        initialize: function(attrs){
            this.enableAdd = attrs.enableAdd !== undefined ? attrs.enableAdd : true;
            this.collection.on('destroy', this.destroy, this);
            this.collection.on('change', this.change, this);
            this.collection.on('add', this.add, this);
        },
        events: {
            'click .cancel-item': 'cancelItem',
            'click .add-user': 'addUser'
        },
        template: _.template(listHtml),
        tagName: 'table',
        className: 'table table-bordered',
        addUser: function(){
            let fname = this.$('.user-fname').val();
            let lname = this.$('.user-lname').val();
            let address = this.$('.user-address').val();
            let user = new userModel({fname, lname, address});
            this.collection.add([user]);
        },
        add: function(e){
            let { fname, lname, address } = e.toJSON();
            let message = '';
            let type = '';
            if(fname === ''){
                message = 'First name is required';
                type = 'danger';
            } else if (lname === ''){
                message = 'Last name is required';
                type = 'danger';
            } else if(address === ''){
                message = 'Address name is required';
                type = 'danger';
            } else {
                message = 'Data was added successfully';
                type = 'success';
                this.render();
            }
            new alertView({type, message}).render();
        },
        cancelItem: function(){
            this.render();
        },
        change: function(e){
            this.render();
        },
        destroy: function(){
            setTimeout(() => {
                this.render();
            }, 250);
        },
        render: function(){
            this.$el.html(this.template({enableAdd: this.enableAdd}));
            if(this.collection.length === 0){
                this.$('tbody').append('<td colspan="5">No Item Found</td>');
            } else {
                _.each(this.collection.models, (model, index) => {
                    this.$('tbody').append( new itemView({model, index}).render().$el);
                });
            }
            return this;
        }
    });
    return listView;
});