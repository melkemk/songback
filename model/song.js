const mongoose=require('mongoose')

const Schema=mongoose.Schema({
    name: { type: String, required: true },
    change:{type:Boolean,default:false}
})

Schema.set("toJSON", {
        transform: (_, obj) => {
          obj.id = obj._id
          delete obj._id
          delete obj.__v
        },
      })
const Song=mongoose.model('song',Schema);

module.exports=Song;