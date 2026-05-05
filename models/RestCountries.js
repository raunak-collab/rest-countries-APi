import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
    name: {
      type: String, required: true 
    },
    flag: {
        type : String, required: true
    },
    population: {
       type : Number, required: true
    },
    region: {
       type : String, required: true
    },
    capital: {
       type : Array, required: true
    },
    subregion: {
       type : String
    },
    nativename : {
       type : Object
    },
    topLevelDomain: {
       type : Array, required: true
    },
    currencies: {
       type : Object
    },
    languages: {
       type : Object
    },
    borders: {
       type : Array
    }
});

export const country = mongoose.models.country || mongoose.model('country', countrySchema);