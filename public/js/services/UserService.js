myApp.service(
    "UserService",
    function( $http, $q ) {


        // let baseUrl = 'https://staging.beam-api.com/user/';
    	let baseUrl = '/user/';


        // Return public API.
        return({
            index: index,
            get: get,
            create: create,
            update: update,
            destroy: destroy
        });
        // ---
        // PUBLIC METHODS.
        // ---
        function index() {
            var request = $http({
                method: "get",
                url: baseUrl,
                params: {
                    action: "get"
                }
            });
            return( request.then( handleSuccess, handleError ) );
            // return( request);
        }






        function get(id) {
            var request = $http({
                method: "get",
                url: baseUrl+id,
                params: {
                    action: "get"
                }
            });
            return( request.then( handleSuccess, handleError ) );
        }








        function create( name ) {
            var request = $http({
                method: "post",
                url: baseUrl,
                params: {
                    action: "add"
                },
                data: {
                    name: name
                }
            });
            return( request.then( handleSuccess, handleError ) );
        }
       




        function update( id, name ) {
            var request = $http({
                method: "put",
                url: baseUrl+id,
                params: {
                    action: "add"
                },
                data: {
                    name: name
                }
            });
            return( request.then( handleSuccess, handleError ) );
        }






        function destroy( id ) {
            var request = $http({
                method: "destroy",
                url: baseUrl+id,
                params: {
                    action: "delete"
                },
                data: {
                    id: id
                }
            });
            return( request.then( handleSuccess, handleError ) );
        }







        // ---
        // PRIVATE METHODS.
        // ---
        // I transform the error response, unwrapping the application dta from
        // the API response payload.
        function handleError( response ) {
            // The API response from the server should be returned in a
            // nomralized format. However, if the request was not handled by the
            // server (or what not handles properly - ex. server error), then we
            // may have to normalize it on our end, as best we can.
            if (
                ! angular.isObject( response.data ) ||
                ! response.data.message
                ) {
                return( $q.reject( "An unknown error occurred." ) );
            }
            // Otherwise, use expected error message.
            return( $q.reject( response.data.message ) );
        }
        // I transform the successful response, unwrapping the application data
        // from the API response payload.
        function handleSuccess( response ) {
            return( response.data );
        }
    }
);
