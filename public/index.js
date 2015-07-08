var cart = [];
var products = [];


function getProductList(callback) {

    $.getJSON("/getProducts", function(result) {
        var $html = $('<ul class="products-list"></ul>');

        result.Products.forEach(function(data) {
            $html.append(createProductItem(data));
        });

        products = result.Products;

        callback($html);
    });

};


function getUserCart(callback) {

    $.getJSON("/getUserCart", function(result) {
        var $html = $('<ul class="cart-list"></ul>');


        result.Cart.forEach(function(data) {
            $html.append(createCartItem(data));
        });

        cart = result.Cart;

        callback($html);

    });

};

function createCartItem(data) {
    var $elem = '<li class="cart-list-item"' +
        'id="' + data._id + '">' +
        '<div>' + data.name + '</div>' +
        '</li>';

    $elem = $($elem);

    //eliminar producto de la canasta
    var $button = $('<button ' + ' id="' + data._id + '" ' + '> Eliminar </button>').click(function(e) {
        //primero se busca por id y despues por clase todo junto
        //para tomar los elementos que aplican a los dos criterios
        //.first() es para tomar el primero si hay varios items que apliquen al mismo criterio, ej 2 elementos de carrito con bateria arduino
        $('#'+data._id+'.cart-list-item').first().remove();


        //aca falta enviarle al server este producto para q lo ELIMINE del carrito de este usuario
        //USAR AJAXS post
    });

    $elem.append($button);

    return $elem;
};

function createProductItem(data) {
    var $elem = '<li class="products-list-item"' +
        'id="' + data._id + '">' +
        '<div>' + data.name + '</div>'
    '</li>';

    $elem = $($elem);

    //agregar prodcuto a la canasta
    var $button = $('<button ' + ' id="' + data._id + '" ' + '> Agregar al Carrito </button>').click(function(e) {
        var $elem = $(this);
        products.forEach(function(value) {
            if (value._id === $elem.attr('id')) {
                cart.push(value);
                $('.cart-list').append(createCartItem(value));
                //aca falta enviarle al server este producto para q lo agrege al carrito de este usuario
                //
                //USAR AJAXS post
            }
        });
    });

    $elem.append($button);
    return $elem;
};


$(document).ready(function() {

    getProductList(function(dom) {
        $('.products-module').append(dom);
    });

    getUserCart(function(dom) {
        $('.cart-module').append(dom);
    });

});