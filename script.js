const $button = document.querySelector("button");

$button.addEventListener("click", (e) => {
  let res = `{
      "quoteText": "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom. ",
      "quoteAuthor": "Marcel Proust",
      "senderName": "",
      "senderLink": "",
      "quoteLink": "http://forismatic.com/en/3fe08c5b2e/"
    }`;

  let data = JSON.parse(res);

  const $div = document.querySelector("#quote-div");
  $div.innerHTML = `
    <div class='quote'>
      <p class='quote-text'>"${data.quoteText}"</p>
      <p class='quote-author'>-${data.quoteAuthor}</p>
    </div>
    `;
});
