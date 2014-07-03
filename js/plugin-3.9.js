(function() {
    tinymce.PluginManager.add('woo_products_flexslider_all_in_one_button', function(ed, url) {
            ed.addButton('woo_products_flexslider_all_in_one_button', {
                title : 'Woocommerce Products FlexSlider All In One',
                image : url+'/../images/shortcode-icon.png',
                onclick : function() {
                    var width = jQuery(window).width(), H = jQuery(window).height(), W = ( 720 < width ) ? 720 : width;
                    W = W - 80;
                    H = H - 150;                       
                    tb_show('Woocommerce Products FlexSlider All In One','admin-ajax.php?action=woo_products_flexslider_all_in_one_shortcode_generator&width=' + W + '&height=' + H );
               }
            });        
    });
})();