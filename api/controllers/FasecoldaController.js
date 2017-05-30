/**
 * FasecoldaController
 *
 * @description :: Server-side logic for managing fasecoldas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	uploadcsv: function (req, res) {
		req.file('filefase').upload(function(err, files){
			if(err)
				return res.serverError(err);
			else{
				//Converter Class
				var Converter = require("csvtojson").Converter;

				var fs=require("fs"); 
				//CSV File Path or CSV String or Readable Stream Object

				//new converter instance
				var csvConverter=new Converter({});

				//end_parsed will be emitted once parsing finished
				csvConverter.on("end_parsed",function(jsonObj){
					var arrToSend = [];
					var objAuto = {};
					for(var i = 0, c = jsonObj.length; i < c; i++){
						var esteAuto = jsonObj[i];
						objAuto = {
							"cod_fasecolda": esteAuto.Codigo,
							"marca_vehiculo": esteAuto.Marca,
							"clase_vehiculo": esteAuto.Clase,
							"referencia_vehiculo": esteAuto.Marca + " " + esteAuto.Referencia1 + " " + esteAuto.Referencia2 + " " + esteAuto.Referencia3,
							"peso_vehiculo": esteAuto.Peso,
							"servicio_vehiculo": esteAuto.IdServicio,
							"bcpp_vehiculo": esteAuto.Bcpp,
							"vehiculo_importado": (esteAuto.Importado == 1) ? true : false,
							"potencia_vehiculo": esteAuto.Potencia,
							"tipo_caja": esteAuto.TipoCaja,
							"cilindrada": esteAuto.Cilindraje,
							"nacionalidad_vehiculo": esteAuto.Nacionalidad,
							"capacidad_pasajeros": esteAuto.CapacidadPasajeros,
							"capacidad_carga": esteAuto.CapacidadCarga,
							"ejes_vehiculo": esteAuto.Ejes,
							"estado_vehiculo": esteAuto.Estado
						}
						arrToSend.push(objAuto);
					}
				    Fasecolda.create(arrToSend).exec(function (err, respData){
					  if (err) { return res.serverError(err); }

					  sails.log(respData.id);
					  return res.json({
							message : files.length + ' archivo subido correctamente',
							files: files,
							data : respData
						});
					});
				});

				//read from file
				fs.createReadStream(files[0].fd).pipe(csvConverter);
			}
		})
	},
	findby: function(req, res){
		var objRequest = req.body;
		
		Fasecolda.find({
			or : [
			    { cod_fasecolda: {'like' : "%"+objRequest.option+"%"} },
			    { referencia_vehiculo: {'like' : "%"+objRequest.option+"%"} }
			],
			limit : objRequest.limit
		}).exec(function (err, objReq){
		  if (err) {
		    return res.serverError(err);
		  }
		  
		  return res.json(objReq);
		});
	}
};

