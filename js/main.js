document.cookie = 'safeCookie1=foo; SameSite=Lax';
document.cookie = 'safeCookie2=foo';
document.cookie = 'crossCookie=bar; SameSite=None; Secure';

$(function () {
  const wineArr = [
    {
      name: '뱅꼬레 로제 (375,750㎖)',
      Ename: 'Vincoree Rose',
      img: 'https://cdn.imweb.me/thumbnail/20210706/4aab6395a6fc1.png',
      vod: '"https://www.youtube.com/embed/lVSXO_DvcTI?autoplay=1;" allow="autoplay;"',
      desc: '노을빛 자태 아름다운 미디엄 바디 로제와인! 무겁지 않은 단맛과 입맛을 돋구는 산미의 조화',
    },
    {
      name: '뱅꼬레 레드 (375,750㎖)',
      Ename: 'Vincoree Red',
      img: 'https://cdn.imweb.me/thumbnail/20210706/3c20dfba774a1.png',
      vod: '"https://www.youtube.com/embed/lVSXO_DvcTI?autoplay=1;" allow="autoplay;"',
    },
    {
      name: '뱅꼬레 아이스 (375㎖)',
      Ename: 'Vincoree Ice',
      img: 'https://cdn.imweb.me/thumbnail/20210706/7b216d035d270.png',
      vod: '',
    },
    {
      name: '뱅꼬레 더 감 (375,750㎖)',
      Ename: 'Vincoree the Persimmo',
      img: 'https://cdn.imweb.me/thumbnail/20210706/345dd7ec0055c.png',
      vod: '',
    },
    {
      name: '스타베리 오디 (500㎖)',
      Ename: 'Starberry mulberry',
      img: 'https://cdn.imweb.me/thumbnail/20210706/ebe2e9697ddfd.png',
      vod: '',
    },
    {
      name: '뱅꼬레 화이트 (375,750㎖)',
      Ename: 'Vincoree White',
      img: 'https://cdn.imweb.me/thumbnail/20210706/c7e7067bfeafc.png',
      vod: '',
    },
  ];

  const content = `<li>
  <figure>
    <img
      src=""
      alt=""
    />
  </figure>
  <dl>
    <dt></dt>
    <dd></dd>
  </dl>
</li>`;
  for (i = 0; i < wineArr.length; i++) {
    $('.wine-info').append(content);

    $('.dim-wrap ').each(function (index) {
      console.log(wineArr[index].name);
    });

    $('.wine-info li').each(function (index) {
      $(this).find('img').attr('src', wineArr[index].img);
      $(this).find('dt').text(wineArr[index].name);
      $(this).find('dd').text(wineArr[index].Ename);

      $(this).on('click', function () {
        $('.dim').fadeIn();
        $('.dim-wrap').addClass('active');
        $('.video-con').html(`<iframe src = ${wineArr[index].vod}</iframe>`);
        $('.wine-detail-info').find('dt').text(wineArr[index].name);
        $('.wine-detail-info').find('dd').text(wineArr[index].desc);
      });
      $('.dim').on('click', function () {
        $('.dim').fadeOut();
        $('.dim-wrap').removeClass('active');
      });
    });

    // $('.wine-info li').on('click', function () {
    //   $('.dim').fadeIn();
    //   $('.dim-wrap').addClass('active');
    // });

    // console.log(wineArr[index].name);
  }
});
