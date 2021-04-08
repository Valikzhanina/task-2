$('.user-info').each(function () {
  $('.user-info').click(function () {
    $('.user-info').css('background-color', 'aqua');
    $('.show').hide();
    // $('.user-info__name').each(function () {
    //   $('.user-info__name').text(
    //     fetch('./data.json')
    //       .then(function (resp) {
    //         return resp.json();
    //       })
    //       .then(function (data) {
    //         // console.log(data);
    //         return `${data.name} + ${data.phone}+ ${data.mail}`;
    //       })
    //   );
    // });

    $(this).css('background-color', 'rgb(62, 189, 148)');

    $(this)
      .closest('.user - info__name')
      .closest('.show')
      .css('display', 'block');

    $('.header-name__tochange').hide();
    $('.user-info__skype').hide();
    $('.user-info__note').hide();
    $('.user-info__mail').hide();
    $('.header-name').css('width', '600px');

    $('.header-name__tochange-title').hide();
    $('.user-info__phone').hide();
    $('.header-name__extra-info').show();
    $('.extra-info').show();
    // $('.extra-info').show();
    // $('.show').each(function () {
    //   if ($('.user-info').css('background-color') === 'rgb(21, 102, 75)') {
    //     $(this).show();
    //   }
    // });
  });
});

$('.close').click(function () {
  console.log('pressed');
  $('.header-name__extra-info').hide();
  $('.extra-info').hide();
  $('.header-name__tochange').show();
  $('.user-info__skype').show();
  $('.user-info__note').show();
  $('.header-name__tochange-title').show();
  $('.user-info__phone').show();
  $('.user-info').css('background-color', 'aqua');
  $('.user-info__mail').show();
});
