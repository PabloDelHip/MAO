<template>
    <div class="home section">
        <Modal v-model="showModal" title="">
            <img :src="img_modal" style="width: 100%;" alt="Planta Conjunto">
        </Modal>
        <Modal v-model="show_modal_info" title="">
            <img :src="img_modal" style="width: 100%;" alt="Planta Conjunto">
        </Modal>
        <div class="datos-departamento-movil ocultar-pc ver-movil " style="width: 100%;">
            <div class="imagen-pequena movil p-3 text-center">
                <span class="texto-imagen-pequena">{{ texto_depa }}</span>
                <img :src="imagen_pequena" @click="imagenDepartamento()" alt="departamento-frontal">
                <div class="mt-md-4 mt-0 col-12">
                    <div v-for="piso in ver_piso" :key="piso.id" class="col-12 p-0 text-center detalles-niveles">
                        <h5 class="p-2">{{ piso.nivel }}</h5>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">NOMBRE</th>
                                <th scope="col">M²</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="departamento in piso.dpts" :key="departamento.id"  >
                                    <td scope="row">{{ departamento.nombre }}</td>
                                    <td>{{ departamento.m_cuadrados }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div style="position: absolute; width: 100%;" v-if="ver_departamento">

            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 4000 2500" style="enable-background:new 0 0 4000 2500;" xml:space="preserve">
                <polyline @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_seis)" class="st0" points="2000,570.3 2000.5,725.7 695,725.7 695,709.7 703.7,709.7 703.7,643.7 747.7,643.7 748.3,567.7 695,495.7 1360.3,495.7 1387,567.7 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_cinco)" class="st0" points="695,725.7 1360,725.7 1388,787 2000.5,787 2000,956 695,956 695,939 705,939 704,871 750,873 750,787 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_cuatro)" class="st0" points="694,953.7 1359,953.7 1387,1015 1999.5,1015 1999,1184 694,1184 694,1167 704,1167 703,1099 749,1101 749,1015 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_tres)" class="st0" points="696,1185 1361,1185 1388,1228 1993,1228 1996,1417 1359,1417 696,1417 696,1399 704,1397 705,1330 747,1328 750,1228 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_dos)" class="st0" points="697,1417 1361,1417 1386,1446 1996,1446 1996,1643 697,1643 697,1629 705,1628 705,1560 749,1561 748,1446 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_uno)" class="st0" points="694,1643 1361,1643 1388,1667 2000,1667 2000,1759 1718,1759 1718,1787 1706,1787 1708,1833 607,1833 607,1756 748,1756 750,1667 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_seis)" class="st0" points="3319,495 2653,495 2627,567 2010,567 2010,725 3319,725 3319,711 3309,710 3309,641 3265,641 3264,568 "/>
                <polyline @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_cinco)" class="st0" points="2012,788 2012,954 3318,954 3318,941 3308,940 3308,871 3264,871 3262,788 3318,725 2652,725 2624,788 "/>
                <polyline @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_cuatro)" class="st0" points="2006.5,1184.5 2006.5,1008 2624,1008 2653,954 3318,954 3263,1008 3265,1101 3309,1101 3311,1169.5 3318,1169.5 3318,1184.5 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_tres)" class="st0" points="2651,1183.5 3318.3,1183.5 3263.7,1227 3263,1327.7 3309,1327.7 3309.7,1399 3318.3,1399 3318.3,1412.3 2651,1415.7 2004.3,1415 2004.3,1227 2623.7,1227 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_dos)" class="st0" points="2653,1415 3319,1415 3264,1447 3265,1564 3309,1564 3309,1629 3319,1629 3319,1643 2007,1643 2007,1447 2628,1447 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_uno)" class="st0" points="2652,1643 3319,1643 3262,1669 3264,1760 3404,1760 3404,1836 2301,1836 2301,1758 2007,1760 2007,1666 2629,1666 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_cero)" class="st0" points="2464.5,1833.5 2464.5,2049 3416.5,2049.5 3416.5,1833.5 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_cero)" class="st0" points="1549.5,1833 599,1834 599,2049 1560,2049 "/>
            </svg>
        </div>

        <div style="position: absolute; width: 100%;" v-if="!ver_departamento">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 4000 2500" style="enable-background:new 0 0 4000 2500;" xml:space="preserve">
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_seis)" class="st0" points="1765,661 1722.5,641.5 2395.5,302 2395.5,479.5 1722.5,776 1722.5,732 1764,715 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_cinco)" class="st0" points="1723,775.7 2395.7,480.3 2395.7,653.7 1723,908.3 1723,873 1763.7,857 1764.3,793 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_cuatro)" class="st0" points="1721.7,915 2395.7,665 2395.7,838.3 1721.7,1047.7 1721.7,1011.7 1765.7,999 1764.3,927.7 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_tres)" class="st0" points="1721,1055 2395,849.7 2395,1023 1721,1187 1721,1152.3 1764.3,1140.3 1764.3,1067 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_dos)" class="st0" points="2395.7,1034.3 1721,1195 1764.3,1203.7 1764.3,1281.7 1721,1293 1721,1325 2336.3,1220.3 2337,1191 2356.3,1187.7 2395.7,1198.3 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_seis)" class="st0" points="2417,459 2417,290 2992,0 3454,0 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_cinco)" class="st0" points="2419,645 2419,471 3490,0 3761,0 3769,138 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_cuatro)" class="st0" points="2417,832 2417,658 3767,158 3779,211 3779,472 3768,430 3770,417 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_tres)" class="st0" points="2417,1017 2417,844 3767,433 3779,477 3779,737 3767,694 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_dos)" class="st0" points="2419,1031 3767,709 3777,744 3777,1007 3768,974 2419,1206 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_uno)" class="st0" points="3768.3,985.7 3779,1012.3 3779,1263.7 3754.3,1223.7 2387,1376.3 2357,1372.3 2357,1188.3 2415,1205.7 2415.7,1214.3 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_uno)" class="st0" points="1721.5,1333.5 2338,1229 2338,1360 2241,1339.5 2059.5,1360 2056,1425 1721.5,1427.5 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_cero)" class="st0" points="3755.3,1236.3 3755.3,1451.7 3629,1336.7 3629,1450.3 2685,1504.3 2685,1354 "/>
                <polygon @click="showModalDate()" @mouseleave="show_box_info = false" @mouseover="infoDepartamentos(pisos[0].piso_cero)" class="st0" points="1665.5,1466 1665.5,1550 1928,1550 2038,1480 2038,1426.5 "/>
            </svg>
        </div>

        
        <div class="imagen-pequena ocultar-movil">
            <img :src="imagen_pequena" @click="imagenDepartamento()" alt="departamento-frontal">
            <span class="texto-imagen-pequena">{{ texto_depa }}</span>
                <transition name="fade">
                    <div v-if="show_box_info" class="mt-4 row">
                        <div v-for="piso in ver_piso" :key="piso.id" class="col-12 p-0 text-center detalles-niveles">
                            <h5>{{ piso.nivel }}</h5>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                    <th scope="col">Departamento</th>
                                    <th scope="col">M²</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="departamento in piso.dpts" :key="departamento.id"  >
                                        <td scope="row">{{ departamento.nombre }}</td>
                                        <td>{{ departamento.m_cuadrados }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </transition>
        </div>
        <div class="row m-0 imagen-departamento text-right">
            <img class="img-fondo" :src="imagen_grande" alt="departamento-frontal">
        </div>

        <section class="ocultar-movil">
            <div class="row p-5 col-12 imagenes-plantas d-flex justify-content-between" data-aos="fade-down" data-aos-once="true" data-aos-duration="1200" data-aos-anchor-position ="top-bottom">
                <div class="col-2 text-center">
                    <img @click="openModal('images/plantas/big/Planta Conjunto.png')" src="../assets/images/plantas/Planta Conjunto.png" alt="Planta Conjunto">
                    <h4 class="mt-3">Conjunto</h4>
                </div>
                <div class="col-2 text-center">
                    <img @click="openModal('images/plantas/big/Planta Lobby.png')"  src="../assets/images/plantas/Planta Lobby.png" alt="Planta Lobby">
                    <h4 class="mt-3">Lobby</h4>
                </div>
                <div class="col-2 text-center">
                    <img @click="openModal('images/plantas/big/Planta Nivel 2.png')" src="../assets/images/plantas/Planta Nivel 2.png" alt="Planta Nivel 2">
                    <h4 class="mt-3">Planta nivel 2</h4>
                </div>
                <div class="col-2 text-center">
                    <img @click="openModal('images/plantas/big/Planta Nivel 3-7.png')" src="../assets/images/plantas/Planta Nivel 3-7.png" alt="Planta Nivel 3-7">
                    <h4 class="mt-3">Planta nivel 3-7</h4>
                </div>
                <div class="col-2 text-center">
                    <img @click="openModal('images/plantas/big/Planta Roof Garden.png')" src="../assets/images/plantas/Planta Roof Garden.png" alt="Planta Roof Garden">
                    <h4 class="mt-3">Roof Garden</h4>
                </div>
            </div>
        </section>

        <section>
            <div class="row pr-md-5 pr-0 texto-extra-departamentos m-0">
                <div class="col-md-4 col-12 fondo-mujer-departamento" data-aos="fade-down" data-aos-once="true" data-aos-duration="1200" data-aos-delay="500">
                </div>
                <div class="col-12 col-md-8 textos p-0 pr-2">
                    <div class="fondo-lineas-amarillas" ></div>
                    <div class="row justify-content-center align-items-center col-12 texto-departamentos p-md-2 m-md-2 p-0 m-0">
                        <div class="col-md-8 col-12 ">
                            <h3 class="titulo yate" data-aos="fade-down" data-aos-once="true" data-aos-duration="1200" data-aos-delay="500">
                                YACHT CLUB
                            </h3>
                            <p data-aos="fade-down" data-aos-once="true" data-aos-duration="1200" data-aos-delay="500">
                                El innovador concepto único de <b>MÃO</b>, contara con embarcaciones tipo fractional para que puedas disfrutar de las maravillas naturales que rodean Cancún desde la comodidad de tu hogar.
                            </p>
                        </div>
                    </div>
                    <div class="col-12 palmera-izquierda ocultar-movil">
                        <img src="../assets/images/palmera-izquierda.png" alt="Hoja Palmera">
                    </div>
                </div>
            </div>
        </section>
  </div>
  
</template>


<script>
import VueModal from '@kouts/vue-modal';
import '@kouts/vue-modal/dist/vue-modal.css';
export default {
    components: {
    'Modal': VueModal
  },
  data() {
        return {
            showModal: false,
            show_modal_info: false,
            show_box_info: false,
            img_modal:'',
            texto_depa: 'POSTERIOR',
            imagen_grande: require('../assets/images/amenidades/1. Fachada Frontal Diurna.jpg'),
            imagen_frontal_tmbrl: require('../assets/images/1. Fachada Frontal Diurna_tmbrl.png'),
            // imagen_pequena: require('../assets/images/Fachada-Posterior.jpg'),
            imagen_pequena: require('../assets/images/Fachada_Posterior_tmbrl.png'),
            ver_departamento: true,
            pisos: [ {
                piso_seis: [ {
                        id: 6,
                        nivel: "Nivel Siete",
                        dpts: [
                        {id:1, nombre: "701", m_cuadrados: "625.23. m²"},
                        {id:2, nombre: "702", m_cuadrados: "625.23. m²"},
                    ]
                }],
                piso_cinco: [ {
                        id: 5,
                        nivel: "Nivel Seis",
                        dpts: [
                        {id:1, nombre: "601", m_cuadrados: "625.23. m²"},
                        {id:2, nombre: "602", m_cuadrados: "625.23. m²"},
                    ]
                }],
                piso_cuatro: [ {
                        id: 4,
                        nivel: "Nivel Cinco",
                        dpts: [
                        {id:1, nombre: "501", m_cuadrados: "625.23. m²"},
                        {id:2, nombre: "502", m_cuadrados: "625.23. m²"},
                    ]
                }],
                piso_tres: [ {
                        id: 3,
                        nivel: "Nivel Cuatro",
                        dpts: [
                        {id:1, nombre: "401", m_cuadrados: "625.23. m²"},
                        {id:2, nombre: "402", m_cuadrados: "625.23. m²"},
                    ]
                }],
                piso_dos: [ {
                        id: 4,
                        nivel: "Nivel Tres",
                        dpts: [
                        {id:1, nombre: "301", m_cuadrados: "625.23. m²"},
                        {id:2, nombre: "302", m_cuadrados: "625.23. m²"},
                    ]
                }],
                piso_uno: [ {
                        id: 4,
                        nivel: "Nivel Dos",
                        dpts: [
                        {id:1, nombre: "201", m_cuadrados: "776.48. m² *"},
                        {id:1, nombre: "202", m_cuadrados: "776.48. m² *"},
                    ]
                }],
                piso_cero: [ {
                        id: 4,
                        nivel: "Nivel Uno",
                        dpts: [
                        {id:1, nombre: "GH1", m_cuadrados: "726.66. m² *"},
                        {id:1, nombre: "GH2", m_cuadrados: "726.66. m² *"},
                    ]
                }],
            },
        ],
        ver_piso: []
        }
    },
    methods: {
        infoDepartamentos(pisos){
            this.ver_piso = pisos;
            this.show_box_info = true;
        },
        imagenDepartamento(){

            if(this.ver_departamento)
            {
                this.texto_depa='FRONTAL';
                this.imagen_grande = require('../assets/images/Fachada-Posterior.jpg');
                this.imagen_pequena = require('../assets/images/1. Fachada Frontal Diurna_tmbrl.png');
            }
            else{
                this.texto_depa='POSTERIOR';
                this.imagen_grande = require('../assets/images/amenidades/1. Fachada Frontal Diurna.jpg');
                this.imagen_pequena = require('../assets/images/Fachada_Posterior_tmbrl.png');
            }

            this.ver_departamento = !this.ver_departamento;
            
        },
        openModal(img){
            console.log(img);
            this.showModal = true;
            this.img_modal = img;
        },
        showModalDate(){
            this.show_modal_info = true;
        }
    },
    created() {
        this.ver_piso = this.pisos[0].piso_uno;
    }
}
</script>

<style >
    .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
</style>


