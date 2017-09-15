app.factory('UnicornFactory', function ()){
  var factory = {
    unicorns : [],

    createUnicorn: function(nameUnicorn){
      var pushUnicorn = {
        "name": nameUnicorn,
        "color": colorUnicorn,
        "age": ageUnicorn,
        "gender": ["Male", "Femelle", "Autre"]
      }
      this.unicorns.push(pushUnicorn);
    },

    showUnicornInfo: function(index){
      return this.unicorns[index];
    }
  }
  return factory;
}
