const body = document.querySelector('body');

/*==================== MOBILE ====================*/
const formM = document.getElementById('form-tweet-mobile');
const textareatM = document.getElementById('textarea-tweet-mobile');
const bgPopup = document.getElementById('bg-popup');

let scroll;
window.addEventListener('scroll', () => {
  scroll = document.documentElement.scrollTop;
});

function btnAtivo(event) {
  let targetId = event.target.id;
  
  let textarea = document.getElementById(targetId);

  let btn = textarea.nextElementSibling;
  
  
  if(textarea.value !== '' && /\S/.test(textarea.value)){ /* verifica se está vazio */
    btn.classList.add("ativo");
  } else {
    btn.classList.remove("ativo");
  }

}

function btnAbre() {
  if(formM.style.display == "none") {
    formM.style.display = "block";

    textareatM.focus();

    bgPopup.classList.add("ativo");
    body.style.overflow = "hidden";

    document.documentElement.scrollTop = document.body.scrollTop = scroll;

    /*body.style.marginRight = '17px';
    body.style.marginRight = '0px';*/
  } else {
    formM.style.display = "none";
  }
}

function fecharPopup() {
  formM.style.display = "none";
  bgPopup.classList.remove("ativo");
  
  body.style.overflow = "auto";
  /*body.style.marginRight = '0px';*/

  document.documentElement.scrollTop = document.body.scrollTop = 0;
}

function btnTweetar(event) {
  event.preventDefault();

  document.documentElement.scrollTop = document.body.scrollTop = 0;
  
  let targetId = event.target.id;
  let data, hora, min, conteudoTweet;

  let btn = document.getElementById(targetId);
  let textarea = btn.previousElementSibling;

  let tweet = textarea.value.replace(/#(\S+)/g,'<a href="#" style="color: rgb(29 155 240);">#$1<a>');
  tweet = tweet.replace(/@(\S+)/g,'<a href="#" style="color: rgb(29 155 240);">@$1</a>');

  data = new Date();
  hora = data.getHours();
  min = data.getMinutes();
  
  if(tweet !== '') {
    conteudoTweet = `
    <div class="conteudo-tweet">
      <div class="tweet-perfil">
        <img src="assets/img/ProfilePic.png" alt="Daniel">
      </div>
        <div class="tweet-info">
          <h2>Daniel</h2>
          <span>@danielkenzie ${hora}:${min}</span>
          <p>${tweet}</p>
        </div>
    </div>
    `;
  }
  
  switch (targetId) {
    case 'btn-tweetar-mobile':
      if(tweet !== ''){
        document.getElementById('conteudo-feed-mobile').innerHTML += conteudoTweet;
        textarea.value = '';
        btn.classList.remove("ativo");
        formM.style.display = "none";
        bgPopup.classList.remove("ativo");
        body.style.overflow = "auto";
        body.style.marginRight = '0px';
      }
      
      break;

    case 'btn-tweetar-desktop':
      if(tweet !== '') {
        document.getElementById('conteudo-feed-desktop').innerHTML += conteudoTweet;
        textarea.value = '';
        btn.classList.remove("ativo");

      }
      break;
  }
}
