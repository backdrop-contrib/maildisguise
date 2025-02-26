(function ($) {
  Backdrop.behaviors.mailDisguise = {

    attach: function (context, settings) {
      if (typeof settings.maildisguise === 'undefined') {
        return;
      }

      let myclassname = settings.maildisguise.class;

      $('.' + myclassname).each(function () {
        const dataHref = $(this).attr('data-href');
        // Required attribute missing or not the pattern we're looking for.
        if (typeof dataHref === 'undefined' || !dataHref.startsWith('#')) {
          return;
        }
        let decoded = dataHref.replace(/[a-zA-Z]/g, function(char) {
          return String.fromCharCode((char <= "Z" ? 90 : 122) >= (char = char.charCodeAt(0) + 13) ? char : char - 26);
        });
        let replaced = decoded.replace(/^#/, 'mailto:').replace(/\/at\//, '@');
        $(this).attr('href', replaced);
      });
      $('.' + myclassname + '-inner > span').replaceWith('@');
    }

  }
})(jQuery);
