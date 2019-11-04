
//Cargar el domn
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});

SC.initialize({
    client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb'
  });

//   let track_url = 'https://soundcloud.com/forss/flickermood';
//   SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
//     console.log('oEmbed response: ', oEmbed);
// });


// SC.stream('/tracks/294').then(function(player){
//   player.play().then(function(){
//     console.log('Playback started!');
//   }).catch(function(e){
//     console.error('Playback rejected. Try calling play() from a user interaction.', e);
//   });
// });

const URL = '/tracks/'

SC.get(URL, { q: "Nani!? She A Scammer", limit: 5}).then(res => console.log(res))



SC.get("/tracks/", { q: "Flickermood", limit: 1}).then(res =>res.permalink_url)
// .then(res => stream(res).then(function(player){
//     player.play().then(function(){
//       console.log('Playback started!');
//     }).catch(function(e){
//       console.error('Playback rejected. Try calling play() from a user interaction.', e);
//     })}))


// .catch('Algo Fallo')

// .then(res => stream(URL +res[].id).then(function(player){
    // player.play().then(function(){
    //   console.log('Playback started!')
    // }).catch(function(e){
    //   console.error('Playback rejected. Try calling play() from a user interaction.', e);
    // })}))
// .catch('Algo falox');
// SC.connect().then(function() {
//     return SC.get('/me');
//   }).then(function(me) {
//     alert('Hello, ' + me.username);
//   });