/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var video = document.getElementById("live_video");
var constraint = {
    audio: true,
    video: true
}

navigator.webkitGetUserMedia(constraint,
        function (stream) {
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
            console.log(video.src);
        },
        function (error) {
            console.log(error);
        }
);
