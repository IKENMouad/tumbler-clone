import User from '../models/User.model'

export const attachHashs = async ( req, res) => {
    const  {  hashIds  } =   req
   const user = await User.findById(req.user._id)
    
    if(user){
          user.hashs.push([...hashIds])
          await user.save() 
          return res.status(201).send( { code:'success' }  )  
    }
}