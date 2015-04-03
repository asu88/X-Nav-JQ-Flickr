jQuery(document).ready(function() {

      var  fuenla =  function() {
                var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
                $.getJSON( flickerAPI, {
                    tags: "fuenlabrada",
                    tagmode: "any",
                    format: "json"
                })
                .done(function( data ) {
                    $.each( data.items, function( i, item ) {
                    $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
                    if ( i === 10 ) {
                        return false;
                }

                });
            });
          }
        fuenla();
        
        $("#images").hide();
        $("button").click(function(){
            $("#images").show();
        });

});
