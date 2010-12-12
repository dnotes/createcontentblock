Drupal.behaviors.createcontentblock = function (context) {
   // Togglable blocks
  $('div.block-createcontentblock:not(.processed)')
    .addClass('processed')
    .each(function() {
      $('.block-title', this).click(function() {
        if (!$(this).is('.toggle-active')) {
          $(this).addClass('toggle-active').siblings('div.content').show();
        }
        else {
          $(this).removeClass('toggle-active').siblings('div.content').hide();
        }
        return false;
      });
    })
    .find('.block-title a').replaceWith($('.block-createcontentblock .block-title a').text());
};
