jQuery(document).ready(function() {


       var  fuenla =  function(valor) {
                var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
                $.getJSON( flickerAPI, {
                    tags: valor,
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

      $("button").click(function(){

         var valor = $("input:text[value]").val();       
         $("#images").html(" ");      
         fuenla(valor);

        });
        
        

});
