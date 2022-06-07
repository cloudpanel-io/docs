function addDiscordButton() {
  let discordDivTag = document.createElement('div');
  discordDivTag.innerHTML = '<div class="join-us-on-discord"><a target="_blank" title="Join us on Discord" href="https://discord.cloudpanel.io"><img alt="Join us on Discord" width="180" src="/static/img/join-discord.png"></a></div>';
  document.body.appendChild(discordDivTag);
}

window.onload = function () {
  addDiscordButton();
}