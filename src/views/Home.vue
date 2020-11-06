<template>
  <div class="home section">
    
    <div style="width: 100%; height: 100vh;">
      <agile :fade="true" :autoplay="true" :autoplaySpeed="5000" :speed="3000">
          <img style="height: 100vh; width: 100%;" class="slide" src="../assets/images/Slider-1.jpg"/>
          <img style="height: 100vh; width: 100%;" class="slide" src="../assets/images/Slider-2.jpg"/>
          <img style="height: 100vh; width: 100%;" class="slide" src="../assets/images/Slider-3.jpg"/>
          <img style="height: 100vh; width: 100%;" class="slide" src="../assets/images/Slider-4.jpg"/>
          <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
          <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
      </agile>
    </div>

  </div>
</template>

<script>
export default {
  created: function () {
        window.addEventListener("resize", function(){
        // tu código aquí
        console.log('La pantalla ha cambiado de tamaño: ' + screen.height);
    });
  }
};
</script>

