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

    //aqui se eliminan los productos del carrito
    var $button = $('<button ' + ' id="' + data._id + '" ' + '> Eliminar </button>').click(function(e) {

        //1ro se busca el id del producto y luego su clase
        //toma estos elementos y
        //en el caso que haya mas de uno, .first() toma el primero

        $('#' + data._id + '.cart-list-item').first().remove();


        //$.ajax(url, {method:"POST"})
        $.ajax("/addproductcart", {
            method: "POST",
            success: function(data) {
                console.log(data)
            }
        })
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

    //agrega los productos a la canasta/carrito
    var $button = $('<button ' + ' id="' + data._id + '" ' + '> Agregar al Carrito </button>').click(function(e) {
        var $elem = $(this);
        products.forEach(function(value) {
            if (value._id === $elem.attr('id')) {
                cart.push(value);
                $('.cart-list').append(createCartItem(value));

                //$.ajax(url, {method:"POST"})
                $.post("/addproductcart",{}).done(function(data) {
                    
                });
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