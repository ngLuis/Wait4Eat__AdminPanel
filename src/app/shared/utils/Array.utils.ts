import { Utils } from './Utils.class';

export class ArrayUtils extends Utils {

    constructor(){
        super();
    }

    public static getLastInsertId(collection) {
        let idToInsert = 1;
        collection.map( element => {
          if (idToInsert <= element.id) idToInsert++
        });
        return idToInsert;
    }
}