//onthegrid
//Key: onthegrid-f3c4babb9bf6.json
//service account key: see json
//auth url: "https://accounts.google.com/o/oauth2/v2/auth" //only https
//example: https://accounts.google.com/o/oauth2/v2/auth

$(document).ready(

	//variables for the api key
	// var OAUTHURL    =   'https://accounts.google.com/o/oauth2/auth?';
 //        var VALIDURL    =   'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';
 //        var SCOPE       =   'https://www.googleapis.com/auth/userinfo.profile';
 //        var CLIENTID    =   '433322211111.apps.googleusercontent.com';
 //        var REDIRECT    =   'http://localhost:8888/MAMP/html5/oauth/'
 //        var TYPE        =   'token';
 //        var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
        

        // function login() {
        //     //!!!!! these are not in key: property model

        //     var win         =   window.open(_url, "windowname1", 'width=800, height=600');

        // //     var pollTimer   =   window.setInterval(function() { 
        // //         try {
        // //             console.log(win.document.URL);
        // //             if (win.document.URL.indexOf(REDIRECT) != -1) {
        // //                 window.clearInterval(pollTimer);
        // //                 var url =   win.document.URL;
        // //                 acToken =   gup(url, 'access_token');
        // //                 tokenType = gup(url, 'token_type');
        // //                 expiresIn = gup(url, 'expires_in');
        // //                 win.close();

        // //                 validateToken(acToken);
        // //             }
        // //         } catch(e) {
        // //         }
        // //     }, 100);
        // }
        

         //credits: http://www.netlobo.com/url_query_string_javascript.html
        function gup(url, name) {
            name = name.replace(/[[]/,"\[").replace(/[]]/,"\]");
            var regexS = "[\?&]"+name+"=([^&#]*)";
            var regex = new RegExp( regexS );
            var results = regex.exec( url );
            if( results == null )
                return "";
            else
                return results[1];
        }

        //validates token
        function validateToken(token) {
            $.ajax({
                url: VALIDURL + token,
                data: null,
                success: function(responseText){  
                    getUserInfo();
                },  
                dataType: "jsonp"  
            });
        }

        //gets user name and avatar
        function getUserInfo() {
            $.ajax({
                url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + acToken,
                data: null,
                success: function(resp) {
                    user    =   resp;
                    console.log(user);
                    $('#uName').append(user.name);
                    $('#imgHolder').attr('src', user.picture);
                },
                dataType: "jsonp"
            });
        }

	)