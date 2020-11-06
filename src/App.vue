<template>
  <div id="app">
    <div v-if="revista">
          <Brochure/>
    </div>
    <div v-else>
      
      <nav class=" menu-movil navbar navbar-expand-lg ocultar-pc ocultar-movil ver-movil-menu">
        <router-link :to="{ name: 'Home'}">
          <img alt="Logo Mao" style="width: 150px;" class="logo-menu" src="./assets/images/logo.png">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li>
              <router-link :to="{ name: 'Quienes_somos'}" active-class=" active"> QUIENES SOMOS</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Amenidades'}" active-class="active"> AMENIDADES </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Departamentos'}" active-class="active"> DEPARTAMENTOS </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Ubicacion'}" active-class="active"> UBICACIÓN </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Contacto'}" active-class="active"> CONTACTO </router-link>
            </li>
            <li style="border-top: 1px solid #fff; padding-top: 5px;">
              <router-link :to="{  name: 'Brochure'}" target='_blank' active-class="active"> Ver Brochure </router-link>
            </li>
            <li>
              <a href="/files/Brochure-MAO.pdf" download>Descargar Brochure</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav class="menu p-5 ocultar-movil" id="_menu" :style="{ margin: margin_menu }">
          <div class="lineas-menu"> 
            <img src="./assets/images/lineas-menu.png" alt="">
          </div>
          <div class="mb-5">
            <router-link :to="{ name: 'Home'}">
              <img alt="Logo Mao" class="logo-menu" src="./assets/images/logo.png">
            </router-link>
          </div>
          <div class="row text-center">
            <div class="col-6 idiomas espanol">
              <a href="/">ESPAÑOL</a>
            </div>
            <div class="col-6 idiomas ingles">
              <a href="/">INGLÉS</a>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="opciones text-center text-md-right">
                <ul>
                  <li>
                    <router-link :to="{ name: 'Quienes_somos'}" active-class="active"> QUIENES SOMOS</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Amenidades'}" active-class="active"> AMENIDADES </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Departamentos'}" active-class="active"> DEPARTAMENTOS </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Ubicacion'}" active-class="active"> UBICACIÓN </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Contacto'}" active-class="active"> CONTACTO </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="contenedor-brochure text-center">
            <div class="col-12">
              <router-link :to="{  name: 'Brochure'}" target='_blank' active-class="active">
                Ver Brochure
              </router-link>
              <br>
              <a href="/files/Brochure-MAO.pdf" download>Descargar Brochure</a>
            </div>
          </div>
          <div class="boton-avance-obra">
            <a href="/#">AVANCE DE OBRA</a>
          </div>
      </nav>
      <div class="flecha ocultar-movil" :style="{ marginLeft: left_menu, transform: rotate }" @click="ocultar_menu()">
        <div>
          <i class="fas fa-angle-left"></i>
        </div>
      </div>
      <div class="contenedor" :style="{ width: width_contenedor, left: left_menu }">
        <transition name="component-fade" mode="out-in">
          <router-view/>
        </transition>
        
        <footer>
          <div class="footer">
            <div class="row d-flex justify-content-center">
              <div class="col-12 col-md-8 text-center datos">
                <img alt="Logo Mao" class="logo-menu" src="./assets/images/logo-footer.png">
                <div class="col-12 row d-flex justify-content-between mt-5">
                  <div class="col-md-4 mt-0 col-12 text-center">
                    <i class="far fa-envelope fa-2x mb-2"></i>
                    <br>
                    info@maoluxurycondos.mx
                  </div>
                  <div class="col-md-4 mt-md-0 mt-4 col-12 text-center ">
                    <i class="fas fa-phone fa-2x mb-2"></i>
                    <br>
                    (998) 123-4567
                  </div>
                  <div class="col-md-4 mt-md-0 mt-4 col-12 text-center">
                    <i class="fas fa-map-marker-alt fa-2x mb-2"></i>
                    <br>
                    POK TA POK KM 7.5 BLVD. KUKULCAN
                    <br>
                    ZONA HOTELERA 77500 CANCÚN,
                    <br>
                    QUINTANA ROO
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="copy">
              <div class="col-12 text-center p-2">
                <b><a href="#">Aviso de privacidad</a></b> | Copyright © 2020.Todos los derechos reservados.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Brochure from '../src/views/Brochure';

export default {
  components: { Brochure },
  data() {
      return {
        revista: false,
        margin_menu: "0 0 0 -381px",
        width_contenedor: "100%",
        left_menu: "0%",
        rotate: "rotate(180deg)",
        ver_menu: true,
      };
  },
  methods: {
    ocultar_menu() {

      if(this.ver_menu) {
        this.margin_menu= "0";
        this.width_contenedor = "80%";
        this.left_menu =  "20%";
        this.rotate = "rotate(0deg)";

      }

      else {
        this.margin_menu = "0 0 0 -381px";
        this.width_contenedor = "100%";
        this.left_menu =  "0%";
        this.rotate = "rotate(180deg)";

      }

      this.ver_menu = !this.ver_menu;
      
    }
  },
  created: function () {

    var pathname = window.location.pathname;

    if(pathname === '/ver-brochure') {
      this.revista = true;      
    }

    document.addEventListener("DOMContentLoaded", function () { 
      let menu = document.getElementById('_menu');
      menu.style.height = `${screen.height}`;
      console.log("el tamano es: "+ screen.height)
      // console.log("todo bien: ". screen.height)
    });

        
        window.addEventListener("resize", function(){
        // tu código aquí
        console.log('La pantalla ha cambiado de tamaño: ' + screen.height);
    });
  }
};
</script>


<style lang="scss">

.container[data-v-6c371404]
{
  margin: 0px !important;
}
  .component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .7s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
  @import "./assets/styles/custom.scss";
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
