/**
 * Fasecolda.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	cod_fasecolda: {
  		type : 'string',
  		required : true,
  		unique : true
  	},
	marca_vehiculo: {
		type : 'string'
	},
	clase_vehiculo: {
		type : 'string',
		defaultsTo: 'AUTOMOVIL'
	},
	referencia_vehiculo: {
		type : 'string'
	},
	peso_vehiculo: {
		type : 'integer'
	}, 
	servicio_vehiculo: {
		type : 'string',
		defaultsTo: 'Particular'
	},
	bcpp_vehiculo: {
		type : 'integer'
	},
	vehiculo_importado: {
		type : 'boolean',
		defaultsTo: true
	},
	potencia_vehiculo: {
		type : 'integer',
		defaultsTo: 0
	},
	tipo_caja: {
		type : 'string',
		defaultsTo : 'MT'
	},
	cilindrada: {
		type : 'integer'
	},
	nacionalidad_vehiculo: {
		type : 'string'
	},
	capacidad_pasajeros: {
		type : 'integer'
	},
	capacidad_carga: {
		type : 'integer'
	},
	ejes_vehiculo: {
		type : 'integer'
	},
	estado_vehiculo: {
		type : 'string',
		defaultsTo : 'Activo'
	}
  }
};

