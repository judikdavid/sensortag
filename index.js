var SensorTag = require('sensortag');

SensorTag.discover(function(sensorTag){
  console.log(sensorTag.toString());
  sensorTag.connect(function(){
    sensorTag.discoverServicesAndCharacteristics(function(callback){
      console.log('set');
      //sensorTag.enableIrTemperature();
      //sensorTag.notifyIrTemperature(logTemp);
      //sensorTag.on('irTemperatureChange',logTemp);
      //sensorTag.enableGyroscope();
      //sensorTag.notifyGyroscope(logGyro);
      //sensorTag.on('gyroscopeChange',logGyro);
      //sensorTag.enableAccelerometer();
      //sensorTag.notifyAccelerometer(logAccelero);
      //sensorTag.on('accelerometerChange',logAccelero);
      sensorTag.enableBarometricPressure();
      sensorTag.notifyBarometricPressure(logBaro);
      sensorTag.on('barometricPressureChange',logBaro);
      //sensorTag.notifySimpleKey(logKey);
      //sensorTag.on('simpleKeyChange', logKey);
      //sensorTag.enableHumidity();
      //sensorTag.notifyHumidity(logHumi);
      //sensorTag.on('humidityChange',logHumi);
    });

    function logTemp(objectTemperature,ambientTemperature){
      if(objectTemperature!=undefined) console.log('readIrTemperature: objectTemperature='+objectTemperature);
      if(ambientTemperature!=undefined) console.log('readIrTemperature: ambientTemperature='+ambientTemperature);
    }

    function logGyro(x, y, z){
      console.log(x, y, z);
    }

    function logAccelero(x, y, z){
      console.log(x, y, z);
    }

    function logBaro(pressure){
      console.log(pressure);
    }

    function logKey(left, right){
      console.log(left, right); 
    }

    function logHumi(temperature, humidity){
      console.log(temperature, humidity); 
    }
  });
});
