Drupal.behaviors.createcontentblock = function (context) {
   // Togglable blocks
  $('div.block-createcontentblock:has(ul.createcontentblock-links.collapse):not(.processed)')
    .addClass('processed')
    .each(function() {
      $('.block-title', this).prepend('<span class="icon">+</span>').click(function() {
        if (!$(this).is('.toggle-active')) {
          $(this).addClass('toggle-active').siblings('div.content').show();
          $(this).children('span.icon').text('\u2212');
        }
        else {
          $(this).removeClass('toggle-active').siblings('div.content').hide();
          $(this).children('span.icon').text('+');
        }
        return false;
      });
    })
    .find('.block-title a').replaceWith($('.block-createcontentblock .block-title a').text());
};
