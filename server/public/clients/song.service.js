

songApp.service('SongService', ['$http',function($http){
    let sv = this;
    
    sv.songsGot = '';
    sv.newSong= {};

    sv.postSong = function(rankIn, artistIn, trackIn, publishedIn){
        console.log('in songservice postSong function');
        
            console.log('in postSong');
            console.log('artistIn is:', artistIn);
            
            if (rankIn === '' || artistIn === '' || trackIn === '' || publishedIn === '') {
                console.log('at least one input is empty');
                
            }
            else{
                sv.newSong = {
                    rank: rankIn,
                    artist: artistIn,
                    track: trackIn,
                    published: publishedIn 
                }
                console.log('the inputs are not empty');
                console.log('newSong is', sv.newSong);
                
                return $http({
                    method: 'POST',
                    url: '/song',
                    data: sv.newSong
                }).then(function(){
                    console.log('song posted');
                    

                }).catch(function(error){
                    console.log('error posting song:', error);
                    
                })
            
        }
    }

    sv.updateSong = function(rankIn, artistIn, trackIn, publishedIn){
        console.log('in songservice updateSong function');
        
        if (rankIn === '' || artistIn === '' || trackIn === '' || publishedIn === '') {
            console.log('at least one input is empty');
            
        }
        else{
            console.log('the inputs are not empty');
            
        
    }            
    }

    sv.deleteSong = function(rankIn, artistIn, trackIn, publishedIn){
        console.log('in songservice deleteSong function');
        
            console.log('sv.artistIn is:', sv.artistIn);
            
    }

    sv.upvoteSong = function(rankIn, artistIn, trackIn, publishedIn){
        console.log('in songservice upvoteSong function');
        
            console.log('sv.artistIn is:', sv.artistIn);
            
    }

    sv.displaySong = function(){
        console.log('in songservice displaySong function');
        
        
            return $http({
                method: 'GET',
                url: '/song'
            }).then(function(response){
                sv.songsGot = response.data;
                console.log('here is the songsGot:', sv.songsGot);
            }).catch(function(error){
                console.log('error with getting GIF:', error);
            })            
    }
}])