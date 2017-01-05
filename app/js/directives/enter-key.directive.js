function enterKey () {
    return function (scope, element, attrs){
        element.bind('keydown keypress', function (e) {
            if (e.which === 13){
                scope.$apply(function () {
                    scope.$eval(attrs.enterKey)
                });
                e.preventDefault();
            }

        })
    }
}

angular
    .module('afbChat')
    .directive('enterKey',[enterKey]);