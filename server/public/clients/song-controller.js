songApp.controller('SongController', function(SongService){
    console.log('SC');
    let vm = this;
    vm.rankIn = '';
    vm.artistIn = '';
    vm.trackIn = '';
    vm.publishedIn = '';

    vm.songsGot;
    
    vm.postSong = function(){SongService.postSong(vm.rankIn, vm.artistIn, vm.trackIn, vm.publishedIn)}

    vm.updateSong = function(){SongService.updateSong(vm.rankIn, vm.artistIn, vm.trackIn, vm.publishedIn)}

    vm.deleteSong = function(){SongService.deleteSong(vm.rankIn, vm.artistIn, vm.trackIn, vm.publishedIn)}


    vm.upvoteSong = function(){SongService.upvoteSong(vm.rankIn, vm.artistIn, vm.trackIn, vm.publishedIn)}


    vm.displaySong = function(){SongService.displaySong(vm.rankIn, vm.artistIn, vm.trackIn, vm.publishedIn).then(function(){
        vm.songsGot = SongService.songsGot;

    })
    }

})