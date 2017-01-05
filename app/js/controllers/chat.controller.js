/**
 * Created by SergST on 20.12.2016.
 */

angular
    .module('afbChat')
    .controller('chatCtrl',['ChatService', '$firebaseAuth',  function (ChatService, $firebaseAuth) {
        var self = this;
        var auth = $firebaseAuth();



        self.messages = ChatService.getMessages();
        self.limitMessages = ChatService.showLimitMessages();

        self.sendMessage = function () {

            if(self.author != null){
                var message = {
                    authorName: self.author.displayName,
                    authorId: self.author.uid,
                    photo: self.author.photoURL,
                    text: self.newMessage
                };

            } else
            {
                alert('No active user!')
            }

            if(self.newMessage != ""){
                ChatService.sendMessage(message);

                self.newMessage = ''
            }else{
                alert('Enter message')
            }
        };
        
        self.login = function () {
            auth.$signInWithPopup('google')
            
        };
        
        self.logout = function () {
            auth.$signOut()

        }

        auth.$onAuthStateChanged(function(firebaseUser) {
            self.author = firebaseUser;
           console.log(firebaseUser)
        })

    }])