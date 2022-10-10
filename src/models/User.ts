import { getModelForClass, prop } from '@typegoose/typegoose'

class User {
  @prop({ required: true })
  firstname: string

  @prop({ required: true })
  lastname: string

  @prop({ required: true })
  email: string

  @prop()
  password: string
}

const UserModel = getModelForClass(User)
export { User, UserModel }
