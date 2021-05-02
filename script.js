let res = [];

let firstWidth = $('.header-name').css('width');
console.log(firstWidth);

$('.user-info').click(function () {
  console.log('pressed');
  $('.user-info').css('background-color', 'aqua');
  $('.user-info__name').removeClass('showtriangle');
  $(this).css('background-color', 'rgb(62, 189, 148)');
  $('.user-info__name:first', this).addClass('showtriangle');

  $('.user-info__hiden-info').show();
  $('.additional-container').show();
  $('.user-info__hiden-info').css('display', 'flex');
  $('.show').hide();
  let promise = fetch('./data.json')
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      $('.user-info').on('click', function (e) {
        console.log(this);
        console.log(55);
        res = [];
        let id = e.target.id;
        data.map((user) => {
          // console.log(user);
          if (id === user.id) {
            let text = user.additionalInfo;
            for (let key in text) {
              res.push(
                `<li style='list-style-type: none'>${key}: ${text[key]}</li>`
              );
            }
            $('.extra-info__content').html(res);
          }
        });
      });
    });
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
  $('.header-name__extra-info').css('width', '600px');
  $('.header-name__tochange-title').hide();
  $('.user-info__phone').hide();
  $('.header-name__extra-info').show();
  $('.extra-info').css('display', 'flex');
});

$('.close').click(function () {
  $('.header-name__extra-info').hide();
  $('.additional-container').hide();
  $('.extra-info').hide();
  $('.header-name__tochange').show();
  $('.user-info__skype').show();
  $('.user-info__note').show();
  $('.header-name__tochange-title').show();
  $('.user-info__phone').show();
  $('.user-info').css('background-color', 'aqua');
  $('.user-info__mail').show();
  $('.user-info__hiden-info').hide();
  $('.user-info__name').removeClass('showtriangle');
  $('.header-name').css('width', firstWidth);
});
