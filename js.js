// Declaración del módulo y del controlador. 
var app = angular.module("app",[]);
app.controller("controlador", function($scope, $http) {
    $scope.tituloBuscar = "";
    $scope.nombreUsuario = sessionStorage.getItem("nombreUsuario");
    // Esta función simula mediante la sessionStore en envío de datos al servidor.
    // Al ser una simulación no se compara con nada y podemos entrar con cualquier usuario (sin necesidad de contraseña).
    // Únicamente servirá el usuario para añadir una clave a la localstorage a la hora de agregar películas a favoritos.
    $scope.enviarLogin = function() {
        sessionStorage.getItem("nombreUsuario", $scope.nombreUsuarioLogin);
        $scope.nombreUsuario = $scope.nombreUsuarioLogin;
        $scope.descripcion = "";
        $scope.tituloBuscar = "";
    }
    // Destruye la sesión y limpia las variables necesarias para el correcto funcionamento de la app.
    $scope.cerrarSesion = function() {
        sessionStorage.removeItem("nombreUsuario");
        $scope.nombreUsuario = "";
        $scope.descripcion = "";
        $scope.tituloBuscar = "";
    }
    // Aquí realizamos la petición de los datos según el título de la película.
    // Se comprueba que no existan errores y que la película exista.
    // Además controla que la película exista ya o no en favoritos, comprobando la localStorage.
    $scope.recuperarPelicula = function() {
        $http({
            method: 'GET', 
            url: 'http://www.omdbapi.com/?apikey=f12ba140&plot=full&r=json&t=' + $scope.tituloBuscar
        }).then(function(value) {
            if (value.data.Response == "True"){
                $scope.titulo = value.data.Title;
                $scope.descripcion = value.data.Plot;
                $scope.ano = value.data.Year;
                $scope.director = value.data.Director;
                $scope.pais = value.data.Country;
                $scope.imagen = value.data.Poster;
                if (!localStorage.getItem($scope.nombreUsuario + "-" + $scope.titulo)) {
                    $scope.fav = true;
                } else {
                    $scope.fav = false;
                }
            } else {
                alerta("no-pelicula-alert");
                $scope.descripcion = "";
            }
        }).catch(function(value) {
            alerta("error-alert");
            $scope.descripcion = "";
        });
    }
    // Añade o quita la película actual en favoritos. Si no hay usuario logueado no es posible gestionar los favoritos.
    $scope.favorito = function() {
        if (!$scope.nombreUsuario){
            alerta("no-login-alert");
        } else {
            if (!localStorage.getItem($scope.nombreUsuario + "-" + $scope.titulo)) {
                localStorage.setItem($scope.nombreUsuario + "-" + $scope.titulo, $scope.titulo);
                $scope.fav = false;
            } else {
                localStorage.removeItem($scope.nombreUsuario + "-" + $scope.titulo);
                $scope.fav = true;
            }
        }
    }
});


// Función para llamar a la alerta de bootstrap con una pequeña animación
function alerta(id){
    $("#" + id).alert();
    $("#" + id).fadeTo(3000, 400).slideUp(400, function(){
        $("#" + id).slideUp(400);
    }); 
}