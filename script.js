let res = [];
let id;
let firstWidth = $('.header-name').css('width');

$(this).on('click', function (e) {
  id = e.target.id;
  console.log(id);
});

$('.user-info').click(function () {
  $('.user-info').css('background-color', 'aqua');
  $('.user-info__name').removeClass('showtriangle');
  $(this).css('background-color', 'rgb(62, 189, 148)');
  $('.user-info__name:first', this).addClass('showtriangle');

  $('.user-info__hiden-info').show();
  $('.additional-container').show();
  $('.user-info__hiden-info').css('display', 'flex');
  $('.show').hide();

  const url = './data.json';

  res = [];
  async function getInfo(url) {
    let response = await fetch(url);
    let info = await response.json();
    console.log(info);

    function createList(info) {
      for (let key in info) {
        if (info[key].id === id) {
          let text = info[key].additionalInfo;
          for (let key in text) {
            res.push(
              `<li style='list-style-type: none'>${key}: ${text[key]}</li>`
            );

            $('.extra-info__content').html(res);
          }
        }
      }
    }
    createList(info);
  }
  getInfo(url);

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
