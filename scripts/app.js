import * as library from "./lib.js";
// script to make the quotes show on keyup in input fields

// script to handle nerdy valentine library
const constNerdyCardId = document.querySelector(".nerdyCardId");
const constLoveAuthId = document.querySelector(".loveAuth");
const senderFunc = document.querySelector(".sender");
const receiverFunc = document.querySelector(".receiver");
const messageFunc = document.querySelector(".message");
const constSenderId = document.querySelector("#sender");
const constReceiverId = document.querySelector("#receiver");
const constMessageId = document.querySelector("#message");
const cardMessageTo = document.querySelector("#section-card-to");
const cardMessageFrom = document.querySelector("#section-card-from");
const cardMessageBody = document.querySelector("#section-card-message");
const downloadNerdyCard = document.querySelector(".section-actions-download");
const nerdyValCard = document.querySelector(".content-section-card");
const emojiIcon = document.querySelector("#emoji");

const cardId = library.nerdyValUUID().replace(/^.{3}/g, "DEC");
const auth = library.loveAuth();

const nerdyCardId = `'${cardId}';`;
const loveAuth = `'${auth}';`;

constNerdyCardId.innerText = nerdyCardId;
constLoveAuthId.innerText = loveAuth;

// script to handle nerdy logic && chain event listeners

// message body
constMessageId.addEventListener("keyup", ({ target }) => {
  const { value } = target;
  messageFunc.value = value;
  cardMessageBody.innerText = value;
});

messageFunc.addEventListener("keyup", ({ target }) => {
  const { value } = target;
  constMessageId.value = value;
  cardMessageBody.innerText = value;
});

// sender from
constSenderId.addEventListener("keyup", ({ target }) => {
  const { value } = target;
  senderFunc.value = value;
  cardMessageFrom.innerText = value;
});

senderFunc.addEventListener("keyup", ({ target }) => {
  const { value } = target;
  constSenderId.value = value;
  cardMessageFrom.innerText = value;
});

//  receiver to
constReceiverId.addEventListener("keyup", ({ target }) => {
  const { value } = target;
  receiverFunc.value = value;
  cardMessageTo.innerText = value;
});

receiverFunc.addEventListener("keyup", ({ target }) => {
  const { value } = target;
  constReceiverId.value = value;
  cardMessageTo.innerText = value;
});

// download nerdy card
downloadNerdyCard.addEventListener("click", async () => {
  domtoimage
    .toPng(nerdyValCard)
    .then(dataUrl => {
      const link = document.createElement("a");
      link.download = "my-nerdy-val-card.jpeg";
      link.href = dataUrl;
      link.click();
    })
    .catch(e => console.log(e));
});

const picker = new EmojiButton();

picker.on("emoji", emoji => {
  cardMessageBody.innerText += emoji;
});

emojiIcon.addEventListener("click", () => {
  picker.pickerVisible ? picker.hidePicker() : picker.showPicker(emojiIcon);
});
