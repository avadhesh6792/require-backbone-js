define(['app/model/user'], function(userModel){
    let userCollection = Backbone.Collection.extend({
        model: userModel
    });
    return userCollection;
});