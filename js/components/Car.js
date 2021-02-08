class Car {
    constructor (tank, consumption) {
        this.engine = false;
        this.tank = tank;
        this.consumption = consumption;
        this.mileage = 0;
    }

    turnOn() {
       // if (!this.engine) {
           this.engine = true;
           console.log('Variklis ijungtas');
      //  }
    }
    turnOff() {
        // if (!this.engine) {
            this.engine = false;
            console.log('Variklis isjungtas');
       //  }
     }
    drive(distance) {
        if (!this.engine) {
            console.log('Norint vaziuoti - ijunk varikli');
            return false;
        }

        const maxDistance = this.tank / this.consumption * 100;
        if (maxDistance >= distance) {
            this.mileage += distance;
            this.tank -= distance * this.consumption / 100;
            console.log('Nuvaziavo: ', distance);
;        } else {
        this.mileage += maxDistance;
        console.log('Nuvaziavo: ', maxDistance);
        this.tank = 0;
        this.turnOff();
    console.log(`Bake per mazai norimam atstumui: nuvaziavo ${maxDistance} ir liko nenuvaziuoti ${distance - maxDistance}`);   
        }
    }
}

export { Car }

        // this.rida += distance;
        // const km1 =  this.ryja / 100; 
        // console.log(km1);//kiek riekia vienam km
        
        // // const 
        // // distance * km1 //kiek reikia kuro tai distancei
        // //skaicuoti kuro likuti
        // //jei kuro nepakanka nuvaziuoti paduotam atstumui - nuvaziuoti kiek galima
    




