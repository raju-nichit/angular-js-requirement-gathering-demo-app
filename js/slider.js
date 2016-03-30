/**
 * Created by MindBowser on 22-03-2016.
 */
$(function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 80,
        values: [ 16,40 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "" + ui.values[ 0 ] + "-" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
        " - " + $( "#slider-range" ).slider( "values", 1 ) );
});