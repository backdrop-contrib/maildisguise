(function ($) {
  Backdrop.behaviors.mailDisguise = {

    attach: function (context, settings) {
      if (typeof settings.maildisguise === 'undefined') {
        return;
      }

      let myclassname = settings.maildisguise.class;

      $('.' + myclassname).each(function () {
        let decoded = $(this).attr('data-href').replace(/[a-zA-Z]/g, function(char) {
          return String.fromCharCode((char <= "Z" ? 90 : 122) >= (char = char.charCodeAt(0) + 13) ? char : char - 26);
        });
        let replaced = decoded.replace(/^#/, 'mailto:').replace(/\/at\//, '@');
        $(this).attr('href', replaced);
      });
      $('.' + myclassname + '-inner > span').replaceWith('@');
    }

  }
})(jQuery);
