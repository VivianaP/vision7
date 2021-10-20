/**
 * Servicio.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    codigoQR: {
      type: 'string',
      required: true
    },

    Direccion: {
      type: 'string',
    },

    tipoSilla: {
      type: 'string',
      required: true
    },

    estadoInicial: {
      type: 'string',
      required: true
    },

    costoTotal: {
      type: 'string',
      required: true
    },

    anticipo:  {
      type: 'string',
      required: true
    }, 

    evidenciaAnticio:  {
      type: 'string',
      required: true
    }, 

    formaPagp:  {
      type: 'string',
      required: true
    }, 

    firmaAprobacion:  {
      type: 'string',
      required: true
    }, 

    responsableCliente:  {
      type: 'string',
      required: true
    }, 

    cargoResponsable:  {
      type: 'string',
      required: true
    },

    estadoFinal: {
      type: 'string',
      required: true
    },

    saldoPendiente: {
      type: 'string',
      required: true
    },

    descuento: {
      type: 'string',
      required: true
    },

    fechaPago: {
      type: 'number'
    },

    firmaFinal: {
      type: 'string',
      required: true
    },


    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    clienteServicio : {
      model: 'cliente'
    },

    usuarioServicio : {
      model: 'usuario'
    },

    tipos: {
      collection: 'tipoMantenimiento',
      via: 'servicioMantenimiento',
    },
  },

};

