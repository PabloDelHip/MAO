<template>
  <div class="home section">
      <div style="width: 100%; height: 100vh;">
        <agile :fade="true" :autoplay="true" :autoplaySpeed="5000" :speed="3000">
            <img style="height: 100vh; width: 100%;" v-for="image in image_slider" :key="image.id" class="slide" :src="image.url_img"/>
            
            <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
            <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
        </agile>
      </div>

      <section>
        <div class="row m-0">
          <div class="col-md-4 col-12 fondo-dos-amenidades" data-aos="fade-down" data-aos-once="true" data-aos-duration="1200">
          </div>
          <div class="row d-flex justify-content-center col-md-8 col-12 texto-amenidades m-0 p-0">
            <div class="fondo-linea-azul"></div>
            <div class="col-md-9 col-12 textos p-3 p-md-5">
              
              <h3 class="titulo mt-5" data-aos="fade-down" data-aos-once="true" data-aos-duration="1200">
                AMENIDADES
              </h3>
              <p data-aos="fade-down" data-aos-once="true" data-aos-duration="1200" data-aos-delay="500">Para lograr la privacidad y la comodidad pensamos en todos los detalles, tanto estéticos como funcionales. Es por ello que el concepto cuenta con:</p>
              <ul data-aos="fade-right" data-aos-once="true" data-aos-duration="1200" data-aos-delay="500" class="lista-image mt-5">
                <li> 4 cajones techados por departamento </li>
                <li>Cuarto para choferes y/o guardaespaldas</li>
                <li>Bodega de 6.63 m2 por departamento</li>
                <li>Alberca recreativa</li>
                <li>Area de Snack</li>
                <li>Elevador para residentes y elevador de servicio</li>
                <li>Marina con 10 slips</li>
                <li>Concierge, administración y lobby</li>
                <li>Business Center</li>
                <li>Roof Garden</li>
                <li>Gimnasio</li>
                <li>Alberca semiolímpica</li>
                <li>Spa</li>
                <li>Bar</li>
                <li>Grill</li>
                <li>Área de camastros y hamacas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!-- TEXTO QUIENES SOMOS -->

      <section>
        <div class="row m-0">
          <div class="row d-flex justify-content-center col-md-8 col-12 texto-amenidades m-0 p-0">
            <div class="col-12 ocultar-movil" style="z-index: 100">
              <div class="col-3 offset-2">
                <img src="../assets/images/palmera.png" alt="palmera">
              </div>
            </div>
            <div class="col-12 img-yate" data-aos="fade-right" data-aos-once="true" data-aos-duration="1200" data-aos-anchor-position ="top-bottom">
              <img src="../assets/images/yates.png" alt="yates">
            </div>
            <div class="col-md-9 col-12 textos mt-md-5 mt-3 p-md-5 pl-4 pr-4" data-aos="fade-right" data-aos-once="true" data-aos-duration="1200" data-aos-anchor-position =" top-center ">
              <p>Relájate con la belleza y comodidad de <span>MÃO</span>, disfruta de este exclusivo desarrollo en un ambiente moderno, náutico y elegante.</p>
            </div>
          </div>
          <div class="col-4 fondo-line-azul-vertical">
          </div>
        </div>
      </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      image_slider: [ 
        {id: 1 ,url_img: require('../assets/images/amenidades/1. Fachada Frontal Diurna.jpg'), alt: 'Fachada frontal, departamento'},
        {id: 2 ,url_img: require('../assets/images/amenidades/2. Motorlobby.jpg'), alt: 'Fachada frontal, departamento'},
        {id: 3 ,url_img: require('../assets/images/amenidades/3. Recepcion.jpg'), alt: 'Fachada frontal, departamento'},
        {id: 4 ,url_img: require('../assets/images/amenidades/4. Lobby Sala de estar.jpg'), alt: 'Fachada frontal, departamento'},
        {id: 5 ,url_img: require('../assets/images/amenidades/5. Sala de juntas.jpg'), alt: 'Fachada frontal, departamento'},
        {id: 6 ,url_img: require('../assets/images/amenidades/6. Estacionamiento.jpg'), alt: 'Fachada frontal, departamento'},
        {id: 7 ,url_img: require('../assets/images/amenidades/7. Estacionamiento Lobby.jpg'), alt: 'Fachada frontal, departamento'},
        
        {id: 8 ,url_img: require('../assets/images/amenidades/8. Vestibulo Planta Baja.jpg'), alt: 'Fachada frontal, departamento'},
        {id: 9 ,url_img: require('../assets/images/amenidades/9. Cocina Planta Baja.jpg'), alt: 'Fachada frontal, departamento'},
        {id: 10 ,url_img: require('../assets/images/amenidades/10. Sala Comedor Planta Baja.jpg'), alt: 'Fachada frontal, departamento'},
        {id: 11 ,url_img: require('../assets/images/amenidades/11. Recamara Principal Planta Baja.jpg'), alt: 'Fachada frontal, departamento'},
        {id: 12 ,url_img: require('../assets/images/amenidades/12. Baño Recamara Principal Planta Baja.jpg'), alt: 'Fachada frontal, departamento'},
      ]
    }
  }
}
</script>
            


