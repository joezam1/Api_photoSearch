
it ("Test Function",function(){
    const $ = require('jquery');
      var result = spyOn($, 'getJSON').and.callFake(function (url, success) {
      success({
          "isTrue": true
      });
      expect(result).toHaveBeenCalledTimes(1)
  });
});
