var SensorTag = require('sensortag');

SensorTag.discover(function(sensorTag){
  console.log(sensorTag.toString());
  sensorTag.connect(function(){
    console.log('connect');
    sensorTag.discoverServicesAndCharacteristics(function(callback){
      console.log('set');
      sensorTag.enableIrTemperature();
      //device.readIrTemperature(logTemp);
      sensorTag.notifyIrTemperature(logTemp);
      sensorTag.on('irTemperatureChange',logTemp);
      //device.disableIrTemperature();
    });

    function logTemp(objectTemperature,ambientTemperature)
    {
      if(objectTemperature!=undefined) console.log('readIrTemperature: objectTemperature='+objectTemperature);
      if(ambientTemperature!=undefined) console.log('readIrTemperature: ambientTemperature='+ambientTemperature);
    }
  });
});
