const sounds = ['gunfire', 'air raid', 'Cannon'];

sounds.forEach(sound => {

btn.addEventListener('click', () => {
    stopPlaying();
    document.getElementById(sound).Play(); 
})
document.getElementById('buttons').append(btn)

})
function stopPlaying(){
    sounds.forEach(sound =>{
        const audio = document.getElementById(sound);
        audio.pause(); 
        audio.currentTime = 0; 
    })
}