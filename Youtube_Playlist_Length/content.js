


window.addEventListener ("load", myMain, false);



// let htmlCollection = document.getElementsByClassName("playlist-items style-scope ytd-playlist-panel-renderer");
// let htmlCollection = document.querySelectorAll('span[class="style-scope ytd-thumbnail-overlay-time-status-renderer"]')
// let htmlCollection = document.getElementsByTagName('ytd-thumbnail-overlay-time-status-renderer')
// console.log("htmlCollection = ", htmlCollection);
// console.log("video_duration = ", htmlCollection.length);




function myMain(evt){
	console.log("main script ran");
	let htmlCollection = document.getElementsByTagName('ytd-thumbnail-overlay-time-status-renderer');
	console.log("htmlCollection = ", htmlCollection);
	console.log("video_duration = ", htmlCollection.length);

}

// for (var element in htmlCollection){
// 	console.log(element);
// }
