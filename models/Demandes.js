const mongoose = require ('mongoose')




  
const demandeSchema = mongoose.Schema(
    {
        date : {
            type : Date,
            default : Date.now(),
            required : [true, "Veuillez saisir la date"]
        },
        Etat : {
            type : String,
            enum: ['En attente', 'en attente', ,'en cours', 'En cours', 'Terminée', 'Annulée','Annulé', 'annule' , 'annulee' ],
            required : [true, "Veuillez saisir l'etat"]
        },
        Nom_Organisation : {
            type : String,
            required : [true, "Veuillez saisir le nom de l'organisation"]
        }
    }
)

const Demande = mongoose.model('Demande', demandeSchema);

module.exports = Demande;