var User = Backbone.Model.extend({});

var UserView = Backbone.View.extend({
  className: "user",

  template: _.template("<h1><%= name %></h1><h3><%= username %></h3>"),

  initialize: function() {
    this.model.on("change", this.render, this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});

var current_user = new User({name: "Adrian Enns", username: "addisaden"});

var current_user_view = new UserView({model: current_user});

$("body").append(current_user_view.el);

setTimeout(function () {
  current_user.set({name: "Adrian E."});
}, 1000);

setInterval(function () {
  var mod_a = "<( O.o)><(o.O )>";
  var mod_b = "(>O.o)><( O.o)>";
  if(current_user.get("username") === mod_a)
    current_user.set({username: mod_b});
  else
    current_user.set({username: mod_a});
}, 500);

