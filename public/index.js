
var productillos = function(callback) {

    $.getJSON("/getproducts", function(result) {
        var html = '<div> ' +
            '<ul class="products-list">';



        result.Products.forEach(function(data) {

            var elem =

                '<li class="products-list-item"' +
                'id="' + data._id + '">' +
                '<div>' + data.name + '</div>' +
                '<div>' + '<button ' + ' id="' + data._id + '" ' + '> Comprar </button>'
            '</div>'
            '</li>';

            html += elem;
        });

        html += '</ul>' +
            '</div>';

        callback(html);
    });
};


var usrCompra = function(callback) {

    $.getJSON("/getUserCart", function(result) {
        var $html = $('<ul class="cart-list"></ul>');

        result.Cart.forEach(function(data) {

            var $elem ='<li class="cart-list-item"' +
                'id="' + data._id + '">' +
                '<div>' + data.productos + '</div>'
                '</li>'; 

                $elem = $($elem); 

            var $button = $('<div>' + '<button ' + ' id="'+ data._id +'" ' + '> Comprar </button>').click(function (e){
                  var e = $(this); 
                  e.attr('id');  
            }); 

            $elem.append($button);
        }); 

        //jquery transform
        $html = $($html);

        callback($html);
    });

};

$(document).ready(function() {
    productillos(function(dom) {
        $('.products-module').append(dom);
    });
    usrCompra(function(dom) {
        $('.cart-module').append(dom);
    });


});

// var carrito = function (callback){
//     $.getJSON("/getcompras", function (result) {
//        var html = '<div> '+
//           '<ul class="compras-list">';

//        result.Compras.forEach(function (data){
//             var elem = '<li class="compras-list-item"' +
//              'id="'+ data._id +'">' +
//              '<div>'+ data.productos + '</div>' +
//             '</li>';

//             html += elem;
//        });

//        html += '</ul>' +
//        '</div>';

//         callback(html);
//     });
// };

// carrito(function (dom){
//   $('.carrito-compras').append(dom);
// });

//Formulatio de Validación

// function validateForm() {
//         var username = document.getElementById(/*"username"*/).value;
//         var password = document.getElementById(/*"password"*/).value;
//         if (username == null || username == "") {
//             alert("Por favor, poné tu Nombre de Usuario.");
//             return false;
//         }
//         if (password == null || password == "") {
//             alert("Porque favor, poné tu contraseña.");
//             return false;
//         }
//         alert("Conectado");
//         onSuccsess(client);
//     }

//     if (password == null || password == "") {
//         alert("Porque favor, poné tu contraseña.");
//         return false;
//     }
//     alert("Conectado");
//     onSuccsess(client);
// }
