import mongoose from "mongoose"

const Schema = mongoose.Schema

const taskSchema = new Schema({
  text: String,
  done: Boolean,
})

const Task = mongoose.model('Task', taskSchema)

export {
  Task
}