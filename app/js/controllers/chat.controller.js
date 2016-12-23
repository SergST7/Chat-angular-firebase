/**
 * Created by SergST on 20.12.2016.
 */

angular
    .module('afbChat')
    .controller('chatCtrl',['ChatService',  function (ChatService) {
        var self = this;
        
        self.messages = ChatService.getMessages()

        self.sendMessage = function () {
            var message = {
                text: self.newMessage
            };

            ChatService.sendMessage(message);

            self.newMessage = ''

        }

    }])