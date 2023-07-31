$(function () {
  const wineArr = [
    {
      name: "뱅꼬레 로제 (375,750㎖)",
      Ename: "Vincoree Rose",
      img: "https://cdn.imweb.me/thumbnail/20210706/4aab6395a6fc1.png",
      vod: "",
    },
    {
      name: "뱅꼬레 레드 (375,750㎖)",
      Ename: "Vincoree Red",
      img: "https://cdn.imweb.me/thumbnail/20210706/3c20dfba774a1.png",
      vod: "",
    },
    {
      name: "뱅꼬레 아이스 (375㎖)",
      Ename: "Vincoree Ice",
      img: "https://cdn.imweb.me/thumbnail/20210706/7b216d035d270.png",
      vod: "",
    },
    {
      name: "뱅꼬레 더 감 (375,750㎖)",
      Ename: "Vincoree the Persimmo",
      img: "https://cdn.imweb.me/thumbnail/20210706/345dd7ec0055c.png",
      vod: "",
    },
    {
      name: "스타베리 오디 (500㎖)",
      Ename: "Starberry mulberry",
      img: "https://cdn.imweb.me/thumbnail/20210706/ebe2e9697ddfd.png",
      vod: "",
    },
    {
      name: "뱅꼬레 화이트 (375,750㎖)",
      Ename: "Vincoree White",
      img: "https://cdn.imweb.me/thumbnail/20210706/c7e7067bfeafc.png",
      vod: "",
    },
  ];

  const content = `<li>
  <figure>
    <img
      src="https://cdn.imweb.me/thumbnail/20210706/3c20dfba774a1.png"
      alt=""
    />
  </figure>
  <dl>
    <dt>Vincoree Rose</dt>
    <dd>뱅꼬레 로제 (375,750㎖)</dd>
  </dl>
</li>`;
  for (i = 0; i < wineArr.length; i++) {
    $(".wine-info").append(content);
    console.log($("li").find("img").attr("src", wineArr[i].img));
  }
});
