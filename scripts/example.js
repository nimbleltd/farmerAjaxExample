$( document ).ready(function () {
    
    //$.ajax({
    //    url: 'http://www.nashvillecoder.me/shared/market.json', 
    // success: function (data)
    $.getJSON('market.json', function (data) {
            
            $("#offerings").change(
                function(){
                    var selectedItem, offeringItems;

                    selectedItem = $(this).val();

                    offeringItems = data[selectedItem];

                    $.each(offeringItems, function (key, value){
                        $("#offering_items")
                            .empty(value)
                        });
                     $.each(offeringItems, function (key, value){
                        $("#offering_items")
                            .append($("<option></option>")
                            .attr("value",value)
                            .text(value)
                            //.empty(value)
                        );  //end of each "offering_items"
                    });
                }
                );
            

            $.each(data, function (key, value) {   
            $('#offerings')
                    .prepend($('<option value="0">Chose One Below...</option>'))
                    .append($("<option></option>")
                    .attr("value",key)
                    .text(key)
                ); 
            });
        }); //end of getJSON
    }); //end of dom call
    
//});