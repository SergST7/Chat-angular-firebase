/**
 * Created by SergST on 23.12.2016.
 */

function chatService($firebaseArray) {
    var messagesRef = firebase.database().ref().child("messages");

    var chat = {
        
        getMessages: function () {
            return $firebaseArray(messagesRef)
        },

        showLimitMessages: function () {
            return $firebaseArray(messagesRef.limitToLast(5))
        },

        sendMessage: function(message) {
            this.getMessages().$add(message)

        }
    }

    return chat
}


angular.module('afbChat')
    .factory('ChatService', ['$firebaseArray', chatService]);
