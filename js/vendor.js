$( "document" ).ready(function(){
	console.log( "GOL!" );

// ACCIONES
	// Accion => Muestra la siguiente carta
	$( "input.elegir" ).click(function(){
		$( ".juguemos .elegida" ).fadeIn();
		elegir();
	});

// FUNCION
	// Funcion => carta random
	var elegir = function(){
		var carta = $("div.cartas > p").length;
		$( "div.cartas > p" ).removeClass("cartaActiva");
		// $( "div.cartas > p.cartaPasada" ).remove();
		var x = Math.floor((Math.random() * carta) + 1);
		$("div.cartas > p:nth-child(" + x + ")").addClass("cartaActiva");
		// $("div.cartas > p:nth-child(" + x + ")").addClass("cartaPasada");
		$( ".elegida strong" ).html( $( "div.cartas > p.cartaActiva" ).html() );
		console.log( "Carta: " + $( "div.cartas > p.cartaActiva" ).html() );
		// imprime la imagen
		$( ".elegida .imagen" ).html( "<img src='./imagenes/cartas/"+ $( "div.cartas > p.cartaActiva" ).html().replace( " " , "" ) +".jpg' >" );
	};

// FOR
	// For => imprime las cartas
	var imprimeCartas = function(){
		var pinta = $( ".pinta" ).html();
		for( numeroCarta = 1; numeroCarta <= 13; numeroCarta++ ) {
			switch( numeroCarta ) {
				case 11:
					var numeroCarta = "J";
					$( ".cartas" ).append( "<p>" + numeroCarta + " " + pinta + "</p>" );
					var numeroCarta = "11";
					break;
				case 12:
					var numeroCarta = "Q";
					$( ".cartas" ).append( "<p>" + numeroCarta + " " + pinta + "</p>" );
					var numeroCarta = "12";
					break;
				case 13:
					var numeroCarta = "K";
					$( ".cartas" ).append( "<p>" + numeroCarta + " " + pinta + "</p>" );
					var numeroCarta = "13";
					if ( $( ".pinta" ).html() == "corazones" ){
						$( ".pinta" ).html( "espadas" );
						imprimeCartas();
					} else if ( $( ".pinta" ).html() == "espadas" ){
						$( ".pinta" ).html( "diamantes" );
						imprimeCartas();
					} else if ( $( ".pinta" ).html() == "diamantes" ){
						$( ".pinta" ).html( "treboles" );
						imprimeCartas();
					};
					break;
				default:
					$( ".cartas" ).append( "<p>" + numeroCarta + " " + pinta + "</p>" );
			};
		};
	};imprimeCartas();

});
