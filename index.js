import data from './data';

const newData = data.features;


class UgandaDistricts {
  constructor(data) {
    this.data = data
  }

  /**
   * getter to return a list of all objects in uganda
   */
  get allDistricts() {
    return this.getAllDisctrictObjects();
  }

  /**
   * method to extract disctricts from an array of features from geo data
   */
  getAllDisctrictObjects() {
    const allDistricts = []
    this.data.forEach(element => {
      allDistricts.push(element.properties.DNAME2014);
    });
    return allDistricts;
  }
}

const instance = new UgandaDistricts(newData);

const districtsObject = {
  "districts": instance.allDistricts
}

export default districtsObject;
