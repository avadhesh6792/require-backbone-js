define(['backbone', 'require', 'bootstrapJs'], function(Backbone, require){

    let AppRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'home': 'home',
            'features': 'features',
            'enterprise': 'enterprise',
            'support': 'support',
            'pricing': 'pricing',
            'signup': 'signup'
        },
        home: function(){
            $(document).attr('title', 'Home');
            require(['app/view/home/home'], function(homeView){
                let userModel = Backbone.Model.extend({});
                let user1 = new userModel();
                user1.set('fname', 'Avadhesh');
                user1.set('lname', 'Bhatt');
                user1.set('address', 'Noida');
                
                let user2 = new userModel();
                user2.set('fname', 'Jack');
                user2.set('lname', 'Holey');
                user2.set('address', 'Canada');

                let user3 = new userModel();
                user3.set('fname', 'Sam');
                user3.set('lname', 'Riak');
                user3.set('address', 'London');

                let userCollection = Backbone.Collection.extend({
                    model: userModel
                });
                let users = new userCollection();
                users.add(user1);
                users.add(user2);
                users.add(user3);
                new homeView({ el: '#content', collection: users});
            })
        },
        features: function(){
            $(document).attr('title', 'Features');
            require(['app/view/features/features'], function(featuresView){
                new featuresView({ el: '#content'});
            })
        },
        enterprise: function(){
            $(document).attr('title', 'Enterprise');
            require(['app/view/enterprise/enterprise'], function(enterpriseView){
                new enterpriseView({ el: '#content'});
            })
        },
        support: function(){
            $(document).attr('title', 'Support');
            require(['app/view/support/support'], function(supportView){
                new supportView({ el: '#content'});
            })
        },
        pricing: function(){
            $(document).attr('title', 'Pricing');
            require(['app/view/pricing/pricing'], function(pricingView){
                new pricingView({ el: '#content'});
            })
        },
        signup: function(){
            $(document).attr('title', 'Signup');
            require(['app/view/signup/signup'], function(signupView){
                new signupView({ el: '#content'});
            })
        }
    });

    new AppRouter();
    Backbone.history.start({
        pushState: false
    });


    // $(document).ready(function(){
    //     $('#button1').on('click', function(){
    //         var ViewObj = Backbone.View.extend({
    //             el: '#root1',
    //             template: _.template(headerHtml),
    //             initialize: function(){
    //                 this.render();
    //              },
    //             render: function(){
    //                 this.$el.html(this.template({fname: 'Avadhesh'}));
    //             }
    //         });
    //         var view1 = new ViewObj();
    //     });

    //     $('#button2').on('click', function(){
    //         var ViewObj = Backbone.View.extend({
    //             el: '#root2',
    //             template: _.template("My lname is <%= lname %>"),
    //             initialize: function(){
    //                this.render();
    //             },
    //             render: function(){
    //                 this.$el.html(this.template({lname: 'Bhatt'}));
    //             }
    //         });
    //         var view2 = new ViewObj();
    //     });

    //     $('body').on('click', '#inner-btn', function(){
    //         console.log('Inner Button');
    //     });

    // });
});