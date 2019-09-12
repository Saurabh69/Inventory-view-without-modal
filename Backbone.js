$(document).ready(function() {
    var prodname;
    var prodprice;
    var prodselect;
    var prodbrand;
    var prodimage;
    var new_id = 0;
    var f = 1;
    // var data = JSON.parse(localStorage.getItem('data'));

    var Product = Backbone.Model.extend({
        defaults: {
            productname: 'Soap',
            price: '24',
            productselect: 'Beauty',
            pimg: 'img.jpg',
            brand: 'Lux',
            id: 0

        }
    });

    var Products = Backbone.Collection.extend({
        model: Product
    });

    var make_product = new Products([
        new Product({ productname: 'Soap', price: '24', productselect: 'Beauty', pimg: 'img.jpg', brand: 'Lux', id: '0' }),
        new Product({ productname: 'Book', price: '30', productselect: 'Education', pimg: 'img2.jpg', brand: 'Classmate', id: '1' }),
        new Product({ productname: 'Battery', price: '10', productselect: 'Electronics', pimg: 'img3.jpg', brand: 'Eveready', id: '2' })

    ]);

    var BaseView = Backbone.View.extend({
        model: make_product,
        el: '#main0',
        events: {
            'click #loginSubmit': 'FunctionAdd',
        },

        initialize: function() {
            this.render_base();
        },

        /*ProductAdd: function() {
            alert("Product Added");
            prodname = $("#productname").val();
            prodprice = $("#price").val();
            prodselect = $("#productselect").val();
            prodbrand = $("#brand").val();
            prodimage = $("#pimg").val();
            
            alert(prodname);
            this.FunctionAdd();
        },*/

        FunctionAdd: function() {
        	new_id = 0;
            prodname = $("#productname").val();
            prodprice = $("#price").val();
            prodselect = $("#category").val();
            prodbrand = $("#brand").val();
            prodimage = $("#pimg").val();
            make_product.each(function(data){new_id++;},this);
            alert(new_id);
            //alert(prodselect);
	        if (prodname != ' ' && prodprice != ' ' && prodselect != ' ' && prodbrand != ' ' && prodimage != ' '){
		            var new_product = new Product({ productname: prodname, price: prodprice, productselect: prodselect, pimg: prodimage, brand: prodbrand, id: new_id });
		            make_product.add(new_product);
					make_product.each(function(data){alert(data.get('productname'));},this);
            //$('#row1').append('<div class="col-sm-3"><div class="panel panel-primary" id="' + new_id + '"><div class="panel-body"><img src="' + prodimage + '" class="img-responsive" style="width:100%" alt="Image"></div><center><div class="panel-footer" style="padding-top: 0px"><h3>' + prodname + '</h3>Price: <b>' + prodprice + '</b><br>Brand: <b>' + prodbrand + '</b><br>Category: <b>' + prodselect + '</b></div><a href="#" class="model_form btn btn-sm btn-success"> <span title="Edit" class="glyphicon glyphicon-pencil"></span> Edit </a>&nbsp;&nbsp;&nbsp;<a href="#" class="tip delete_check btn btn-sm btn-danger "><span title="Delete" class="glyphicon glyphicon-remove"></span> Delete </a></div></div>');
        	}
        	$("#productname").val(" ");
            $("#price").val(" ");
            $("#category").val(" ");
            $("#brand").val(" ");
            $("#pimg").val(" ");

        },

        render_base: function() {
            var template_base = _.template($('#page0').html(), {});
            this.$el.html(template_base);
        },
    });





    var FirstView = Backbone.View.extend({
        model: make_product,
        el: '#main0',
        events: {
            'click #search': 'Filter',
            'click #add': 'AddProduct',
            // 'click #page_1': 'page_1',
            // 'click #page_2': 'page_2',
        },
        initialize: function() {
            var template_first = _.template($('#page1').html(), {});
            this.$el.html(template_first);

            //var new_product = new Product({});
            // make_product.add(new_product);
            // var img_var = "<img src='" + new_product.get('pimg').replace(/^.*\\/, "") + "' class='img-responsive' style='width:100%' alt='Image'>"
            make_product.each(function(newproduct) {
            	 $('#row1').append('<div class="col-sm-3"><div class="panel panel-primary" id="' + newproduct.get('id') + '"><div class="panel-body"><img src="img2.jpg" class="img-responsive" style="width:100%" alt="Image"></div><center><div class="panel-footer" style="padding-top: 0px"><h3>' + newproduct.get('productname') + '</h3>Price: <b>' + newproduct.get('price') + '</b><br>Brand: <b>' + newproduct.get('brand') + '</b><br>Category: <b>' + newproduct.get('productselect') + '</b></div><a href="#" class="model_form btn btn-sm btn-success"> <span title="Edit" class="glyphicon glyphicon-pencil"></span> Edit </a>&nbsp;&nbsp;&nbsp;<a href="#" class="tip delete_check btn btn-sm btn-danger "><span title="Delete" class="glyphicon glyphicon-remove"></span> Delete </a></div></div>'); 
            }, this);

        },

        // Filter: function() {
        //     $("#0").hide();
        //     $("#1").hide();
        //     alert("Filtered results");
        // },

        // AddProduct: function() {
        //     alert("Product Added");
        //     prodname = $("#productname").val();
        //     prodprice = $("#price").val();
        //     prodselect = $("#productselect").val();
        //     prodbrand = $("#brand").val();
        //     prodimage = $("#pimg").val();
        //     var new_id = 0;
        //     alert(prodname);
        //     this.Addfunction();


        // },

        // Addfunction: function() {
        //     prodname = $("#productname").val();
        //     prodprice = $("#price").val();
        //     prodselect = $("#productselect").val();
        //     prodbrand = $("#brand").val();
        //     prodimage = $("#pimg").val();
        //     new_id++;
        //     alert(prodselect);
        //     var new_product = new Product({ productname: prodname, price: prodprice, productselect: prodselect, brand: prodbrand, pimg: prodimage, id: new_id });
        //     make_product.add(new_product);

        //     $('#row1').append('<div class="col-sm-3"><div class="panel panel-primary" id="' + new_id + '"><div class="panel-body"><img src="' + prodimage + '" class="img-responsive" style="width:100%" alt="Image"></div><center><div class="panel-footer" style="padding-top: 0px"><h3>' + prodname + '</h3>Price: <b>' + prodprice + '</b><br>Brand: <b>' + prodbrand + '</b><br>Category: <b>' + prodselect + '</b></div><a href="#" class="model_form btn btn-sm btn-success"> <span title="Edit" class="glyphicon glyphicon-pencil"></span> Edit </a>&nbsp;&nbsp;&nbsp;<a href="#" class="tip delete_check btn btn-sm btn-danger "><span title="Delete" class="glyphicon glyphicon-remove"></span> Delete </a></div></div>');

        //     // make_product.each(function(newproduct) { 

        //     // $('#row1').append('<div class="col-sm-3"><div class="panel panel-primary" id="' + new_product.get('id') + '"><div class="panel-body"><img src="img2.jpg" class="img-responsive" style="width:100%" alt="Image"></div><center><div class="panel-footer" style="padding-top: 0px"><h3>' + new_product.get('productname') + '</h3>Price: <b>' + new_product.get('price') + '</b><br>Brand: <b>' + new_product.get('brand') + '</b><br>Category: <b>' + new_product.get('productselect') + '</b></div><a href="#" class="model_form btn btn-sm btn-success"> <span title="Edit" class="glyphicon glyphicon-pencil"></span> Edit </a>&nbsp;&nbsp;&nbsp;<a href="#" class="tip delete_check btn btn-sm btn-danger "><span title="Delete" class="glyphicon glyphicon-remove"></span> Delete </a></div></div>');

        //     // }, this);

        // },

        render_first: function() {
            var template_first = _.template($('#page1').html(), {});
            this.$el.html(template_first);
        },
        // page_1: function() {
        //     alert(data[0]);
        // },
        // page_2: function() {
        //     this.$("#page2");
        // }

    });

    /*ar SecondView = Backbone.View.extend({
                model: Makeproduct,
                el: '#main2', 
                
                initialize : function(){
                    var template_first=_.template($('#page2').html(),{});
                    this.$el.html(template_first);
                    },
                
                
            });*/

    var MyRouter = Backbone.Router.extend({
        routes: {
            "": "firstpage",
            "page0": "firstpage",
            "page1": "secondpage",
        },
        firstpage: function() {
            new BaseView();
        },
        secondpage: function() {
            new FirstView();
        }

    });

    var router = new MyRouter();
    Backbone.history.start();

});