// Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true },
  password: String
},
{
  timestamps: {
    createdAt: 'create_at',
    updatedAt: 'updated_at'
  }
}
)

const User = mongoose.model('User', userSchema);

module.exports = User;