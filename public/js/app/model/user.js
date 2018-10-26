define(['backbone'], function(){
    let userModel = Backbone.Model.extend({
        defaults: {
            fname: 'd_fname',
            lname: 'd_lname',
            address: 'd_address'
        }
    });
    return userModel;
})