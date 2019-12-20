(function ($) {
  $(document).ready(function() {
    let myclassname = Backdrop.settings.maildisguise.class;
    //console.log(myclassname);
    $('.' + myclassname).each(function () {
      let decoded = $(this).attr('data-href').replace(/[a-zA-Z]/g, function(char) {
        return String.fromCharCode((char <= "Z" ? 90 : 122) >= (char = char.charCodeAt(0) + 13) ? char : char - 26);
      });
      let replaced = decoded.replace(/^#/, 'mailto:').replace(/\/at\//, '@');
      $(this).attr('href', replaced);
    });
    $('.' + myclassname + '-inner > span').replaceWith('@');
  });
})(jQuery);
